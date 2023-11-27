import React from 'react';
import './HistoryPage.css';
import Header from '../../components/Header/Header.jsx';
import PageLayout from '../../layouts/PageLayout/PageLayout';

/**
 * History component to show list of previous boards
 * @returns {JSX.Element} History component
 */
function History() {
  return (
    <div className='history-page v-container-h'>
      <button
        type='button'
      >History Page</button>
    </div>
  );
}

function HistoryPage() {
  return (
    <PageLayout
      pageBody={History}
    />
  );
}

export default HistoryPage;