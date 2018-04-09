import React, { Component } from 'react';
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }
  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Test it',
        category: 'Web Design'
      },
      {
        title: 'RGg',
        category: 'Web Doodle'
      }
    ]})
  }

  render() {
    return (
      <div>
        My App
        <Projects name="Running" projects={this.state.projects} />
        <AddProject />
      </div>
    );
  }
}

export default App;
