import parserObj from '../utils/parserObj';

const data = {
  carcare: {
    en: 'Car Care',
    th: 'ดูแลรถยนต์',
  },
  booking: {
    en: 'Booking',
    th: 'จองคิวออนไลน์',
  },
  home: {
    en: 'Home',
    th: 'หน้าหลัก',
  },
  member: {
    en: 'Member Pass',
    th: 'สมาชิกพิเศษ',
  },
  queue: {
    en: 'Queue',
    th: 'สถานะคิว',
  },
  login: {
    en: 'Login',
    th: 'เข้าสู่ระบบ',
  },
  register: {
    en: 'Register',
    th: 'สมัครสมาชิก',
  },
  nopage: {
    en: 'No Page',
    th: 'ไม่มีหน้านี้',
  },
  header: {
    en: 'Header',
    th: 'ส่วนหัว',
  },
  services: {
    en: 'Services',
    th: 'บริการ',
  },
};

export const MenuEn = parserObj(data, 'en');
export const MenuTh = parserObj(data, 'th');
