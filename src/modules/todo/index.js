import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types'; 

import { mapStateToProps, mapDispatchToProps } from './redux/reduxBindings';

import TodoInput from './elements/todoInput';
import TodoList from './elements/todoList';
import TodoHeader from './elements/todoHeader';

import './index.css';

const Todo = (props) => {
  return (
    <div className='todoContainer'>
      <TodoHeader {...props} />
      <TodoInput {...props}/>
      <TodoList {...props} />
    </div>
  )
}

Todo.propTypes = {

};

Todo.defaultProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
export { Todo }
