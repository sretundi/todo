
import UpdateTodoList, { addTodoList, deleteTodoFromList, onSaveOrDiscardEditedTodo, toggleTodos, todoStatus, clearTodos } from './middleware/UpdateTodoList';
import { updateTodoInList } from './reducers';

export const ACTION_CONSTANTS = {
  SUMBIT_TODO: 'SUBMIT_TODO',
  TODO_INPUT_ONCHANGE: 'TODO_INPUT_ONCHANGE',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO_STATUS: 'TOGGLE_TODO_STATUS',
  TOGGLE_EDITABLE_STATE: 'TOGGLE_EDITABLE_STATE',
  EDIT_TODO_ONCHANGE: 'EDIT_TODO_ONCHANGE',
  ON_KEY_PRESS_FROM_EDITABLE_STATE: 'KEY_PRESS_FROM_EDITABLE_STATE',
  TOGGLE_ALL_TODOS: 'TOGGLE_ALL_TODOS',
  CLEAR_COMPLETED_TODOS: 'CLEAR_COMPLETED_TODOS',
  TODO_FILTER: 'TODO_FILTER'
};

export const actionUtils = {
  createAction: (constant, data) => {
    return {
      type: constant,
      data
    }
  },
  subActionConstants: {
    DISCARD: 'DISCARD',
    SAVE: 'SAVE'
  },
  todoFilterConstants: {
    ALL: 'ALL',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'COMPLETED'
  }
}

const submitTodo = () => {
  return (dispatch, getState) => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.SUMBIT_TODO, UpdateTodoList(getState().TodoState, addTodoList)))
  }
}

const todoInputOnChange = (data) => {
  return (dispatch) => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.TODO_INPUT_ONCHANGE, data))
  }
}

const handleKeyPress = () => {
  return (dispatch, getState) => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.SUMBIT_TODO, UpdateTodoList(getState().TodoState, addTodoList)));
  };
}

const deleteTodo = (id) => {
  return (dispatch, getState) => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.DELETE_TODO, UpdateTodoList(getState().TodoState, deleteTodoFromList(id))))
  };
}

const toggleTodoStatus = (id) => {
  return (dispatch, getState) => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.TOGGLE_TODO_STATUS, UpdateTodoList(getState().TodoState, todoStatus(id))))
  };
}

const toggleEditableState = (id) => {
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.TOGGLE_EDITABLE_STATE, id))
  })
}

const editTodoOnChange = (id, value) => {
  const data = {
    id, value
  }
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.EDIT_TODO_ONCHANGE, data))
  })
}

const onKeyPressFromEditableState = (id, subAction) => {
  const data = {
    id, subAction
  }
  return (dispatch, getState) => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.ON_KEY_PRESS_FROM_EDITABLE_STATE, UpdateTodoList(getState().TodoState, onSaveOrDiscardEditedTodo(data))))
  };
}

const toggleAllTodos = () => {
  return (dispatch, getState) => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.TOGGLE_ALL_TODOS, UpdateTodoList(getState().TodoState, toggleTodos)))
  };
}

const clearCompletedTodos = () => {
  return (dispatch, getState) => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.CLEAR_COMPLETED_TODOS, UpdateTodoList(getState().TodoState, clearTodos)))
  };
}

const filterTodos = (filterType) => {
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.TODO_FILTER, filterType))
  })
}

export default {
  submitTodo,
  todoInputOnChange,
  handleKeyPress,
  deleteTodo,
  toggleTodoStatus,
  toggleEditableState,
  editTodoOnChange,
  onKeyPressFromEditableState,
  toggleAllTodos,
  clearCompletedTodos,
  filterTodos
}
