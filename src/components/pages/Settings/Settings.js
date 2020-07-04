import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../atoms/Button/Button';

const Container = styled.div`
  padding: 24px;
`;

const UserProfile = styled.div`
  display: flex;
`;

const UserIcon = styled(FontAwesomeIcon)`
  padding: 16px;
  margin-right: 16px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.75);
`;

const UserInfo = styled.div``;

// const ButtonContainer = styled.div`

// `;

const Settings = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
    }
  }, []);

  if (!user) {
    return (
      <Container>
        <Button path="/signUp">Sign up</Button>
      </Container>
    );
  }

  return (
    <Container>
      <UserProfile>
        <UserIcon icon="user" />
        <UserInfo>
          <div>nss</div>
        </UserInfo>
      </UserProfile>
    </Container>
  );
};

export default Settings;
