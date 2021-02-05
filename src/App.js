import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      hamburgerClass: ''
    }
  }

  handleClassChange = () => {
    this.setState({
      hamburgerClass: this.state.hamburgerClass === '' ? 'show' : ''
    })
  }

  render() {
  return (
    <div className="App">
      <div className='keyframe box'>Keyframe</div>
      <div className='media box'>
        <button onClick={this.handleClassChange}>Hamburger</button>
        <ul className={`list ${this.state.hamburgerClass}`}>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
        </ul>
      </div>
    </div>
  );
}
}

export default App;
