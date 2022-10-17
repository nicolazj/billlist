import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchBill } from '../apiMock';
export const useBill = () => {
  return useInfiniteQuery(
    ['billlist'],
    async ({ pageParam = 0 }) => {
      const res = await fetchBill(pageParam);
      return res;
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextFrom ?? undefined,
    },
  );
};
