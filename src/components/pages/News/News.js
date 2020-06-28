/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import _ from 'lodash';
import moment from 'moment';

import Spinner from '../../atoms/Spinner/Spinner';
import useFetch from '../../../hooks/useFetch';
// import Image from '../../atoms/Image/Image';

import * as Style from './NewsStyles';

const News = ({ match }) => {
  const {
    params: { source },
  } = match;

  const { response, isLoading } = useFetch(
    `http://localhost:3000/api/news?source=${source}`
  );

  if (isLoading) return <Spinner />;

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
  match: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object])
  ).isRequired,
};

export default News;
