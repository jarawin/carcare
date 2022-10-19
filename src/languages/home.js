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
  surnamePlaceholder_for_booking: {
    en: 'Smith',
    th: 'ชายสมร'
  },
  type_car: {
    en: 'Type of car',
    th: 'ชนิดของรถ'
  },
  car_color: {
    en: 'Car color',
    th: 'สีของรถ'
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
    en: 'License plate',
    th: 'ป้ายทะเบียนรถ'
  },

  WHITE: {
    en: 'White',
    th: 'ขาว'
  },
  BLACK: {
    en: 'Black',
    th: 'ดำ'
  },
  GRAY: {
    en: 'Gray',
    th: 'เทา'
  },
  SILVER: {
    en: 'Silver',
    th: 'เงิน'
  },
  RED: {
    en: 'Red',
    th: 'เเดง'
  },
  BLUE: {
    en: 'Blue',
    th: 'น้ำเงิน'
  },
  BROWN: {
    en: 'Brown',
    th: 'น้ำตาล'
  },
  GREEN: {
    en: 'Green',
    th: 'เขียว'
  },
  BEIGE: {
    en: 'Beige',
    th: 'เบจ'
  },
  ORANGE: {
    en: 'Orange',
    th: 'ส้ม'
  },
  GOLD: {
    en: 'Gold',
    th: 'ทอง'
  },
  YELLOW: {
    en: 'Yellow',
    th: 'เหลือง'
  },
  PURPLE: {
    en: 'Purple',
    th: 'ม่วง'
  },
  OTHERS: {
    en: 'Other',
    th: 'อื่นๆ'
  },
  licensePlaceholder: {
    en: 'AB 1234 ',
    th: 'กข 1234 กรุงเทพ'
  },

  service_Step: {
    en: 'Service',
    th: 'บริการ'
  },
  promotion_Step: {
    en: 'Promotion',
    th: 'โปรโมชั่น'
  },
  verify_promo_Step: {
    en: 'Verify',
    th: 'ตรวจสอบ'
  },
  text_Step: {
    en: 'Message',
    th: 'ข้อความเพิ่มเติม'
  },
  text_placeholder: {
    en: 'Message',
    th: 'ข้อความเพิ่มเติม'
  },
  get_more_service: {
    en: '+ More service',
    th: '+ เพิ่มบริการ'
  },
  back_button: {
    en: 'Back',
    th: 'ย้อนกลับ'
  },
  confirm_button: {
    en: 'Confirm',
    th: 'ยืนยันการจอง'
  },
  next_button: {
    en: 'Next',
    th: 'ต่อไป'
  },
  bookingOnline: {
    en: 'Online Booking',
    th: 'จองคิวออนไลน์'
  },

  profileEdit: {
    en: 'Edit Personal Info',
    th: 'แก้ไขข้อมูลส่วนตัว'
  },
  nameEdit: {
    en: 'Name',
    th: 'ชื่อจริง'
  },
  surnameEdit: {
    en: 'Surname',
    th: 'นามสกุล'
  },
  emailEdit: {
    en: 'Email',
    th: 'อีเมล'
  },
  telEdit: {
    en: 'Phone number',
    th: 'เบอร์โทรศัพท์'
  },
  updateEdit: {
    en: 'Data Update',
    th: 'อัพเดตข้อมูล'
  },

  bookingQueue: {
    en: 'Booking queue',
    th: 'จองคิว'
  },
  arrive: {
    en: 'Arrive',
    th: 'มาถึง'
  },
  discount: {
    en: 'Discount',
    th: 'ส่วนลด'
  },
  commission: {
    en: 'Commission',
    th: 'คอมมิชชั่น'
  },

  logout: {
    en: 'Logout',
    th: 'ออกจากระบบ'
  },
  personaData: {
    en: 'Personal Data',
    th: 'ข้อมูลส่วนบุคคล'
  }
  ,loginFirsttime: {
    en: 'Register for the first time login',
    th: 'ลงชื่อเข้าใช้งานครั้งแรก'
  },
  welcomeTo: {
    en: 'Welcome to',
    th: 'ยินดีต้อนรับเข้าสู่'
  },
};
export const HomeEn = parserObj(data, 'en');
export const HomeTh = parserObj(data, 'th');
