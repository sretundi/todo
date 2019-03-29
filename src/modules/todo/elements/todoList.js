import React from 'react';
import PropTypes from 'prop-types'; 

const TodoList = (props) => {
  const listElements = props.todosList.map((todo) => {
    return (
      // <div>
      //   <p>{todo}</p>
      // </div>
      <li>
        { todo.todoValue }
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
