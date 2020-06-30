import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import useFetch from '../../hooks/useFetch';

const Container = styled.div`
  height: calc(100vh - 48px);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = ({ url, urlParams, component: Component, ...routerProps }) => {
  let dataRoute;
  if (urlParams) {
    const params = _.get(routerProps, `match.params.${urlParams}`);
    dataRoute = `${url}?${urlParams}=${params}`;
  } else {
    dataRoute = url;
  }
  const { response, isLoading } = useFetch(dataRoute);

  if (isLoading) {
    return (
      <Container>
        <FontAwesomeIcon icon="spinner" spin size="3x" />
      </Container>
    );
  }

  return <Component response={response} routerProps={routerProps} />;
};

Loading.propTypes = {
  url: PropTypes.string,
  urlParams: PropTypes.string,
  component: PropTypes.func.isRequired,
  routerProps: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object])
  ),
};

Loading.defaultProps = {
  url: null,
  urlParams: null,
  routerProps: {},
};

export default Loading;
