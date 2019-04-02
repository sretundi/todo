import React from 'react';
import PropTypes from 'prop-types'; 

import TodoElement from './todoElement';
import { actionUtils } from '../redux/actions';

const TodoList = (props) => {
  let listElements = [];
  if (props.todoFilter.COMPLETED) {
    listElements = props.todosList
    .filter(todo => todo.isCompleted === true)
    .map((todo, index) => {
      return todoListItem(todo, props, index)      
    })
  } else if (props.todoFilter.ACTIVE) {
    listElements = props.todosList
      .filter(todo => todo.isCompleted === false)
      .map((todo, index) => {
        return todoListItem(todo, props, index)      
      })
  } else {
    listElements = props.todosList.map((todo, index) => {
      return todoListItem(todo, props, index)      
    })
  }
  return (
    <ul>
      { listElements }
    </ul>
  )
}

const todoListItem = (todo, props, index) => {
  return (
    <li key={index} >
      <TodoElement {...todo} {...props} index={index} /> 
    </li>
  )
}

export default TodoList;
