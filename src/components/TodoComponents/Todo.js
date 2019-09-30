import React from 'react'

import './Todo.css'

class Todo extends React.Component {
    render() {
        return (
            <li
                className={this.props.completed?'completed text-danger':''}
                onClick={()=>{this.props.handler(this.props.id)}}
                hidden={RegExp(this.props.search,'i').test(this.props.task)?false:true}
            >
                {this.props.task}
            </li>
        )
    }
}

export default Todo