import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Container = styled.nav`
  display: flex;
  justify-content: flex-end;
  margin-right: 36px;
`;

const MenuItem = styled.div`
  cursor: pointer;
  padding: 36px;

  &:hover {
    color: ${(props) => props.theme.colors.whites[1]};
    transition: 0.3s color;
  }
`;

const Header = ({ history }) => {
  return (
    <Container>
      <MenuItem onClick={() => history.push('/')}>News Source</MenuItem>
      <MenuItem onClick={() => history.push('/search')}>Search</MenuItem>
      <MenuItem onClick={() => history.push('/currency')}>Rate</MenuItem>
      <MenuItem onClick={() => history.push('/settings')}>Settings</MenuItem>
    </Container>
  );
};

Header.propTypes = {
  history: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default withRouter(Header);
