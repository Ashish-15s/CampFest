import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://campfest.onrender.com";
//https://campfest.onrender.com

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(url);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get(`${BASE_URL}${url}`);
        setData(res.data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}${url}`);
      setData(res.data);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };
  return { data, loading, error, reFetch };
};

export default useFetch;
