export enum BillStatus {
  PROCESS ,
  SCHEDULED ,
  UNABLE_TO_PAY,
  PAID ,
}
export interface Bill {
    id:number,
  image: string;
  amount: number;
  date: number;
  status: BillStatus;
}
