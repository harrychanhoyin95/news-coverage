import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ResponsiveComponent from '../../atoms/ResponsiveComponent/ResponsiveComponent';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';

const ChildrenContainer = styled.div`
  margin-bottom: 48px;

  @media ${(props) => props.theme.breakpoints.desktopOrTablet} {
    margin-bottom: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveComponent.Mobile>
        <NavBar />
      </ResponsiveComponent.Mobile>

      <ResponsiveComponent.DesktopOrTablet>
        <Header />
      </ResponsiveComponent.DesktopOrTablet>

      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
