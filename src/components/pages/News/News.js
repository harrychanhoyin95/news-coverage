/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import _ from 'lodash';
import moment from 'moment';

// import Image from '../../atoms/Image/Image';

import * as Style from './NewsStyles';

const News = ({ routerProps, response }) => {
  const {
    match: {
      params: { source },
    },
  } = routerProps;

  const { data } = response;

  // eslint-disable-next-line no-console
  console.log('data', data);

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
            >
              {/* <Image src={n.urlToImage} alt={n.title} /> */}
              <Style.HotLine>{n.title}</Style.HotLine>
              <Style.Source>{_.startCase(n.source)}</Style.Source>
              <Style.Time>
                {moment(n.publishedAt).format('YYYY/MM/DD hh:mm:ss')}
              </Style.Time>
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
