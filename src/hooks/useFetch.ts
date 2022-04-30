import { useState, useEffect } from "react";

export function useFetch<DataType>(route: string) {
  const [data, setData] = useState<undefined | DataType>(undefined);
  const [error, setError] = useState<undefined | { error: any }>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(route)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError({ error: JSON.stringify(err) }))
      .finally(() => setLoading(false));
  }, [route]);

  return { data, loading, error };
}
