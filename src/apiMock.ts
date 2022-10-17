import { Bill } from './types';

export const sleep = (ms: number) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(undefined);
    }, ms),
  );

const random = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

export const generateBill = (id: number): Bill => {
  return {
    id,
    image: random([
      'https://placekitten.com/200/150',
      'https://placekitten.com/300/200',
      'https://placekitten.com/400/300',
      'https://placekitten.com/500/400',
      'https://placekitten.com/600/500',
      'https://placekitten.com/700/600',
      'https://placekitten.com/800/600',
    ]),
    amount: Math.random() * 100,
    ts: Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 100),
    status: random(['Processing', 'Scheduled', 'Unable to pay', 'Paid']),
  };
};
export const fetchBill = async (from: number, pick: number = 10) => {
  await sleep(1000);
  const data = new Array(pick).fill(0).map((_, index) => {
    return generateBill(from + index);
  });

  return {
    data,
    nextFrom: from + pick,
  };
};
