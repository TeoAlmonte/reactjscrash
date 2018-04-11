import React, { Component } from 'react';

class TodoItem extends Component {

  render() {
    return (
      <li className="todo">
        {this.props.todo.title} - - <small> {this.props.todo.id} </small>
      </li>
    );
  }
}

export default TodoItem;
