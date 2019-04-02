

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
  return (dispatch) => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.SUMBIT_TODO, null))
  }
}

const todoInputOnChange = (data) => {
  return (dispatch) => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.TODO_INPUT_ONCHANGE, data))
  }
}

const handleKeyPress = (data) => {
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.SUMBIT_TODO, null));
  })
}

const deleteTodo = (id) => {
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.DELETE_TODO, id))
  })
}

const toggleTodoStatus = (id) => {
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.TOGGLE_TODO_STATUS, id))
  })
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
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.ON_KEY_PRESS_FROM_EDITABLE_STATE, data))
  })
}

const toggleAllTodos = () => {
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.TOGGLE_ALL_TODOS))
  })
}

const clearCompletedTodos = () => {
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.CLEAR_COMPLETED_TODOS))
  })
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
