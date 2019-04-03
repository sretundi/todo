
import { ACTION_CONSTANTS, actionUtils } from './actions';

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
    case ACTION_CONSTANTS.SUMBIT_TODO: 
    case ACTION_CONSTANTS.DELETE_TODO:
    case ACTION_CONSTANTS.ON_KEY_PRESS_FROM_EDITABLE_STATE:
    case ACTION_CONSTANTS.TOGGLE_ALL_TODOS:
    case ACTION_CONSTANTS.TOGGLE_TODO_STATUS:
    case ACTION_CONSTANTS.CLEAR_COMPLETED_TODOS:
      return Object.assign({}, state, action.data)
    case ACTION_CONSTANTS.TODO_INPUT_ONCHANGE:
      return todoValueChange(state, action.data)
    case ACTION_CONSTANTS.TOGGLE_EDITABLE_STATE:
      return toggleEditableState(state, action.data)
    case ACTION_CONSTANTS.EDIT_TODO_ONCHANGE: 
      return editTodoOnChange(state, action.data)
      // return clearCompletedTodos(state);
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

export const getNumberOfIncompleteTodos = (list) => {
  return list.filter(todo => todo.isCompleted === false).length
}

export const getTodoById = (list, id) => {
  return list.filter(todo => todo.id === id)[0];
}

export const updateTodoInList = (list, id, updatedTodo) => {
  return list.map((todo) => {
    if (todo.id === id) {
      return updatedTodo;
    }
    return todo;
  })
}

export default TodoReducer;
