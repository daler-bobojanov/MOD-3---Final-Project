import React from 'react';
import fire from './config/Fire';
import './App.css';

import LandingPage from './components/LandingPage';
import Home from './components/Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      displayName: ''
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user: { user }, displayName: user.displayName });
        localStorage.setItem('user', user.uid);
        console.log(user);

      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div className="">
        {this.state.user ? (<Home userDisplayName={this.state.displayName} />) : (<LandingPage />)}
      </div>
    );
  }
}

export default App;

