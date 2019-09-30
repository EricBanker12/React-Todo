import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: [],
      input: '',
    }
  }

  changeHandler = e => {
    this.setState({
      ...this.state,
      input: e.target.value,
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: this.state.input,
          id: Date.now(),
          completed: false,
        },
      ],
      input: '',
    })
  }

  clearCompleted = e => {
    e.preventDefault()
    // todo
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
          input={this.state.input}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
