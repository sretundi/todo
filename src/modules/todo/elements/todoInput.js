import React from 'react';
import PropTypes from 'prop-types'; 

const TodoInput = (props) => {
  return (
  <div>
    <input type='text' value={props.todoInputValue} onChange={(e) => props.actions.todoInputOnChange(e.target.value)}></input>
    <button onClick={props.actions.submitTodo}>Submit</button>
  </div>
  )
}

export default TodoInput;
