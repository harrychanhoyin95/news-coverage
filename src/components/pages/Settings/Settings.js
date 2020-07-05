/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { useAuth } from '../../../contexts/AuthContext';

import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';

import * as Styles from './SettingsStyles';

const Settings = ({ history }) => {
  const { authUser, setAuthUser } = useAuth();

  const onLogout = () => {
    setAuthUser();
    localStorage.removeItem('user');
    history.push('/');
  };

  if (!authUser) {
    return (
      <Styles.SignUpContainer>
        <Styles.FormButton type="path" path="/signUp">
          Sign up
        </Styles.FormButton>
        <Styles.FormButton type="path" path="/login">
          Login
        </Styles.FormButton>
      </Styles.SignUpContainer>
    );
  }

  return (
    <Styles.Container>
      <Heading>Settings</Heading>
      <Styles.UserProfile>
        <Styles.UserIcon icon="user" />
        <Styles.UserInfo>
          <div>{authUser.name}</div>
          <Styles.Email>{authUser.email}</Styles.Email>
        </Styles.UserInfo>
      </Styles.UserProfile>

      <Styles.SettingTabContainer>
        <Styles.SettingTab onClick={() => history.push('/settings/history')}>
          <div>News you&apos;ve read</div>
          <Styles.ChervonRight icon="chevron-right" />
        </Styles.SettingTab>
      </Styles.SettingTabContainer>

      <Styles.LogoutButtonContainer>
        <Button danger fullWidth onClick={onLogout}>
          Logout
        </Button>
      </Styles.LogoutButtonContainer>
    </Styles.Container>
  );
};

Settings.propTypes = {
  history: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default withRouter(Settings);
