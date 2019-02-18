import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todo extends Component {
 
  render() {
    return this.props.todos.map(e=>(
      <TodoItem key={e.id} todo={e} delTodo={this.props.delTodo} markComplete={this.props.markComplete}></TodoItem>
    ));
  }
}

export default Todo;
