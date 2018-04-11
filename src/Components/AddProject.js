import React, { Component } from 'react';
import uuid from 'uuid'
class  AddProject extends Component {

  constructor() {
    super()
    this.state = {
      newProject:{}
    }
  }

  static defaultProps = {
    categories: ['web', 'dev', 'mobile']
  }

  handleSubmit(e){
    console.log('Submitted')
    console.log(this.refs.title.value)
    if(this.refs.title.value === ''){
      alert('empty title');
    } else {
      this.setState({newProject:{
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value
      }}, () => {
        console.log(this.state)
        this.props.AddProject(this.state.newProject)
      })
    }
    e.preventDefault()
  }

  render() {
    let catOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div>
        Add
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>title</label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <select ref="category">
              {catOptions}
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}


export default AddProject;
