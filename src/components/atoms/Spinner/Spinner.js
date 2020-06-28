import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Container = styled.div`
  height: calc(100vh - 48px);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => {
  return (
    <Container>
      <FontAwesomeIcon icon="spinner" spin size="3x" />
    </Container>
  );
};

export default Spinner;
