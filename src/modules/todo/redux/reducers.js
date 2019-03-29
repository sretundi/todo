
import actions, { ACTION_CONSTANTS } from './actions';
import Todo from '../Todo';

const initialState = () => {
  return Object.assign({
    todoInputValue: '',
    todosList: []
  })
}

const TodoReducer = (state = initialState(), action) => {
  switch(action.type) {
    case ACTION_CONSTANTS.TODO_INPUT_ONCHANGE:
      return todoValueChange(state, action.data)
    case ACTION_CONSTANTS.SUMBIT_TODO: 
      return addTodoToList(state, action.data)
    case ACTION_CONSTANTS.DELETE_TODO:
      return deleteTodoFromList(state, action.data)
    default:
      return state;
  }
}

const todoValueChange = (state, data) => {
  return Object.assign({}, state, {
    todoInputValue: data
  })
}

const addTodoToList = (state) => {
  const updatedList = [...state.todosList];
  const todo = new Todo();
  if (todo.validTodo(state.todoInputValue)) {
    todo.setTodoValue(state.todoInputValue);
    updatedList.push(todo.getTodo());
    return Object.assign({}, state, {
      todosList: updatedList,
      todoInputValue: ''
    })
  }
  return state;
}

const deleteTodoFromList = (state, index) => {
  const updatedList = [...state.todosList];
  updatedList.splice(index, 1);
  return Object.assign({}, state, {
    todosList: updatedList
  })

} 

export default TodoReducer;
