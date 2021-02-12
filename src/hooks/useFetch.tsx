import { useCallback, useState } from "react";

function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url: string, options: RequestInit) => {
    let response;
    let json;

    try {
      setError(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      if (!response.ok) throw new Error(json.message);
    } catch (e) {
      json = null;
      setError(e.message);
    } finally {
      setData(json);
      setLoading(false);
    }

    return { response, json };
  }, []);

  return { data, error, loading, request };
}

export default useFetch;
