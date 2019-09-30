import React from 'react'

import './Todo.css'

class Todo extends React.Component {
    render() {
        return (
            <li
                className={this.props.completed?'completed':''}
                onClick={()=>{this.props.handler(this.props.id)}}
            >
                {this.props.task}
            </li>
        )
    }
}

export default Todo