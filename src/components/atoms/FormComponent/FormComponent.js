import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import InputAdornment from '@material-ui/core/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as Styles from './FormComponentStyles';

const FormComponent = ({ field, form, type, onSearchIconClick }) => {
  const { name } = field;
  const { handleChange, errors, touched, setFieldTouched } = form;

  switch (type) {
    case 'search': {
      return (
        <Styles.Container>
          <Styles.MuiTextField
            fullWidth
            variant="outlined"
            label={_.startCase(name)}
            name={name}
            placeholder={_.startCase(name)}
            onChange={handleChange}
            onTouchStart={() => setFieldTouched(name)}
            InputProps={{
              endAdornment: (
                <InputAdornment onClick={onSearchIconClick}>
                  <FontAwesomeIcon icon="search" />
                </InputAdornment>
              ),
            }}
          />

          <Styles.ErrorContainer>
            {errors && errors[name] && touched[name] ? (
              <Styles.Error>{errors[name]}</Styles.Error>
            ) : null}
          </Styles.ErrorContainer>
        </Styles.Container>
      );
    }
    default: {
      return (
        <Styles.Container>
          <Styles.MuiTextField
            fullWidth
            type={type || 'text'}
            variant="outlined"
            label={_.startCase(name)}
            name={name}
            placeholder={_.startCase(name)}
            onChange={handleChange}
            onTouchStart={() => setFieldTouched(name)}
          />

          <Styles.ErrorContainer>
            {errors && errors[name] && touched[name] ? (
              <Styles.Error>{errors[name]}</Styles.Error>
            ) : null}
          </Styles.ErrorContainer>
        </Styles.Container>
      );
    }
  }
};

FormComponent.propTypes = {
  form: PropTypes.objectOf(PropTypes.any).isRequired,
  field: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default FormComponent;
