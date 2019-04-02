

export const ACTION_CONSTANTS = {
  SUMBIT_TODO: 'SUBMIT_TODO',
  TODO_INPUT_ONCHANGE: 'TODO_INPUT_ONCHANGE',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO_STATUS: 'TOGGLE_TODO_STATUS',
  TOGGLE_EDITABLE_STATE: 'TOGGLE_EDITABLE_STATE',
  EDIT_TODO_ONCHANGE: 'EDIT_TODO_ONCHANGE',
  ON_KEY_PRESS_FROM_EDITABLE_STATE: 'KEY_PRESS_FROM_EDITABLE_STATE',
  TOGGLE_ALL_TODOS: 'TOGGLE_ALL_TODOS'
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

const deleteTodo = (index) => {
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.DELETE_TODO, index))
  })
}

const toggleTodoStatus = (index) => {
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.TOGGLE_TODO_STATUS, index))
  })
}

const toggleEditableState = (index) => {
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.TOGGLE_EDITABLE_STATE, index))
  })
}

const editTodoOnChange = (index, value) => {
  const data = {
    index, value
  }
  return (dispatch => {
    dispatch(actionUtils.createAction(ACTION_CONSTANTS.EDIT_TODO_ONCHANGE, data))
  })
}

const onKeyPressFromEditableState = (index, subAction) => {
  const data = {
    index, subAction
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

export default {
  submitTodo,
  todoInputOnChange,
  handleKeyPress,
  deleteTodo,
  toggleTodoStatus,
  toggleEditableState,
  editTodoOnChange,
  onKeyPressFromEditableState,
  toggleAllTodos
}
