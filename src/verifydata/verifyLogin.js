export default function verifyLogin(dataUser) {
  if (dataUser.first_name === '') {
    return "First name can't be empty";
  }
  if (dataUser.last_name === '') {
    return "Last name can't be empty";
  }
  if (dataUser.email === '') {
    return "Email can't be empty";
  }
  if (dataUser.tel === '' || dataUser.tel.length < 10) {
    return "Phone number can't be empty or less than 10 digits";
  }
  return '';
}
