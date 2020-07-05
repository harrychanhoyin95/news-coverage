/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Button from '../../atoms/Button/Button';
import Heading from '../../atoms/Heading/Heading';

import * as Styles from './SettingsStyles';

const Settings = ({ history }) => {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem('user'))
  );

  const onLogout = () => {
    window.localStorage.removeItem('user', user);
  };

  if (!user) {
    return (
      <Styles.Container>
        <Styles.Button type="path" path="/signUp">
          Sign up
        </Styles.Button>
      </Styles.Container>
    );
  }

  return (
    <Styles.Container>
      <Heading>Settings</Heading>
      <Styles.UserProfile>
        <Styles.UserIcon icon="user" />
        <Styles.UserInfo>
          <div>{user.name}</div>
          <Styles.Email>{user.email}</Styles.Email>
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
