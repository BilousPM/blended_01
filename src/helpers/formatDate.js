import { formatDistanceToNow, format } from 'date-fns';

export const formatDistans = date => {
  return formatDistanceToNow(new Date(date));
};

export const formatDate = date => {
  return format(new Date(date), 'Pp');
};
