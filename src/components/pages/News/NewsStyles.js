import styled from 'styled-components';

import Heading from '../../atoms/Heading/Heading';

export const HeadingContainer = styled.div`
  padding-left: 24px;
  padding-top: 24px;
  margin-bottom: 24px;

  @media ${(props) => props.theme.breakpoints.desktopOrTablet} {
    padding-left: 96px;
  }
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 4px;
`;

export const HeadingDescription = styled.div`
  color: ${(props) => props.theme.colors.whites[2]};
`;

export const LinkContainer = styled.a`
  display: block;
  padding: 16px 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors.whites[1]};
  cursor: pointer;
  color: #fff;
  text-decoration: none;

  @media ${(props) => props.theme.breakpoints.desktopOrTablet} {
    padding-left: 96px;
  }

  &:first-child {
    border-top: 1px solid ${(props) => props.theme.colors.whites[1]};
  }

  &:hover {
    color: ${(props) => props.theme.colors.whites[1]};
    transition: 0.3s all;

    & > div > div > div {
      color: ${(props) => props.theme.colors.whites[1]};
      transition: 0.3s all;
    }
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
  color: ${(props) => props.theme.colors.whites[2]};
`;

export const Time = styled.div`
  color: ${(props) => props.theme.colors.whites[2]};
`;

export const Label = styled.div`
  padding: 8px;
  color: ${(props) => props.theme.colors.whites[2]};
  border: 1px solid ${(props) => props.theme.colors.whites[2]};
  border-radius: 8px;
  font-size: 12px;
  margin: auto 0 0 auto;
`;
