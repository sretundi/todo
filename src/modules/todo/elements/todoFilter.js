import React from 'react';
import PropTypes from 'prop-types';

import { actionUtils } from '../redux/actions';

const TodoFilter = (todo) => {
  return (
    <div className='todoHeader'>
      <input 
        type='checkbox' 
        checked={todo.todoFilter[actionUtils.todoFilterConstants.ALL]} 
        onChange={() => todo.actions.filterTodos(actionUtils.todoFilterConstants.ALL)}
      ></input>
      <label>All</label>
      <input 
        type='checkbox' 
        checked={todo.todoFilter[actionUtils.todoFilterConstants.ACTIVE]} 
        onChange={() => todo.actions.filterTodos(actionUtils.todoFilterConstants.ACTIVE)}
      ></input>
      <label>Active</label>
      <input 
        type='checkbox' 
        checked={todo.todoFilter[actionUtils.todoFilterConstants.COMPLETED]} 
        onChange={() => todo.actions.filterTodos(actionUtils.todoFilterConstants.COMPLETED)}        
      ></input>
      <label>Completed</label>
    </div>
  )
}

export default TodoFilter;
