import React, { Component } from 'react';
import { connect } from 'react-redux';
import PopupError from './PopupError';
import { deleteError } from '../../actions/errors';

class PopupErrorWrapper extends Component {
  render() {
    const { errors, deleteError } = this.props;
    const errorsList = errors.map(item => <PopupError
      key={item.id}
      id={item.id}
      value={item.value}
      deleteError={deleteError}
    />);

    return (
      <div>{errorsList}</div>
    )
  }
}

const mapStateToProps = ({ errors }) => ({
  errors,
});

export default connect(mapStateToProps, { deleteError })(PopupErrorWrapper);
