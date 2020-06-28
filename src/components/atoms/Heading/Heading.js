import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.div`
  margin-bottom: 24px;
  font-size: 28px;
`;

const Heading = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Heading;
