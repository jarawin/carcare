import parserObj from '../utils/parserObj';

const data = {
  header: {
    en: 'High Quality Car care Center',
    th: 'ศูนย์ดูแลรถ คุณภาพสูง',
  },
  description_1: {
    en: 'Open 9:00 - 19:00 daily.',
    th: 'ให้บริการ 9:00 - 19:00 น.'
  },
  description_2: {
    en: 'At the underground parking lot, Lotus Songkhla',
    th: 'ทุกวัน ณ ลานจอดรถชั้นใต้ดิน โลตัสสงขลา'
  },
  booking_button: {
    en: 'Booking now',
    th: 'จองคิวด่วน'
  },
  our_service: {
    en: 'Our service',
    th: 'บริการของเรา'
  },
  have_service: {
    en: 'What services do we have?',
    th: 'เรามีบริการอะไรบ้าง'
  },
  promote: {
    en: 'Good value, fast and every service is impressive.',
    th: 'คุ้มค่าคุ้มราคา รวดเร็ว และทุกบริการประทับใจ'
  },
  feature_1: {
    en: 'Car wash and vacuum.',
    th: 'ล้างสีดูดฝุ่น'
  },
  feature_descript_1: {
    en: 'Car wash and vacuum for car and motorcycle.',
    th: 'ล้างสีดูดฝุ่นรถยนต์ รถจักรยานยนต์'
  },
  feature_2: {
    en: 'Glass coating',
    th: 'เคลือบแก้ว'
  },
  feature_descript_2: {
    en: 'Glass coating for car and motorcycle.',
    th: 'เคลือบแก้วรถยนต์ รถจักรยานยนต์'
  },
  feature_3: {
    en: 'Seat cleaning',
    th: 'ฟอกเบาะ'
  },
  feature_descript_3: {
    en: 'Seat cleaning for car and motorcycle.',
    th: 'ฟอกเบาะรถยนต์ รถจักรยานยนต์'
  },
  feature_4: {
    en: 'Polish',
    th: 'ขัดสี'
  },
  feature_descript_4: {
    en: 'Polish and Color coating for car and motorcycle.',
    th: 'ขัดสีเคลือบสีรถยนต์ รถจักรยานยนต์'
  },

  name_for_booking: {
    en: 'Name',
    th: 'ชื่อของผู้จอง'
  },
  phoneNumber_for_booking: {
    en: 'Phone number',
    th: 'ชื่อของผู้จอง'
  },
  bookingDate_for_booking: {
    en: 'Date to get service',
    th: 'วันที่จองคิว'
  },
  bookingTime_for_booking: {
    en: 'Time to get service',
    th: 'เวลาที่จองคิว'
  },
  Time_for_booking: {
    en: '',
    th: 'น.'
  },
  namePlaceholder_for_booking: {
    en: 'Garry',
    th: 'สมชาย'
  },
  
    SEDAN: {
      en: 'Sedan',
      th: 'รถเก๋ง'
    },
    PICKUP: {
      en: 'Pickup',
      th: 'รถกระบะ'
    },
    SUV: {
      en: 'SUV',
      th: 'รถSUV'
    },
    MC: {
      en: 'Motorcycle',
      th: 'รถมอเตอร์ไซค์'
    },
    VAN: {
      en: 'VAN',
      th: 'รถตู้'
    }
    ,
  carLicense: {
    en: 'License car id',
    th: 'ป้ายทะเบียนรถ'
  },
};
export const HomeEn = parserObj(data, 'en');
export const HomeTh = parserObj(data, 'th');
