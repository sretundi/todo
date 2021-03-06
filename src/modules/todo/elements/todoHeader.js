import React from 'react';
import PropTypes from 'prop-types';

import TodoFilter from './todoFilter';

import '../css/todoHeader.css';

const TodoHeader = (todo) => {
  return (
    <div className='todoHeader'>
      <p>Incomplete Todos Remaining {todo.incompleteTodosCount}</p>
      <button onClick={todo.actions.toggleAllTodos}>Toggle Todos</button>
      <button onClick={todo.actions.clearCompletedTodos}>Clear Completed Todos</button>
      <TodoFilter {...todo} />
    </div>
  )
}

TodoHeader.propTypes = {
  actions: PropTypes.objectOf(PropTypes.func).isRequired,
  incompleteTodosCount: PropTypes.number.isRequired
};

TodoHeader.defaultProps = {
  incompleteTodosCount: 0,
};

export default TodoHeader;
