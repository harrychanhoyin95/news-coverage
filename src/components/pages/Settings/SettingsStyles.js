import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../atoms/Button/Button';

export const SignUpContainer = styled.div`
  padding: 0 24px;
  height: calc(100vh - 72px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.desktopOrTable} {
    padding: 0 128px;
    height: calc(100vh - 90px);
  }
`;

export const FormButton = styled(Button)`
  width: 50%;
  margin: 0 12px;
`;

export const Container = styled.div`
  padding: 24px;
`;

export const UserProfile = styled.div`
  display: flex;
`;

export const UserIcon = styled(FontAwesomeIcon)`
  padding: 16px;
  margin-right: 16px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.whites[2]};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Email = styled.div`
  color: ${(props) => props.theme.colors.whites[2]};
`;

export const SettingTabContainer = styled.div`
  margin: 16px 0;
`;

export const SettingTab = styled.div`
  display: flex;
  padding: 16px 0;
  cursor: pointer;
`;

export const ChervonRight = styled(FontAwesomeIcon)`
  margin-left: auto;
`;

export const LogoutButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;
