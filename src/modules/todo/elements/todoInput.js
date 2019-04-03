import React from 'react';
import PropTypes from 'prop-types'; 

const TodoInput = (props) => {
  return (
  <div>
    <input 
      type='text' 
      value={props.todoInputValue} 
      onChange={(e) => props.actions.todoInputOnChange(e.target.value)}
      onKeyPress={(e) => keyPressEvent(e, props)}
      ></input>
    <button onClick={props.actions.submitTodo}>Submit</button>
  </div>
  )
}

const keyPressEvent = (e, props) => {
  const enterKey = 13;
  if (e.charCode === enterKey) {
    props.actions.handleKeyPress();
  }
}

TodoInput.propTypes = {
  todoInputValue: PropTypes.string.isRequired,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

TodoInput.defaultProps = {
  todoInputValue: '',
};

export default TodoInput;
