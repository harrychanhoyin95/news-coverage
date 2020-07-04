import React from 'react';
import styled from 'styled-components';

import SignUpForm from '../../molecules/Form/SignUpForm/SignUpForm';

import Heading from '../../atoms/Heading/Heading';

const Container = styled.div`
  padding: 24px;
`;

const SignUp = () => {
  return (
    <Container>
      <Heading>Sign Up</Heading>
      <SignUpForm />
    </Container>
  );
};

export default SignUp;
