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
  padding: 16px 24px;
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

export const DescriptionContainer = styled.div`
  display: flex;
`;

export const Source = styled.div`
  margin-bottom: 4px;
  color: rgba(255, 255, 255, 0.75);
`;

export const Time = styled.div`
  color: rgba(255, 255, 255, 0.75);
`;

export const Label = styled.div`
  padding: 8px;
  color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 8px;
  font-size: 12px;
  margin: auto 0 0 auto;
`;
