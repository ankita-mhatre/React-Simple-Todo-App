import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todo: [
      { id: 1, content: 'buy milk' },
      { id: 2, content: 'watch seven deadly sins' }
    ]
  }
  deleteTodo = (id) => {
    const todo = this.state.todo.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todo
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    const todos = [...this.state.todo, todo];
    this.setState({
      todo : todos
    });
  }
  render() {
    return (
      <div className="todo-app container" >
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todo} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}
export default App;
