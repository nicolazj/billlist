
export interface Bill {
  id: number;
  image: string;
  amount: number;
  ts: number;
  status: 'Processing' | 'Scheduled' | 'Unable to pay' | 'Paid';
}
