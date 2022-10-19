import Base from './base';

class Employees extends Base {
  constructor(props) {
    super(props);
  }

  getEmployees() {
    return this.axios.get('/employees');
  }

  getEmployee(employeeId) {
    return this.axios.get(`/employee?employee_id=${employeeId}`);
  }

  addEmployee(employee) {
    return this.axios.post('/employee', employee);
  }

  updateEmployee(employee, employeeId) {
    return this.axios.put(`/employee?employee_id=${employeeId}`, employee);
  }

  deleteEmployee(employeeId) {
    return this.axios.delete(`/employee?employee_id=${employeeId}`);
  }
}

export default new Employees();
