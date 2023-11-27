import React from 'react';
import './TestPage.css';
import DescriptionInput from '../../components/DescriptionInput/DescriptionInput.jsx';

/**
 * Page component to display project board
 * @returns Project Board component
 */
function Board() {
  return (
    <div className=''>
      <DescriptionInput />
    </div>
  );
}

export default Board;