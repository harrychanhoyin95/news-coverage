import React from 'react';
import _ from 'lodash';

import useFetch from '../../../hooks/useFetch';
import Spinner from '../../atoms/Spinner/Spinner';
import Heading from '../../atoms/Heading/Heading';

import * as Style from './NewsListStyles';

const NewsList = () => {
  const { response, isLoading } = useFetch(
    'http://localhost:3000/api/news/sources'
  );

  if (isLoading) {
    return <Spinner />;
  }

  const { sources } = response;

  return (
    <Style.Container>
      <Heading>Source</Heading>
      <Style.Grid>
        <Style.Card>
          <Style.LinkTo to="/news/all">All</Style.LinkTo>
        </Style.Card>
        {sources &&
          sources.split(',').map((source) => {
            return (
              <Style.Card key={source}>
                <Style.LinkTo to={`/news/${source}`}>
                  {_.startCase(source)}
                </Style.LinkTo>
              </Style.Card>
            );
          })}
      </Style.Grid>
    </Style.Container>
  );
};

export default NewsList;
