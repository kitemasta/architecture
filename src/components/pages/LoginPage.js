import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import * as types from '../../types';

class LoginPage extends Component {

    submit = data => this.props.login(data);

    componentWillReceiveProps(nextProps) {
      if (this.props.user !== nextProps.user && !nextProps.user.error) {
        localStorage.setItem('Authenticated', true);
        this.props.history.push('/');
      }
    }

    render() {
        const { errors: { loginError }, isLoading } = this.props;

        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm
                    submit={this.submit}
                    loginError={loginError}
                    isLoading={isLoading}
                />
            </div>
        );
    }
};

LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
    login: PropTypes.func.isRequired,
}

const mapStateToProps = ({ user, errors, spinner }) => ({
  user,
  errors,
  isLoading: spinner[types.USER_LOGIN],
});

export default connect(mapStateToProps, { login })(LoginPage);
