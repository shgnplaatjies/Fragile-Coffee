import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/GlobalRoutes.js';
import MessageCardPage from '../../components/pages/MessageCard/MessageCard.jsx';
import LandingPage from '../../components/pages/LandingPage/LandingPage.jsx';
import BoardPage from '../../components/pages/BoardPage/BoardPage.jsx';
import TestPage from '../../components/pages/TestPage/TestPage.jsx';
import HistoryPage from '../../components/pages/HistoryPage/HistoryPage.jsx';

function MainRoutes() {
  return (
    <Routes>
      <Route
        path={`${ROUTES.ERROR}/*`}
        element={
          <MessageCardPage />
        }
      ></Route>
      <Route
        path={`${ROUTES.BOARD}/*`}
        element={
          <BoardPage />
        }
      ></Route>
      <Route
        path={`${ROUTES.LANDING}`}
        element={
          <LandingPage />
        }
      ></Route>
      <Route
        path={`${ROUTES.HISTORY}`}
        element={
          <HistoryPage />
        }
      ></Route>
      <Route
        path={`${ROUTES.TEST}`}
        element={
          <TestPage />
        }
      ></Route>
      <Route
        path={'*'}
        element={
          <MessageCardPage
            primaryMessage='Error 404'
            secondaryMessage='Page not found'
          />
        }
      ></Route>
    </Routes>
  );
}

export default MainRoutes;
