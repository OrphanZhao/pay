import numeral from 'numeral';

numeral.register('locale', 'chs', {
  delimiters: {
    thousands: ',',
    decimal: '.',
  },
  abbreviations: {
    thousand: 'K',
    million: 'M',
    billion: '十亿',
    trillion: '兆',
  },
  ordinal() {
    return '.';
  },
  currency: {
    symbol: '¥',
  },
});
numeral.locale('chs');

export const yuan = (val: string | number) => (val != null ? numeral(val).format('$0,0.00') : '');
