import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types'; 

import { mapStateToProps, mapDispatchToProps } from './redux/reduxBindings';

const Todo = (props) => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}

Todo.propTypes = {

};

Todo.defaultProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
export { Todo }
