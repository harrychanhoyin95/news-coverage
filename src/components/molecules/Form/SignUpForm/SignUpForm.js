import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';

import AuthService from '../../../../services/auth';

import FormComponent from '../../../atoms/FormComponent/FormComponent';
import Button from '../../../atoms/Button/Button';

import SignupSchema from './SignUpFormSchema';

const ButtonContainer = styled.div`
  display: grid;
`;

const SignUpForm = ({ history }) => {
  const onFormSubmit = async (values) => {
    const { name, email, password } = values;
    const result = await AuthService.signUp({
      name,
      email,
      password,
    });

    if (result.message) {
      return toast.error(result.message);
    }

    return history.push('/');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={onFormSubmit}
      validationSchema={SignupSchema}
    >
      {({ handleSubmit, isSubmitting, ...props }) => (
        <Form>
          <Field component={FormComponent} name="name" {...props} />
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

SignUpForm.propTypes = {
  history: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default withRouter(SignUpForm);
