import React from 'react'

class TodoForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
                <input
                    type="text"
                    value={this.props.input}
                    onChange={this.props.changeHandler}
                />
                <button type="submit">Add Todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm