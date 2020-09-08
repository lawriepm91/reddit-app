import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { updatePics } from 'slices/pics';


import Api from 'api';


function useApiOnMount(method, path) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  useEffect(() => {
    const fetch = async () => {
      try {
        const api = new Api();
        const data = await api[method](path);
        setResponse(data);
      } catch (e) {
        setError(e);
      }
      setIsLoading(false);
    }
    fetch();
  }, [method, path]);

  return [isLoading, response, error];
}

export default function useTopPics() {
  const dispatch = useDispatch();
  const method = 'fetchAll';
  const path = 'r/pics/top.json?t=all';
  const [isLoading, response, error] = useApiOnMount(method, path);
  dispatch(updatePics(response));
  return [isLoading, error];
}
