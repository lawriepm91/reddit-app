import { useState, useEffect } from 'react';
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
