import React from 'react';
import PropTypes from 'prop-types';

import '../css/todoElement.css';

// TODO: bring in icons
const TodoElement = (todo) => {
  return (
    <div className='todoElement'>
      <p className={lineThrough(todo.isCompleted)}>{todo.todoValue}</p>
      <input type='checkbox' checked={todo.isCompleted} onChange={() => todo.actions.toggleTodoStatus(todo.index)}></input>
      <button
        className='todoElement__deleteIcon'
        onClick={() => todo.actions.deleteTodo(todo.index)}
      >Delete</button>
    </div>
  )
}

const lineThrough = (isCompleted) => {
  return isCompleted ? 'todoElement__todoValue--strike' : '';
}

export default TodoElement;