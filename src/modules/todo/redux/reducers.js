
import { ACTION_CONSTANTS, actionUtils } from './actions';
import Todo from '../Todo';

const initialState = () => {
  return Object.assign({
    todoInputValue: '',
    todosList: [],
    incompleteTodosCount: 0,
  })
}

const TodoReducer = (state = initialState(), action) => {
  switch(action.type) {
    case ACTION_CONSTANTS.TODO_INPUT_ONCHANGE:
      return todoValueChange(state, action.data)
    case ACTION_CONSTANTS.SUMBIT_TODO: 
      return addTodoToList(state, action.data)
    case ACTION_CONSTANTS.DELETE_TODO:
      return deleteTodoFromList(state, action.data)
    case ACTION_CONSTANTS.TOGGLE_TODO_STATUS:
      return toggleTodoStatus(state, action.data)
    case ACTION_CONSTANTS.TOGGLE_EDITABLE_STATE:
      return toggleEditableState(state, action.data)
    case ACTION_CONSTANTS.EDIT_TODO_ONCHANGE: 
      return editTodoOnChange(state, action.data)
    case ACTION_CONSTANTS.ON_KEY_PRESS_FROM_EDITABLE_STATE:
      return onSaveOrDiscardEditedTodo(state, action.data)
    case ACTION_CONSTANTS.TOGGLE_ALL_TODOS:
      return toggleAllTodos(state);
    default:
      return state;
  }
}

const todoValueChange = (state, data) => {
  return Object.assign({}, state, {
    todoInputValue: data
  })
}

const addTodoToList = (state) => {
  const updatedList = [...state.todosList];
  const todo = new Todo();
  if (todo.validTodo(state.todoInputValue)) {
    todo.setTodoValue(state.todoInputValue);
    updatedList.push(todo.getTodo());
    return Object.assign({}, state, {
      todosList: updatedList,
      todoInputValue: ''
    })
  }
  return state;
}

const deleteTodoFromList = (state, index) => {
  const updatedList = [...state.todosList];
  updatedList.splice(index, 1);
  return Object.assign({}, state, {
    todosList: updatedList,
    incompleteTodosCount: getNumberOfIncompleteTodos(updatedList)
  })
} 

const toggleTodoStatus = (state, index) => {
  const todo = getTodoByIndex(state, index)
  todo.isCompleted = !todo.isCompleted;
  const updatedList = [...state.todosList];
  updatedList[index] = todo;
  return Object.assign({}, state, {
    todosList: updatedList,
    incompleteTodosCount: getNumberOfIncompleteTodos(updatedList)
  })
}

const toggleEditableState = (state, index) => {
  const todo = getTodoByIndex(state, index)
  todo.isEditable = !todo.isEditable;
  todo.editedValue = todo.InputValue;
  const updatedList = [...state.todosList];
  updatedList[index] = todo;
  return Object.assign({}, state, {
    todosList: updatedList
  })
}

const editTodoOnChange = (state, data) => {
  const todo = getTodoByIndex(state, data.index)
  todo.editedValue = data.value;
  const updatedList = [...state.todosList];
  updatedList[data.index] = todo;
  return Object.assign({}, state, {
    todosList: updatedList
  })
}

const onSaveOrDiscardEditedTodo = (state, data) => {
  if (data.subAction === actionUtils.subActionConstants.SAVE) {
    const updatedList = [...state.todosList];
    const editedValue = updatedList[data.index].editedValue;
    const todo = getTodoByIndex(state, data.index);
    if (!todo.validTodo(editedValue)) {
      updatedList.splice(data.index, 1);
    } else {
      updatedList[data.index].todoValue = editedValue;
      updatedList[data.index].isEditable = false;
    }
    return Object.assign({}, state, {
      todosList: updatedList,
      incompleteTodosCount: getNumberOfIncompleteTodos(updatedList)
    })
  } else if (data.subAction === actionUtils.subActionConstants.DISCARD) {
    const updatedList = [...state.todosList];
    updatedList[data.index].editedValue = '';
    updatedList[data.index].isEditable = false;
    return Object.assign({}, state, {
      todosList: updatedList,
      incompleteTodosCount: getNumberOfIncompleteTodos(updatedList)
    })
  }
  return state;
}

const toggleAllTodos = (state) => {
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
    incompleteTodosCount: getNumberOfIncompleteTodos(updatedList)
  })
}

const getTodoByIndex = (state, index) => {
  return {...state.todosList[index]};
}

const getNumberOfIncompleteTodos = (list) => {
  return list.filter(todo => todo.isCompleted === false).length
}

export default TodoReducer;
