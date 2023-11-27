import React from 'react';
import PropTypes from 'prop-types';
import './MessageCard.css';

/**
 * MessageCard page for my portfolio site.
 *
 * @param {object} props Properties
 * @param {string} props.primaryMessage Primary Card Message
 * @param {string} props.secondaryMessage Secondary Card Message
 * @returns {React.Component} The MessageCard page component.
 */
function MessageCardPage({ primaryMessage = 'Whoops', secondaryMessage = 'Something went wrong...' }) {
  return (
    <>
      <h1>{primaryMessage}</h1>
      <h2>{secondaryMessage}</h2>
    </>
  );
}

MessageCardPage.propTypes = {
  primaryMessage: PropTypes.string,
  secondaryMessage: PropTypes.string,
};

export default MessageCardPage;