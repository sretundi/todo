import React from 'react';
import PropTypes from 'prop-types';

import { actionUtils } from '../redux/actions';

import '../css/todoElement.css';

// TODO: bring in icons
const TodoElement = (todo) => {
  return (
    <div className='todoElement'>
      <input 
        onKeyUp={todo.isEditable ? (e) => keyPressEvent(e, todo.id, todo.actions.onKeyPressFromEditableState) : () => {}}
        onDoubleClick={()=> todo.actions.toggleEditableState(todo.id)}
        onChange={todo.isEditable ? (e) => todo.actions.editTodoOnChange(todo.id, e.target.value) : () => {}}
        className={lineThrough(todo.isCompleted)} 
        value={todo.isEditable ? todo.editedValue : todo.todoValue} 
      ></input>
      <input 
        type='checkbox' 
        checked={todo.isCompleted} 
        onChange={() => todo.actions.toggleTodoStatus(todo.id)}
      ></input>
      <button
        className='todoElement__deleteIcon'
        onClick={() => todo.actions.deleteTodo(todo.id)}
      >Delete</button>
    </div>
  )
}

const lineThrough = (isCompleted) => {
  return isCompleted ? 'todoElement__todoValue--strike' : '';
}

const keyPressEvent = (e, id, callback) => {
  const enterKey = 'Enter';
  const escapeKey = 'Escape';
  if (e.key === enterKey) {
    return callback(id, actionUtils.subActionConstants.SAVE)
  } else if (e.key === escapeKey) {
    return callback(id, actionUtils.subActionConstants.DISCARD)
  } 
}

export default TodoElement;