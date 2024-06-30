import { formatDistanceToNow } from 'date-fns';

export const formatDistans = date => {
  return formatDistanceToNow(new Date(date));
};
