import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import * as types from '../../types';

class LoginPage extends Component {

    submit = data => this.props.login(data);

    render() {
        const { isLoading } = this.props;

        return (
            <div>
                <h1>Login Page</h1>
                <LoginForm
                    submit={this.submit}
                    isLoading={isLoading}
                />
            </div>
        );
    }
};

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
}

const mapStateToProps = ({ user, spinner }) => ({
  user,
  isLoading: spinner[types.USER_LOGIN],
});

export default connect(mapStateToProps, { login })(LoginPage);
