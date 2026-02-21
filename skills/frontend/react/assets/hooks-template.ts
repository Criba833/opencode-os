import { useState, useEffect } from "react";

/**
 * useToggle Hook
 * Simple boolean toggle for components
 */
export const useToggle = (initial: boolean = false) => {
  const [state, setState] = useState(initial);
  const toggle = () => setState((prev) => !prev);
  return [state, toggle] as const;
};

/**
 * useFetch Hook
 * Fetch data from API with loading/error state
 */
export const useFetch = <T = unknown>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
