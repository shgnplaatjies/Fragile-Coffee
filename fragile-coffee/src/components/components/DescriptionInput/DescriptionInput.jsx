import React from 'react';
import './DescriptionInput.css';
import PropTypes from 'prop-types';

/**
 * Description Input for filling in action item cards.
 *
 * @param {object} props Properties
 * @param {string} props.messageText The message text
 * @param {number} props.likeCount The like count
 * @param {bool} props.isEditable Whether the component is editable or not
 * @returns {React.Component} The Description Input component.
 */

function DescriptionInput( { messageText, likeCount, isEditable } ) {
  return (
    <input
      type='text'
      id='messageText'
      name='messageText'
      maxLength={256}
      size={256}
      placeholder='Please add your feedback here'
    />
  );
}

DescriptionInput.propTypes = {
  messageText: PropTypes.string,
  likeCount: PropTypes.number,
  isEditable: PropTypes.bool,
};

DescriptionInput.defaultProps = {
  messageText: undefined,
  likeCount: 0,
  isEditable: false,
};

export default DescriptionInput;