import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

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

const MenuItem = ({ icon, onClick }) => {
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
    <NavBarItems onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </NavBarItems>
  );
};

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

MenuItem.defaultProps = {
  onClick: () => {},
};

const NavBar = ({ history }) => {
  return (
    <Container>
      <NavBarItemsContainer>
        <MenuItem icon="bars" />
        <MenuItem icon="newspaper" onClick={() => history.push('/')} />
        <MenuItem icon="coins" onClick={() => history.push('/currency')} />
        <MenuItem icon="cog" />
      </NavBarItemsContainer>
    </Container>
  );
};

NavBar.propTypes = {
  history: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default withRouter(NavBar);
