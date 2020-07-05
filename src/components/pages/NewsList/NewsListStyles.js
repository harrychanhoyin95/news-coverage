import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 24px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;

export const Card = styled.div`
  padding: 24px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkTo = styled(Link)`
  color: white;
  text-decoration: none;
`;
