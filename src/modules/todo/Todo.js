
class Todo {
  constructor() {
    this.todoValue = '';
    this.isCompleted = false;
    this.isEditable = false;
    this.editedValue = ''
  }

  setTodoValue(todo) {
    this.todoValue = todo;
  }

  getTodo() {
    return {
      todoValue: this.todoValue,
      isCompleted: this.isCompleted,
      isEditable: this.isEditable
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
