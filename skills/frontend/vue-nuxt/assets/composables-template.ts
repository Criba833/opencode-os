import { ref, computed, watch } from "vue";

/**
 * useToggle Composable
 * Simple boolean toggle for Vue components
 */
export const useToggle = (initial: boolean = false) => {
  const state = ref(initial);
  const toggle = () => (state.value = !state.value);
  return { state, toggle };
};

/**
 * useFetch Composable
 * Fetch data from API with loading/error state
 */
export const useFetch = <T = unknown>(url: string) => {
  const data = ref<T | null>(null);
  const loading = ref(true);
  const error = ref<Error | null>(null);

  const fetchData = async () => {
    loading.value = true;
    try {
      const res = await fetch(url);
      data.value = await res.json();
    } catch (err: any) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  fetchData();
  return { data, loading, error, refresh: fetchData };
};
