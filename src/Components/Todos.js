import React, { Component } from 'react';
import TodoItem from './Todoitem'

class Todos extends Component {

  render() {
    let todoItems;
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        console.log(todo)
        return (
          <TodoItem  key={todo.title} todo={todo} />
        )
      })
    }
    return (
      <div>
        My 2dod
        {todoItems}
      </div>
    );
  }
}


export default Todos;
