import parserObj from '../utils/parserObj';

const data = {
  discount: {
    en: 'discount 20%',
    th: 'ส่วนลด 20%',
  },
};
export const HomeEn = parserObj(data, 'en');
export const HomeTh = parserObj(data, 'th');
