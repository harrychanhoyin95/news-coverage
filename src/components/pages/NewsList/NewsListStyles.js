import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 24px;

  @media ${(props) => props.theme.breakpoints.desktopOrTablet} {
    padding: 24px 96px 96px 96px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;

  @media ${(props) => props.theme.breakpoints.desktopOrTablet} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export const Card = styled.div`
  padding: 24px;
  border: 1px solid #fff;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${(props) => props.theme.colors.whites[1]};
    transition: 0.3s all;

    a {
      color: ${(props) => props.theme.colors.whites[1]};
      transition: 0.3s all;
    }
  }
`;

export const LinkTo = styled(Link)`
  color: white;
  text-decoration: none;
`;
