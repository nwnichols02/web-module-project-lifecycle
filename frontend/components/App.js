import React from 'react';
import axios from 'axios';
import ToDoList from './TodoList';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos'

const initialState = {
  input: '',
  todos: [],
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios.get(URL)
    .then(res => {
      console.log(res.data.data)
      this.setState({
        ...this.state,
        task: res.data.data,

      })
    })
    .catch(err => console.error('she broke', err))
  }


//delete 
  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter((todo) => {
        return todo.completed === false;
      }),
    });
  };
//post to add to list
  // handleAdd = (task) => {
  //   const newTodo = {
  //     task: task,
  //     id: Date.now(),
  //     completed: false,
  //   }

  //   this.setState({
  //     ...this.state,
  //     todos: [...this.state.todos, newTodo]
  //   })
  // }
  handleAdd = () => {
    const newTodo = {
      task: this.state.data.data.name,
      completed: this.state.data.completed,
    }
    axios.post(URL, newTodo)
    .then(res => {
      this.setState({
        ...this.state,
        todos: [...this.state.todos, res.data.name]
      })
    })
    .catch(err => {
      console.error(err)
      this.setState({ ...this.state,
        errorMessage: err.response.data.message
      })
    })
  }
//transform to Patch
  handleToggle = (clickedId) => {

    this.setState({
      ...this.state,
      todos: this.state.todos.map((todo) => {
        if(todo.id === clickedId){
          return {
            ...todo,
            completed: !todo.completed
          }
        } 
        return todo;
      })
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h2>Todo List:</h2>
        {/* is this correct */}
        <li>{this.state.todos}</li>
        <ToDoList handleToggle={this.handleToggle} todos={todos} />
        <Form handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Clear</button>
      </div>
    );
  }
}
