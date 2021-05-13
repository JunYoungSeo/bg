import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
//import 'socket.io';
import LandingPage from './LandingPage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      greeting: null
    }
  }

  componentDidMount(){
    fetch('http://seazest.win:3002/api/')
      .then(res => res.json())
      .then(data => this.setState({greeting: data.greeting}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            {this.state.greeting? <h1>{this.state.greeting}</h1>:<h1>loding...</h1>}
          </div>
        </header>
	<LandingPage/>
      </div>
    );
  }
}

export default App;
