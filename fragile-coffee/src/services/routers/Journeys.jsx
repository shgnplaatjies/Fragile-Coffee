import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constants/GlobalRoutes.js';
import MainRoutes from '../routes/MainRoutes.jsx';

/**
 * Routes component to hold the base routes for each journey
 *
 * @returns {JSX.Element} The base route for each journey
 */
function Journeys() {
  return (

    <Routes>
      <Route
        path={`${ROUTES.BLANK}*`}
        element={<MainRoutes />} >
      </Route>
    </Routes>

  );
}

export default Journeys;
