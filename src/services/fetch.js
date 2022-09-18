import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(false);
    fetch(`http://${process.env.REACT_APP_BASE_PATH}/${endpoint}`)
      .then((res) => {
        !res.ok && setError(true);
        return res.json();
      })
      .then((data) => (error ? setData(data) : setData(data.data)))
      .catch((err) => err)
      .finally(() => setLoading(false));
  }, [endpoint, error]);

  return { data, loading, error };
};

export default useFetch;
