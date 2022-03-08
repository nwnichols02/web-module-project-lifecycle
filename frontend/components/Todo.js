import React from 'react'

class Todo extends React.Component {

handleClick = () => {
  this.props.handleToggle(this.props.todo.id);
}
  render() {
    return (
      <li onClick={this.handleClick}>
        {this.props.todo.task} {this.props.todo.completed ? <span>✓</span> : <span></span>}
      </li>
    );
  }
}

export default Todo;