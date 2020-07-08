import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 8px;
  border-bottom: 1px solid
    ${(props) => (props.active ? props.theme.colors.yellow : 'none')};
  color: ${(props) => (props.active ? '#fff' : props.theme.colors.whites[2])};
  cursor: pointer;
`;

const Tab = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tab;
