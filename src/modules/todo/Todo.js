
class Todo {
  constructor() {
    this.todoValue = '';
    this.isCompleted = false;
    this.isEditable = false;
    this.editedValue = ''
    this.id = `${new Date().getMilliseconds()}-todo`

    this.getTodo = this.getTodo.bind(this);
    this.setTodoValue = this.setTodoValue.bind(this);
  }

  setTodoValue(todo) {
    this.todoValue = todo;
  }

  getTodo() {
    return this;
  }
}

export const validTodo = (todo) => {
  if (todo !== '' && /\S/.test(todo)) {
    return true;
  }
  return false;
}

export default Todo;
