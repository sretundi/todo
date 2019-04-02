
import { ACTION_CONSTANTS, actionUtils } from './actions';
import Todo from '../Todo';

const initialState = () => {
  return Object.assign({
    todoInputValue: '',
    todosList: [],
    incompleteTodosCount: 0,
    todoFilter: {
      [actionUtils.todoFilterConstants.ALL]: true,
      [actionUtils.todoFilterConstants.COMPLETED]: false,
      [actionUtils.todoFilterConstants.ACTIVE]: false,
    },
    todoFilteredList: null,
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
    case ACTION_CONSTANTS.CLEAR_COMPLETED_TODOS:
      return clearCompletedTodos(state);
    case ACTION_CONSTANTS.TODO_FILTER: 
      return filterTodos(state, action.data);
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
      todoInputValue: '',
      incompleteTodosCount: getNumberOfIncompleteTodos(updatedList)
    })
  }
  return state;
}

const deleteTodoFromList = (state, id) => {
  const updatedList = state.todosList.filter(todo => todo.id !== id);
  return Object.assign({}, state, {
    todosList: updatedList,
    incompleteTodosCount: getNumberOfIncompleteTodos(updatedList),
  })
} 

const toggleTodoStatus = (state, id) => {
  const todo = getTodoById(state.todosList, id)
  todo.isCompleted = !todo.isCompleted;
  const updatedList = updateTodoInList(state.todosList, id, todo)
  return Object.assign({}, state, {
    todosList: updatedList,
    incompleteTodosCount: getNumberOfIncompleteTodos(updatedList)
  })
}

const toggleEditableState = (state, id) => {
  const todo = getTodoById(state.todosList, id)
  todo.isEditable = !todo.isEditable;
  todo.editedValue = todo.InputValue;
  return Object.assign({}, state, {
    todosList: updateTodoInList([...state.todosList], id, todo)
  })
}

const editTodoOnChange = (state, data) => {
  const todo = getTodoById(state.todosList, data.id)
  todo.editedValue = data.value;
  return Object.assign({}, state, {
    todosList: updateTodoInList([...state.todosList], data.id, todo),
  })
}

const onSaveOrDiscardEditedTodo = (state, data) => {
  const todo = getTodoById(state.todosList, data.id)
  if (data.subAction === actionUtils.subActionConstants.SAVE) {
    let updatedList = [...state.todosList];
    const editedValue = todo.editedValue;
    if (!todo.validTodo(editedValue)) {
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
    incompleteTodosCount: getNumberOfIncompleteTodos(updatedList),
  })
}

const clearCompletedTodos = (state) => {
  return Object.assign({}, state, {
    todosList: state.todosList.filter(todo => todo.isCompleted === false),
  })
}

const filterTodos = (state, filterType) => {
  const keys = Object.keys(state.todoFilter);
  const filter = {}
  keys.forEach((key) => {
    if (key === filterType) {
      filter[key] = true;
    } else {
      filter[key] = false;
    }
  })
  return Object.assign({}, state, {
    todoFilter: filter,
  })
}

const getNumberOfIncompleteTodos = (list) => {
  return list.filter(todo => todo.isCompleted === false).length
}

const getTodoById = (list, id) => {
  return list.filter(todo => todo.id === id)[0];
}

const updateTodoInList = (list, id, updatedTodo) => {
  return list.map((todo) => {
    if (todo.id === id) {
      return updatedTodo;
    }
    return todo;
  })
}

export default TodoReducer;
