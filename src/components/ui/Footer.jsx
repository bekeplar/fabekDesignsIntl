import React from 'react';

import * as ROUTE from 'constants/routes';

const Footer = ({ path }) => {
  const hiddenPaths = [
    ROUTE.SIGNIN,
    ROUTE.SIGNUP,
    ROUTE.FORGOT_PASSWORD,
    ROUTE.ACCOUNT,
    ROUTE.ACCOUNT_EDIT,
    ROUTE.CHECKOUT_STEP_1,
    ROUTE.CHECKOUT_STEP_2,
    ROUTE.CHECKOUT_STEP_3
  ];

  return hiddenPaths.includes(path) ? null : (
    <footer className="footer">
      <div className="footer-col-1">
        <h4>FabekDesignsIntl &nbsp;<span>{new Date().getFullYear()}</span></h4>
      </div>
      <div className="footer-col-2">
        <strong><span>Developed by <a href="https://github.com/bekeplar">bekeplar</a></span></strong>
      </div>
    </footer>
  );
};

export default Footer;
