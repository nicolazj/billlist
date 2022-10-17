import dayjs from 'dayjs';
import numeral from 'numeral';
export const formatDateTime = (ts: number) => dayjs(ts).format('YYYY-MM-DD HH:mm:ss');
export const formatMoney = (amount: number) => numeral(amount).format('$0,0.00');
