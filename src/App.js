import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    toggle: true
  }

  clickHandler = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome text="Welcome to React, Edit me now!"  toggle={this.state.toggle}/>
          <button onClick={this.clickHandler}>Toggle Text</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {this.state.toggle && 
            <p>This should show and hide</p>
          }
          
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    console.log(toggle)
    return (

      <p>{toggle && text}</p> //only shows text if toggle is true.
    )
  }
}

export default App;
