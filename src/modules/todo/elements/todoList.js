import React from 'react';
import PropTypes from 'prop-types'; 

import TodoElement from './todoElement';
import { actionUtils } from '../redux/actions';

const TodoList = (props) => {
  let listElements = [];
  if (props.todoFilter.COMPLETED) {
    listElements = props.todosList
    .filter(todo => todo.isCompleted === true)
    .map((todo) => {
      return todoListItem(todo, props)      
    })
  } else if (props.todoFilter.ACTIVE) {
    listElements = props.todosList
      .filter(todo => todo.isCompleted === false)
      .map((todo) => {
        return todoListItem(todo, props)      
      })
  } else {
    listElements = props.todosList.map((todo) => {
      return todoListItem(todo, props)      
    })
  }
  return (
    <ul>
      { listElements }
    </ul>
  )
}

const todoListItem = (todo, props) => {
  return (
    <li key={todo.id} >
      <TodoElement {...todo} {...props} /> 
    </li>
  )
}

export default TodoList;
