import { bindActionCreators } from 'redux';

import Todo from './actions';

export const mapStateToProps = state => ({
  ...state.TodoState
})

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(Todo, dispatch)
    }
}
