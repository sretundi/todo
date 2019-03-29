import React from 'react';
import PropTypes from 'prop-types';

import '../css/todoElement.css';

// TODO: bring in icons
const TodoElement = (todo) => {
  return (
    <div className='todoElement'>
      <p>{todo.todoValue}</p>
      <button
        className='deleteIcon'
        onClick={() => todo.actions.deleteTodo(todo.index)}
      >Delete</button>
    </div>
  )
}

export default TodoElement;