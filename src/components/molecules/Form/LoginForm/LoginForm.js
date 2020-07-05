import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

import { useAuth } from '../../../../contexts/AuthContext';
import AuthService from '../../../../services/auth';

import FormComponent from '../../../atoms/FormComponent/FormComponent';
import Button from '../../../atoms/Button/Button';

import LoginFormSchema from './LoginFormSchema';

const ButtonContainer = styled.div`
  display: grid;
`;

const LoginForm = ({ history }) => {
  const { setAuthUser } = useAuth();

  const onFormSubmit = async (values) => {
    const { name, email, password } = values;
    const result = await AuthService.login({
      name,
      email,
      password,
    });

    if (result.message) {
      return toast.error(result.message);
    }

    setAuthUser(result.user);
    history.push('/');
    return true;
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={onFormSubmit}
      validationSchema={LoginFormSchema}
    >
      {({ handleSubmit, isSubmitting, ...props }) => (
        <Form>
          <Field component={FormComponent} name="email" {...props} />
          <Field
            component={FormComponent}
            name="password"
            type="password"
            {...props}
          />
          <ButtonContainer>
            <Button
              type="submit"
              primary
              onClick={handleSubmit}
              isSubmitting={isSubmitting}
            >
              Submit
            </Button>
          </ButtonContainer>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  history: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default withRouter(LoginForm);
