import React, { Component } from 'react';

class ProjectItem extends Component {
  deleteProject(id){
    console.log('delete');
    this.props.onDelete(id);
  }
  render() {
    return (
      <li className="project">
        {this.props.project.title} - {this.props.project.category} - <small> {this.props.project.id} </small> <button onClick={this.deleteProject.bind(this, this.props.project.id)}>remove</button>
      </li>
    );
  }
}

export default ProjectItem;
