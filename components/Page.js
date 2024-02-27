import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Header from './Header';
import GlobalStyling from '../styles/GlobalStyles';
import Nav from './Nav';

export default function Page({ children }) {
  return (
    <>
      <GlobalStyling />
      <Header />
      {/* <Nav /> */}
      <main>{children}</main>
    </>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
