

export const ACTION_CONSTANTS = {

};

const blankActionCreator = () => {
  const createAction = (data) => {
    return {
      type: 'im a constant',
      data
    }
  }
  return (dispatch, getState) => {
    dispatch(createAction);
  }
}

export default {
  blankActionCreator
}
