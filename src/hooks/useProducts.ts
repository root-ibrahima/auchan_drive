// /src/hooks/useProducts.ts
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';  

export function useProducts() {
  const { data, error } = useSWR('/api/products', fetcher);

  return {
    products: data,
    isLoading: !error && !data,
    isError: error,
  };
}
