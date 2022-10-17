import { Bill, BillStatus } from './types';

export const sleep = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(undefined);
    }, ms),
  );

function random<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const generateBill = (id: number): Bill => {
  return {
    id,
    image: random(['https://placekitten.com/400/300', 'https://placekitten.com/500/400']),
    amount: Math.random() * 100,
    date: Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 100,
    status: random([BillStatus.PAID, BillStatus.PROCESS, BillStatus.SCHEDULED, BillStatus.UNABLE_TO_PAY]),
  };
};
export const fetchBill = async (from: number, pick: number = 10) => {
  await sleep(1000);
  return new Array(pick).fill(0).map((_, index) => {
    return generateBill(from + index);
  });
};
