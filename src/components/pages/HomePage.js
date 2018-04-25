import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { logout } from '../../actions/auth';

const HomePage = ({ user, logout }) => (
  <div>
      <h1>Home Page</h1>
      {user ? <Button onClick={logout}>Logout</Button> : <Link to="/login">Login</Link>}
  </div>
);

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps, { logout })(HomePage);
