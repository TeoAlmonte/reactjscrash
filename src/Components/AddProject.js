import React, { Component } from 'react';

class  AddProject extends Component {
  static defaultProps = {
    categories: ['web', 'dev', 'mobile']
  }
  render() {
    let catOptions = this.props.categories.map(category => {
      return <option key={category} value="category">{category}</option>
    })
    return (
      <div>
        Add
        <form>
          <div>
            <label for="Title"></label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <select ref="category">
              {catOptions}
            </select>
          </div>
        </form>
      </div>
    );
  }
}


export default AddProject;
