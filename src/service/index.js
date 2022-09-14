import { useEffect, useState } from "react";

const showError = (err) => {
  console.log(err);
};
const API_URL = process.env.REACT_APP_REST_URL;
const useFetch = ({
  path,
  config = { method: "GET" },
  initialState = null,
  skip = false,
}) => {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState({}); 

  useEffect(() => {
    let mounted = true;
    if (!skip) {
      setIsLoading(true);

      fetch(`${API_URL}${path}`, config)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        })
        .catch(showError)
        .finally(() => {
          mounted && setIsLoading(false);
        });
    }

    return () => {
      mounted = false;
    };
  }, [path, reload, skip]);

  const reloadData = () => {
    setReload({});
  };

  return { data, setData, isLoading, reloadData };
};

export default useFetch;
