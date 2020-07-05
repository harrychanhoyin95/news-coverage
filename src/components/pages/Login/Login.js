import React from 'react';
import styled from 'styled-components';

import LoginForm from '../../molecules/Form/LoginForm/LoginForm';

import Heading from '../../atoms/Heading/Heading';

const Container = styled.div`
  padding: 24px;
`;

const Login = () => {
  return (
    <Container>
      <Heading>Login</Heading>
      <LoginForm />
    </Container>
  );
};

export default Login;
