import axios from "axios";
import { useEffect } from "react";
import REACT_API_URL from "../../.env";

useFetch = (endpoint, headers = {}) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${REACT_API_URL}/${endpoint}`, headers)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, error, loading };
};
