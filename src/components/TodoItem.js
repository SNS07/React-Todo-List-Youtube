import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    getStyle = ()=>{
        return {
            backgroundColor:'yellow',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed?'line-through':'none'
        }
    }
  render() {
    return (
      <div style={this.getStyle()}><p>{this.props.todo.title}</p>
        
      </div>
    )
  }
}
TodoItem.PropTypes = {
    todo:PropTypes.object.isRequired,
  }
  const itemStyle = {
      backgroundColor:'yellow'
  }
export default TodoItem