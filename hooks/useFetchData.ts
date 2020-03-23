/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
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

  const fetchData = async (): Promise<void> => {
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [fetchedData, fetching, error, fetchData];
}
