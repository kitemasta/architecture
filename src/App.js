import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';
import PopupErrorWrapper from './components/messages/PopupErrorWrapper';
import GuestRoute from './components/routes/GuestRoute';
import UserRoute from './components/routes/UserRoute';

class App extends Component {
  render() {

    return (
      <div className="ui container">
        <PopupErrorWrapper />
        <Route path="/" exact component={HomePage} />
        <GuestRoute path="/login" exact component={LoginPage} />
        <UserRoute path="/dashboard" exact component={DashboardPage} />
      </div>
    );
  }
}

export default App;
