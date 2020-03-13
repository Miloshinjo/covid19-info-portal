import { useState, useEffect } from 'react';
import axios from 'axios';

export default function(url: string): any {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(url);
      setData(data);
    };

    fetchData();
  }, [url]);

  return data;
}
