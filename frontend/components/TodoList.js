import React from "react";
import Todo from "./Todo";

class ToDoList extends React.Component {
  render(){
    return(
      <ul>
      {this.props.todos.map((todo) => {
        return (<Todo key={todo.id} handleToggle={this.props.handleToggle}todo={todo}/>);
      })}
    </ul>
    )
  }
}

export default ToDoList;