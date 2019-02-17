import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: 'yellow',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    markComplete = () => {

    }
    render() {
        const{id,title}=this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />
                    {title}
                </p>

            </div>
        )
    }
}
TodoItem.PropTypes = {
    todo: PropTypes.object.isRequired,
}
const itemStyle = {
    backgroundColor: 'yellow'
}
export default TodoItem
