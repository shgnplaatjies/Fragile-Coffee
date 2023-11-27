import React from 'react';
import './Header.css';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import chevron from '../../assets/chevron-light.png';
import hamburger from '../../assets/hamburger-light.png';
import logo from '../../assets/logo.png';
import { ROUTES } from '../../../services/constants/GlobalRoutes';

/**
 * Header component.
 *
 * @param {Object} props Properties
 * @param {string|number} props.backRoute The back route
 * @param {string|number} props.forwardRoute The forward route
 * @param {string|number} props.imageRoute The image's route
 * @returns {React.Component} The Header component.
 */
function Header( { backRoute, imageRoute, forwardRoute } ) {
  const navigateTo = useNavigate();
  return (
    <div className='header-component container'>
      <img src={chevron} alt='back button' className='back-button' onClick={() => navigateTo(backRoute)}/>
      <img src={logo} alt='logo image' className='logo' onClick={() => navigateTo(imageRoute)} />
      <img src={hamburger} alt='forward button' className='forward-button' onClick={() => navigateTo(forwardRoute)}/>
    </div>
  );
}

Header.propTypes = {
  backRoute: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  forwardRoute: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  imageRoute: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Header.defaultProps = {
  backRoute: -1,
  imageRoute: ROUTES.LANDING,
  forwardRoute: ROUTES.SETTINGS,
};

export default Header;