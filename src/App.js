import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends Component {
  state = {
    todos:[
      {
        id:1,
        title:'Take out trash',
        completed:false
      },
      {
        id:2,
        title:'Take out can',
        completed:true
      },
      {
        id:3,
        title:'Take out outside',
        completed:false
      }
    ]
  }
  render() {
    return (
      <div className="App">
       <h1 >Application</h1>
       <Todo todos={this.state.todos}></Todo>
      </div>
    );
  }
}

export default App;
