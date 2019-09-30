// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo => <Todo key={todo.id} {...todo} handler={this.props.handler} search={this.props.search} />)}
            </ul>
        )
    }
}

export default TodoList