import { getNumberOfIncompleteTodos, getTodoById, updateTodoInList } from '../reducers';
import { actionUtils } from '../actions';

import Todo, { validTodo} from '../../Todo';
import { saveToLocal } from '../../../LocalStorage/index';

export const addTodoList = (state) => {
  const updatedList = [...state.todosList];
  const todo = new Todo();
  if (validTodo(state.todoInputValue)) {
    todo.setTodoValue(state.todoInputValue);
    updatedList.push(todo.getTodo());
    return Object.assign({}, state, {
      todosList: updatedList,
      todoInputValue: '',
      incompleteTodosCount: getNumberOfIncompleteTodos(updatedList)
    })
  }
  return state;
}

export const deleteTodoFromList = (id) => (state) => {
  const updatedList = state.todosList.filter(todo => todo.id !== id);
  return Object.assign({}, state, {
    todosList: updatedList,
    incompleteTodosCount: getNumberOfIncompleteTodos(updatedList),
  })
} 

export const onSaveOrDiscardEditedTodo = (data) => (state) => {
  const todo = getTodoById(state.todosList, data.id)
  if (data.subAction === actionUtils.subActionConstants.SAVE) {
    let updatedList = [...state.todosList];
    const editedValue = todo.editedValue;
    if (!validTodo(editedValue)) {
      updatedList = updatedList.filter(todo => todo.id !== data.id)
    } else {
      todo.todoValue = editedValue;
      todo.isEditable = false;
    }
    return Object.assign({}, state, {
      todosList: updateTodoInList(updatedList, data.id, todo),
      incompleteTodosCount: getNumberOfIncompleteTodos(updatedList),
    })
  } else if (data.subAction === actionUtils.subActionConstants.DISCARD) {
    todo.editedValue = '';
    todo.isEditable = false;
    const updatedList = updateTodoInList([state.todosList], data.id, todo)
    return Object.assign({}, state, {
      todosList: updatedList,
      incompleteTodosCount: getNumberOfIncompleteTodos(updatedList),
    })
  }
  return state;
}

export const toggleTodos = (state) => {
  const completedTodos = state.todosList.filter(todo => todo.isCompleted === true);
  let updatedList = [];
  if (completedTodos.length === state.todosList.length) {
    updatedList = completedTodos.map((todo) => {
      todo.isCompleted = false;
      return todo;
    })
  } else if (completedTodos.length > 0) {
    updatedList = state.todosList.map((todo) => {
      if (!todo.isCompleted) {
        todo.isCompleted = true;
        return todo;
      }
      return todo;
    })
  } else {
    updatedList = state.todosList.map(todo => todo);
  }
  return Object.assign({}, state, {
    todosList: updatedList,
    incompleteTodosCount: getNumberOfIncompleteTodos(updatedList),
  })
}

export const todoStatus = (id) => (state) => {
  const todo = getTodoById(state.todosList, id)
  todo.isCompleted = !todo.isCompleted;
  const updatedList = updateTodoInList(state.todosList, id, todo)
  return Object.assign({}, state, {
    todosList: updatedList,
    incompleteTodosCount: getNumberOfIncompleteTodos(updatedList)
  })
}

export const clearTodos = (state) => {
  return Object.assign({}, state, {
    todosList: state.todosList.filter(todo => todo.isCompleted === false),
  })
}

const UpdateTodoList = (state, callback) => {
  const Key = 'TODOS_LIST';
  const currentState = callback(state);
  saveToLocal(currentState, Key)
  return currentState;
}

export default UpdateTodoList;
