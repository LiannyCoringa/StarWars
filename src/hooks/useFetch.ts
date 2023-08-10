import { useEffect, useState } from 'react';

function useFetch(url: string) {
  const [dataValue, setDataValue] = useState([]);
  const [loading, setLoading] = useState(true);

  const reqFunction = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setDataValue(data.results);
    setLoading(false);
  };

  useEffect(() => {
    reqFunction();
  }, []);

  return {
    dataValue,
    loading,
    reqFunction,
  };
}

export default useFetch;
