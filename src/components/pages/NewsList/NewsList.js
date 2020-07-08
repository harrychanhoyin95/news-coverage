import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import Heading from '../../atoms/Heading/Heading';

import * as Style from './NewsListStyles';

const NewsList = ({ response, history }) => {
  const { sources } = response;

  return (
    <Style.Container>
      <Heading>Source</Heading>
      <Style.Grid>
        <Style.Card onClick={() => history.push('/news/all')}>
          <Style.LinkTo to="/news/all">All</Style.LinkTo>
        </Style.Card>
        {sources &&
          sources.split(',').map((source) => {
            return (
              <Style.Card
                key={source}
                onClick={() => history.push(`/news/${source}`)}
              >
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

NewsList.propTypes = {
  response: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object])
  ).isRequired,
  history: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default withRouter(NewsList);
