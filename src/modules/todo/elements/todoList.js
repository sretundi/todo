import React from 'react';
import PropTypes from 'prop-types'; 

import TodoElement from './todoElement';

const TodoList = (props) => {
  const listElements = props.todosList.map((todo, index) => {
    return (
      <li key={index} >
        <TodoElement {...todo} {...props} index={index} /> 
      </li>
    )
  })
  return (
    <ul>
      { listElements }
    </ul>
  )
}

export default TodoList;
