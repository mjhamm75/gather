import moment from 'moment';

export const formatDate = (iso) => {
  return moment(iso).format('DD MMM YYYY');
}
