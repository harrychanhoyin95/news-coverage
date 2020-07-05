import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${(props) => (props.active ? '#fbc308' : 'none')};
  color: ${(props) => (props.active ? '#fff' : 'rgba(255, 255, 255, 0.75)')};
`;

const Tab = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tab;
