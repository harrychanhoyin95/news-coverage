import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

import LogoSrc from '../../../../assets/logo_transparent.png';

const Container = styled.header`
  display: flex;
  padding: 16px;
  align-items: center;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const HeaderItemsContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const HeaderItems = styled.div`
  margin-left: 16px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <Container>
      <Logo src={LogoSrc} />
      <HeaderItemsContainer>
        <HeaderItems>News</HeaderItems>
        <HeaderItems>Login</HeaderItems>
      </HeaderItemsContainer>
      <Button />
    </Container>
  );
};

export default Header;
