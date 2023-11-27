import React from 'react';
import './BoardPage.css';
import { ROUTES } from '../../../services/constants/GlobalRoutes.js';
import PageLayout from '../../layouts/PageLayout/PageLayout';

/**
 * The page body to display project board in PageLayout
 * @returns Project Board component
 */
function Board() {
  return (
    <div className='page board'>
      <button type='button'>Project Board</button>
    </div>
  );
}

/**
 * A page layout to display the project board
 * @returns Project Board component within page layout
 */
function BoardPage() {
  return (
    <PageLayout
      forwardRoute={ROUTES.SETTINGS}
      pageBody={Board}
    />
  );
}

export default BoardPage;