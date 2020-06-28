import styled from 'styled-components';

import Heading from '../../atoms/Heading/Heading';

export const HeadingContainer = styled.div`
  padding-left: 24px;
  padding-top: 24px;
  margin-bottom: 24px;
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 4px;
`;

export const HeadingDescription = styled.div`
  color: rgba(255, 255, 255, 0.75);
`;

export const LinkContainer = styled.a`
  display: block;
  padding: 16px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  &:first-child {
    border-top: 1px solid rgba(255, 255, 255, 0.5);
  }
`;

export const HotLine = styled.div`
  margin-bottom: 8px;
`;

export const Source = styled.div`
  margin-bottom: 4px;
  color: rgba(255, 255, 255, 0.75);
`;

export const Time = styled.div`
  color: rgba(255, 255, 255, 0.75);
`;
