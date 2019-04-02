import React from 'react';
import PropTypes from 'prop-types';

import '../css/todoHeader.css';

const TodoHeader = (todo) => {
  return (
    <div className='todoHeader'>
      <button onClick={todo.actions.toggleAllTodos}>Toggle Todos</button>
    </div>
  )
}

export default TodoHeader;
