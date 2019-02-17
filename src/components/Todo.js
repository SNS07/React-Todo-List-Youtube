import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todo extends Component {
 
  render() {
    return this.props.todos.map(e=>(
      <TodoItem key={e.id} todo={e} markComplete={this.props.markComplete}></TodoItem>
    ));
  }
}
Todo.PropTypes = {
  todos:PropTypes.array.isRequired,
}
export default Todo;
