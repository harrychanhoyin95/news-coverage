/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border: 1px solid
    ${(props) => {
      switch (props.tone) {
        case 'primary':
          return '#fbc308';
        case 'danger':
          return '#c0392b';
        default:
          return '#fbc308';
      }
    }};
  border-radius: 4px;
  background-color: ${(props) => {
    switch (props.tone) {
      case 'primary':
        return '#fbc308';
      case 'danger':
        return '#c0392b';
      default:
        return '#fbc308';
    }
  }};
  width: ${(props) => (props.fullWidth ? '100%' : 'initial')};

  & > a,
  & > button {
    color: ${(props) => {
      switch (props.tone) {
        case 'primary':
          return '#000';
        case 'danger':
          return '#fff';
        default:
          return '#000';
      }
    }};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  user-select: none;
`;

const GeneralButton = styled.button`
  display: inline-block;
  border: none;
  text-decoration: none;
  background-color: transparent;
  font-size: 16px;
  user-select: none;
`;

const Button = ({
  children,
  path,
  type,
  primary,
  danger,
  onClick,
  fullWidth,
  isSubmitting,
  ...props
}) => {
  let tone;
  if (danger) {
    tone = 'danger';
  } else if (primary) {
    tone = 'primary';
  }

  if (type === 'submit') {
    return (
      <ButtonContainer
        tone={tone}
        onClick={onClick}
        fullWidth={fullWidth}
        {...props}
      >
        <GeneralButton type="submit">
          {isSubmitting ? <FontAwesomeIcon icon="spinner" spin /> : children}
        </GeneralButton>
      </ButtonContainer>
    );
  }

  if (type === 'path') {
    return (
      <ButtonContainer tone={tone} fullWidth={fullWidth} {...props}>
        <StyledLink to={path}>{children}</StyledLink>
      </ButtonContainer>
    );
  }

  return (
    <ButtonContainer
      tone={tone}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    >
      <GeneralButton>{children}</GeneralButton>
    </ButtonContainer>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string,
  type: PropTypes.string,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  isSubmitting: PropTypes.bool,
};

Button.defaultProps = {
  path: null,
  type: 'button',
  primary: true,
  danger: false,
  fullWidth: false,
  onClick: () => {},
  isSubmitting: false,
};

export default Button;
