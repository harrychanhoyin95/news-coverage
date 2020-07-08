import styled from 'styled-components';

import SearchForm from '../../molecules/Form/SearchForm/SearchForm';
import Heading from '../../atoms/Heading/Heading';

export const StyledHeading = styled(Heading)`
  margin-bottom: 0;
  padding: 24px;

  @media ${(props) => props.theme.breakpoints.desktopOrTable} {
    padding: 24px 96px;
  }
`;

export const StyledSearchForm = styled(SearchForm)`
  padding: 24px 24px 0 24px;

  @media ${(props) => props.theme.breakpoints.desktopOrTable} {
    padding: 0 96px 24px 96px;
  }
`;

export const DataContainer = styled.div`
  padding: 0 24px;

  @media ${(props) => props.theme.breakpoints.desktopOrTable} {
    padding: 0 96px;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 128px;
`;

export const InfoContainer = styled.a`
  display: block;
  border-top: 1px solid ${(props) => props.theme.colors.whites[1]};
  padding: 16px 0;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.whites[1]};
    transition: 0.3s all;

    & > div {
      color: ${(props) => props.theme.colors.whites[1]};
      transition: 0.3s all;
    }
  }
`;

export const Title = styled.div`
  margin-bottom: 8px;
`;

export const Source = styled.div`
  color: ${(props) => props.theme.colors.whites[2]};
  margin-bottom: 4px;
`;

export const Time = styled.div`
  color: ${(props) => props.theme.colors.whites[2]};
`;
