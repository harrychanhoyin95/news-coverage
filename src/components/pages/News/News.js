import React, { useState, useEffect } from 'react';

const News = ({ match }) => {
  const [hasError, setErrors] = useState(false);
  const [news, setNews] = useState([]);

  const {
    params: { source },
  } = match;

  console.log('news', news);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`http://localhost:3000/api/news?source=${source}`)
        .then((res) => res.json())
        .then((json) => json.data)
        .then((data) => setNews(data))
        .catch((err) => setErrors(err));
    };

    fetchData();
  }, []);

  return (
    <>
      {source === 'all'
        ? news[source].map((n, index) => {
            return (
              <div key={n.title}>
                <div href={n.url} target="_blank">
                  {`${index + 1}. ${n.title}`}
                </div>
              </div>
            );
          })
        : news.map((n, index) => {
            return (
              <div key={n.title}>
                <div href={n.url} target="_blank">
                  {`${index + 1}. ${n.title}`}
                </div>
              </div>
            );
          })}
    </>
  );
};

export default News;
