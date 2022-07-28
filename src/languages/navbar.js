import parserObj from "../utils/parserObj";


const data = {
    banner: {
        en: "Get free delivery on orders over $100",
        th: 'ส่งฟรี เมื่อยอดการสั่งซื้อเกิน ฿3000'
    },
    english: {
        en: "ภาษาอังกฤษ",
        th: 'English'
    },
    thai: {
        en: "ภาษาไทย",
        th: 'Thailand'
    },
    darkmode: {
        en: "Dark Mode",
        th: 'โหมดกลางคืน'
    },
    lightmode: {
        en: "Light Mode",
        th: 'โหมดกลางวัน'
    },
    login: {
        en: "Login",
        th: 'เข้าสู่ระบบ'
    },
    logout: {
        en: "Logout",
        th: 'ออกจากระบบ'
    },
    adminmode: {
        en: "Admin Mode",
        th: 'โหมดแอดมิน'
    },
    usermode: {
        en: "User Mode",
        th: 'โหมดผู้ใช้งาน'
    },
}


export const NavEn = parserObj(data, 'en');
export const NavTh = parserObj(data, 'th');