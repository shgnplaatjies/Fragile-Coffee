import React from 'react';
import './LandingPage.css';
import logo from '../../../components/assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../services/constants/GlobalRoutes.js';

/**
 * Landing Page
 * @returns {JSX.Element} Landing Page Component
 */
function LandingPage() {
  const navigateTo = useNavigate();
  return (
    <div className='landing-page v-container-vh'>
      <header className='container-v'>
        <img src={logo} alt='coffee logo image'/>
        <h1>Fragile Coffefe</h1>
      </header>
      <h3>An internal project to make our projects a little less fragile.</h3>
      <button
        type='button'
        className='primary-button'
        onClick={() => navigateTo(ROUTES.BOARD)}
      >New Project</button>
      <h3>Want to review a previous board.</h3>
      <button
        type='button'
        className='primary-button'
        onClick={() => navigateTo(ROUTES.HISTORY)}
      >View History</button>
    </div>
  );
}

export default LandingPage;