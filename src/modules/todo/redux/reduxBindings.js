import { bindActionCreators } from 'redux';

import Todo from './actions';

export const mapStateToProps = state => ({
  ...state.Todo
})

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Todo, dispatch)
    }
}
