import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavBar from '../NavBar/NavBar';

const Container = styled.div`
  margin-bottom: 48px;
`;

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
