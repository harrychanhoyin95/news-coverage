import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetch(url).then((res) => res.json());
        setResponse(result);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  return { response, isLoading, error };
};

export default useFetch;
