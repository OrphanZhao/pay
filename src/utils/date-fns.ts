import { format } from 'date-fns';

export const formatTime = (t: string | number | Date, f = 'yyyy-MM-dd HH:mm:ss') =>
  format(t ? new Date(t) : new Date(), f);
