export default function verifyBooking(dataBooking, step) {
  if (step >= 3) {
    if (dataBooking.included.length === 0) {
      return 'Please choose at least one service';
    }
  }
  if (step >= 2) {
    if (dataBooking.type_car === '') {
      return "Type car can't be empty";
    }
    if (dataBooking.license_car === '') {
      return "License car can't be empty";
    }
    if (dataBooking.color_car === '') {
      return "Color car can't be empty";
    }
  }
  if (step >= 1) {
    if (dataBooking.nickname === '') {
      return "Nickname can't be empty";
    }
    if (dataBooking.tel === '' || dataBooking.tel.length != 10) {
      return "Phone number can't be empty or less than 10 digits";
    }
    if (dataBooking.booking_time === '') {
      return "Booking time can't be empty";
    }
  }

  return '';
}
