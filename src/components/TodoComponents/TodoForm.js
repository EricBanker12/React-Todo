import React from 'react'
import {Form, Input, Button} from 'reactstrap'

class TodoForm extends React.Component {
    render() {
        return (
            <Form onSubmit={this.props.submitHandler}>
                <Input
                    type="text"
                    name="input"
                    placeholder="Task"
                    value={this.props.input}
                    onChange={this.props.changeHandler}
                />
                <div className="d-flex justify-content-between mt-3">
                    <Button className="btn-success" type="submit">Add Todo</Button>
                    <Button className="btn-danger" onClick={this.props.clearCompleted}>Clear Completed</Button>
                </div>
            </Form>
        )
    }
}

export default TodoForm