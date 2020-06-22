import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Card } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1024px;
  padding: 32px 0 64px 0;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 24px;

  .ant-card {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    text-align: center;
  }
`;

const HotLines = styled.div`
  margin-bottom: 4px;
  text-align: left;
`;

const Anchor = styled.a`
  cursor: pointer;
`;

const Home = () => {
  const [hasError, setErrors] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch('http://localhost:3000/api/news/')
        .then((res) => res.json())
        .then((json) => json.data)
        .then((data) => setNews(data))
        .catch((err) => setErrors(err));
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Grid>
        {Object.keys(news).map((s) => {
          return (
            <Card key={s} title={_.startCase(s)}>
              {news[s].map((n, index) => {
                return (
                  <HotLines key={n.title}>
                    <Anchor href={n.url} target="_blank">
                      {`${index + 1}. ${n.title}`}
                    </Anchor>
                  </HotLines>
                );
              })}
            </Card>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Home;
