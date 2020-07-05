import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

import FormComponent from '../../../atoms/FormComponent/FormComponent';
import Tab from '../../../atoms/Tab/Tab';

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 16px;
  text-align: center;
`;

const SearchForm = ({ onFormSubmit, setSearchData, ...props }) => {
  const [sortBy, setSortBy] = useState('publishedAt');

  const onSubmit = async (values) => {
    const { keyword } = values;
    if (!keyword) return;

    await onFormSubmit({ keyword, sortBy });
  };

  return (
    <Formik initialValues={{ keyword: '' }} onSubmit={onSubmit} {...props}>
      {({ handleSubmit, isSubmitting, ...formProps }) => (
        <Form {...props}>
          <ButtonContainer>
            <Tab
              onClick={() => {
                setSortBy('publishedAt');
                setSearchData([]);
              }}
              active={sortBy === 'publishedAt'}
            >
              Newest
            </Tab>
            <Tab
              onClick={() => {
                setSortBy('relevancy');
                setSearchData([]);
              }}
              active={sortBy === 'relevancy'}
            >
              Relevancy
            </Tab>
          </ButtonContainer>
          <Field
            component={FormComponent}
            name="keyword"
            {...formProps}
            type="search"
            onSearchIconClick={handleSubmit}
          />
        </Form>
      )}
    </Formik>
  );
};

SearchForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  setSearchData: PropTypes.func.isRequired,
};

export default SearchForm;
