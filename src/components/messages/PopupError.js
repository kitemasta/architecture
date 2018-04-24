import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

class PopupError extends Component {
  componentDidMount() {
    const { deleteError, id } = this.props;

    setTimeout(() => deleteError(id), 5000);
  }

  render() {
    const { value } = this.props;
    return (
      <Message warning>
        <Message.Header>Something went wrong!</Message.Header>
        <p>{value}</p>
      </Message>
    );
  }
};

PopupError.propTypes = {
    value: PropTypes.string.isRequired,
}

export default PopupError;
