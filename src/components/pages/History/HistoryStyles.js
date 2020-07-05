import styled from 'styled-components';

import Heading from '../../atoms/Heading/Heading';

export const StyledHeading = styled(Heading)`
  padding: 24px;
  margin: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const NewsPiece = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export const NewsLink = styled.a`
  cursor: pointer;
  color: #fff;
  text-decoration: none;
`;

export const NewsTitle = styled.div`
  margin-bottom: 4px;
`;

export const NewsSource = styled.div`
  color: rgba(255, 255, 255, 0.75);
`;
