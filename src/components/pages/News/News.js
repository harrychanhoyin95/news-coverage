/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import _ from 'lodash';
import moment from 'moment';

// import Image from '../../atoms/Image/Image';

import * as Style from './NewsStyles';

const News = ({ routerProps, response }) => {
  const [historyData, setHistoryData] = useState([]);

  const {
    match: {
      params: { source },
    },
  } = routerProps;

  const { data } = response;

  useEffect(() => {
    setHistoryData(JSON.parse(window.localStorage.getItem('history')));
  }, []);

  const setLocalStorage = ({ id, url, title, newsSource }) => {
    if (historyData) {
      const newHistory = [...historyData, { id, url, title, newsSource }];
      setHistoryData(newHistory);
      window.localStorage.setItem('history', JSON.stringify(newHistory));
    } else {
      setHistoryData([id]);
      window.localStorage.setItem(
        'history',
        JSON.stringify([{ id, url, title, newsSource }])
      );
    }
  };

  const renderLabel = ({ id }) => {
    if (historyData && historyData.some((d) => d.id === id)) {
      return <Style.Label>READ</Style.Label>;
    }
    return null;
  };

  renderLabel.propTypes = {
    id: PropTypes.string.isRequired,
  };

  return (
    <>
      <Style.HeadingContainer>
        <Style.StyledHeading>News</Style.StyledHeading>
        <Style.HeadingDescription>
          {`Source: ${_.startCase(source)}`}
        </Style.HeadingDescription>
      </Style.HeadingContainer>
      {data.map((n, index) => {
        return (
          <LazyLoad key={`${n.title}${index}`} once>
            <Style.LinkContainer
              href={n.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                setLocalStorage({
                  id: n.id,
                  url: n.url,
                  title: n.title,
                  newsSource: n.source,
                })
              }
            >
              {/* <Image src={n.urlToImage} alt={n.title} /> */}
              <Style.HotLine>{n.title}</Style.HotLine>
              <Style.DescriptionContainer>
                <div>
                  <Style.Source>{_.startCase(n.source)}</Style.Source>
                  <Style.Time>
                    {moment(n.publishedAt).format('YYYY/MM/DD hh:mm:ss')}
                  </Style.Time>
                </div>
                {renderLabel({ id: n.id })}
              </Style.DescriptionContainer>
            </Style.LinkContainer>
          </LazyLoad>
        );
      })}
    </>
  );
};

News.propTypes = {
  routerProps: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object]))
    .isRequired,
  response: PropTypes.objectOf(PropTypes.array),
};

News.defaultProps = {
  response: {},
};

export default News;
