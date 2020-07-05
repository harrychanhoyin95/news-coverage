/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import moment from 'moment';

import Spinner from '../../atoms/Spinner/Spinner';

import * as Styles from './SearchStyles';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);

  const onFormSubmit = async ({ keyword, sortBy }) => {
    setLoading(true);
    await fetch(
      `http://localhost:3000/api/news/search?keyword=${keyword}&sortBy=${sortBy}`
    )
      .then((res) => res.json())
      .then((json) => setSearchData(json.data));
    setLoading(false);
  };

  return (
    <>
      <Styles.StyledHeading>Search</Styles.StyledHeading>
      <Styles.StyledSearchForm
        onFormSubmit={onFormSubmit}
        setSearchData={setSearchData}
      />
      <Styles.DataContainer>
        {loading ? (
          <Styles.LoadingContainer>
            <Spinner />
          </Styles.LoadingContainer>
        ) : (
          searchData.map((n, index) => {
            return (
              <LazyLoad key={`${n.title}${index}`} once>
                <Styles.InfoContainer>
                  <Styles.Title>{n.title}</Styles.Title>
                  <Styles.Source>{n.source.name}</Styles.Source>
                  <Styles.Time>
                    {moment(n.publishedAt).format('DD/MM/YYYY hh:mm:ss')}
                  </Styles.Time>
                </Styles.InfoContainer>
              </LazyLoad>
            );
          })
        )}
      </Styles.DataContainer>
    </>
  );
};

export default Search;
