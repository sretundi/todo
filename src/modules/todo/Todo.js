
class Todo {
  constructor() {
    this.todoValue = '';
    this.isCompleted = false;
  }

  setTodoValue(todo) {
    if (this.validTodo(todo)) {
      this.todoValue = todo;
    }
  }

  getTodo() {
    return {
      todoValue: this.todoValue,
      isCompleted: this.isCompleted
    }
  }

  validTodo(todo) {
    if (todo !== '' && todo !== ' ') {
      return true;
    }
    return false;
  }
}

export default Todo;
