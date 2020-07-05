import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import _ from 'lodash';

import * as Styles from './HistoryStyles';

const History = ({ history }) => {
  const userLocalStorageData = JSON.parse(window.localStorage.getItem('user'));

  if (!userLocalStorageData) {
    return history.push('/');
  }

  const historyLocalStorageData = JSON.parse(
    window.localStorage.getItem('history')
  );

  return (
    <>
      <Styles.StyledHeading>History</Styles.StyledHeading>
      {historyLocalStorageData ? (
        <div>
          {historyLocalStorageData.map((n) => {
            return (
              <LazyLoad key={`${n.title}${n.id}`} once>
                <Styles.NewsPiece>
                  <Styles.NewsLink
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Styles.NewsTitle>{n.title}</Styles.NewsTitle>
                    <Styles.NewsSource>
                      {_.startCase(n.newsSource)}
                    </Styles.NewsSource>
                  </Styles.NewsLink>
                </Styles.NewsPiece>
              </LazyLoad>
            );
          })}
        </div>
      ) : (
        <div>You haven&apos;t read any news yet</div>
      )}
    </>
  );
};

History.propTypes = {
  history: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.any])).isRequired,
};

export default withRouter(History);
