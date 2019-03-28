import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import TodoReducer from './modules/todo/redux/reducers';

const reducers = combineReducers({
  TodoState: TodoReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;