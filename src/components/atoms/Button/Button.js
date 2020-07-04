/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PathButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border: 1px solid ${(props) => (props.primary ? '#fbc308' : 'transparent')};
  border-radius: 4px;
  background-color: ${(props) => (props.primary ? '#fbc308' : 'transparent')};

  & > a {
    color: ${(props) => (props.primary ? '#000' : '#fff')};
  }
`;

const SubmitButton = styled.button`
  display: inline-block;
  border: none;
  text-decoration: none;
  background-color: transparent;
  font-size: 16px;
  user-select: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  user-select: none;
`;

const Button = ({ children, path, type, primary, onClick, isSubmitting }) => {
  if (type === 'submit') {
    return (
      <PathButtonContainer primary={primary} onClick={onClick}>
        <SubmitButton type="submit">
          {isSubmitting ? <FontAwesomeIcon icon="spinner" spin /> : children}
        </SubmitButton>
      </PathButtonContainer>
    );
  }

  return (
    <PathButtonContainer primary={primary}>
      <StyledLink to={path}>{children}</StyledLink>
    </PathButtonContainer>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
  type: PropTypes.string,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
  isSubmitting: PropTypes.bool,
};

Button.defaultProps = {
  path: '/',
  type: 'button',
  primary: true,
  onClick: () => {},
  isSubmitting: false,
};

export default Button;
