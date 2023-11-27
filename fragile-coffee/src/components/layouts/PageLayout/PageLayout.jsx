import React from 'react';
import './PageLayout.css';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header.jsx';
import { ROUTES } from '../../../services/constants/GlobalRoutes.js';

/**
 * A Page Layout component that incapsulates and renders pages within it
 *
 * @param {Object} props Properties
 * @param {React.JSX.Element} pageBody The react component to display within this layout's body section
 * @param {string|number} props.backRoute The back route
 * @param {string|number} props.forwardRoute The forward route
 * @param {string|number} props.imageRoute The image's route
 * @returns {React.JSX.Element} Page Layout Component
 */
function PageLayout({ pageBody, backRoute, forwardRoute, imageRoute }) {

  return (
    <div className='page-layout'>
      <header>
        <Header
          backRoute={backRoute}
          forwardRoute={forwardRoute}
          imageRoute={imageRoute}
        />
      </header>
      <main>
        {pageBody()}
      </main>
    </div>
  );
}

PageLayout.propTypes = {
  pageBody: PropTypes.element,
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
  pageBody: undefined,
  backRoute: -1,
  imageRoute: ROUTES.LANDING,
  forwardRoute: ROUTES.SETTINGS,
};

export default PageLayout;