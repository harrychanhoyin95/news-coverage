import styled from 'styled-components';

import SearchForm from '../../molecules/Form/SearchForm/SearchForm';
import Heading from '../../atoms/Heading/Heading';

export const StyledHeading = styled(Heading)`
  margin-bottom: 0;
  padding: 24px;
`;

export const StyledSearchForm = styled(SearchForm)`
  padding: 24px 24px 0 24px;
`;

export const DataContainer = styled.div`
  padding: 0 24px;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 128px;
`;

export const InfoContainer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  padding: 16px 0;
`;

export const Title = styled.div`
  margin-bottom: 8px;
`;

export const Source = styled.div`
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 4px;
`;

export const Time = styled.div`
  color: rgba(255, 255, 255, 0.75);
`;
