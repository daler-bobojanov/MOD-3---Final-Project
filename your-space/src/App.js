import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import fire from './config/Fire';
import './App.css';

import LandingPage from './components/LandingPage';
import Home from './components/Home';
import DocumentList from './components/DocumentList';
import Navigation from './components/Navigation';
import DocumentEdit from './components/DocumentEdit';
import MyToDo from './components/MyToDo';


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
        // console.log(user);

      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {/* {this.state.user ? (<Home userDisplayName={this.state.displayName} />) : (<LandingPage />)} */}

            {this.state.user ? (
              <Route path='/navigation' exact={true} component={Navigation} />) : (<LandingPage />)}

            <Route path='/home' exact={true}
              render={(props) => <Home  {...props} userDisplayName={this.state.displayName} />}
            />
            <Route path='/documents' exact={true} component={DocumentList} />
            <Route path='/documents/:id' exact={true} component={DocumentEdit} />
            <Route path='/my-to-do' exact={true} component={MyToDo} />
            <Route path='/' exact={true} component={LandingPage} />

          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

