import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';

const Container = styled.div`
  padding: 24px;
`;

const Heading = styled.div`
  margin-bottom: 24px;
  font-size: 28px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
`;

const Card = styled.div`
  padding: 24px;
  border: 1px solid white;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
`;

const LinkTo = styled(Link)`
  color: white;
  text-decoration: none;
`;

const NewsList = () => {
  const { response } = useFetch('http://localhost:3000/api/news/sources');
  if (!response) {
    return <div>Loading...</div>
  }
  const { sources } = response;

  return (
    <Container>
      <Heading>Source</Heading>
      <Grid>
        <Card>
          <LinkTo to="/news/all">All</LinkTo>
        </Card>
        {sources &&
          sources.split(',').map((source) => {
            return (
              <Card key={source}>
                <LinkTo to={`/news/${source}`}>{_.startCase(source)}</LinkTo>
              </Card>
            );
          })}
      </Grid>
    </Container>
  );
};

export default NewsList;
