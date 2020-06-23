import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  position: fixed;
  bottom: 0;
  background: black;
  width: 100%;
`;

const NavBarItemsContainer = styled.div`
  display: flex;
  height: 48px;
  background-color: #202020;
`;

const MenuItem = ({ icon }) => {
  const NavBarItems = styled.div`
    cursor: pointer;
    color: #fff;
    font-size: 24px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <NavBarItems>
      <FontAwesomeIcon icon={icon} />
    </NavBarItems>
  );
};

const NavBar = () => {
  return (
    <Container>
      <NavBarItemsContainer>
        <MenuItem icon="bars" />
        <MenuItem icon="newspaper" />
        <MenuItem icon="coins" />
        <MenuItem icon="cog" />
      </NavBarItemsContainer>
    </Container>
  );
};

export default NavBar;
