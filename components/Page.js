import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import GlobalStyling from '../styles/GlobalStyles';

export default function Page({ children }) {
  return (
    <>
      <GlobalStyling />
      <Header />
      <main>{children}</main>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
