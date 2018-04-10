import React, { Component } from 'react';

class  AddProject extends Component {
  static defaultProps = {
    categories: ['web', 'dev', 'mobile']
  }

  handleSubmit(e){
    console.log('Submitted')
    e.preventDefault()
  }

  render() {
    let catOptions = this.props.categories.map(category => {
      return <option key={category} value="category">{category}</option>
    })
    return (
      <div>
        Add
        <form onSubmit={this.handleSubmit}>
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
