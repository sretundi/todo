

export const ACTION_CONSTANTS = {
  SUMBIT_TODO: 'SUBMIT_TODO',
  TODO_INPUT_ONCHANGE: 'TODO_INPUT_ONCHANGE',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO_STATUS: 'TOGGLE_TODO_STATUS',
};

const actionUtils = {
  createAction: (constant, data) => {
    return {
      type: constant,
      data
    }
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

export default {
  submitTodo,
  todoInputOnChange,
  handleKeyPress,
  deleteTodo,
  toggleTodoStatus
}
