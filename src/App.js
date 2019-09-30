import React from 'react';
import {Container, Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import Search from './components/TodoComponents/Search'
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todos: [],
      input: '',
      search: '',
    }
  }

  componentDidMount() {
    const todos = localStorage.getItem('todos')
    if (todos) {
      this.setState({
        ...this.state,
        todos: JSON.parse(todos)
      })
    }
  }

  componentDidUpdate(preProps, preState) {
    if (this.state.todos !== preState.todos) {
      console.log('update storage')
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  }

  changeHandler = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
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

  toggleCompleted = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }),
    })
  }

  clearCompleted = e => {
    e.preventDefault()
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.completed)
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <div className="col-sm-6 mx-auto">
            <h2 className="text-center">Welcome to your Todo App!</h2>
            <Search search={this.state.search} handler={this.changeHandler} />
            <TodoList
              {...this.state}
              handler={this.toggleCompleted}
            />
            <TodoForm
              input={this.state.input}
              changeHandler={this.changeHandler}
              submitHandler={this.submitHandler}
              clearCompleted={this.clearCompleted}
            />
          </div>
        </Row>
      </Container>
    );
  }
}

export default App;
