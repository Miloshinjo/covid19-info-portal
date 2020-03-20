import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

export type UseFetchDataTypes = [
  any,
  boolean,
  object | null,
  () => Promise<void>
];

export default function useFetchData(url: string): UseFetchDataTypes {
  const [fetchedData, setFetchedData] = useState<any>();
  const [error, setError] = useState<null | object>(null);
  const [fetching, setFetching] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    try {
      setFetching(true);
      setError(null);
      const { data } = await axios.get(url);
      setFetchedData(data);
    } catch (err) {
      setError(err);
    } finally {
      setFetching(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [fetchedData, fetching, error, fetchData];
}
