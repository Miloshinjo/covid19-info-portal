import { useState, useEffect } from 'react';
import axios from 'axios';

export default function(url: string): any {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<null | object>(null);
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setFetching(true);
      try {
        setError(null);
        const { data } = await axios.get(url);
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setFetching(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, fetching, error];
}
