import Base from './base';

class Customers extends Base {
  constructor(props) {
    super(props);
  }

  getCustomers() {
    return this.axios.get('/customers');
  }

  getCustomer(customerId) {
    return this.axios.get(`/customer?customer_id=${customerId}`);
  }

  addCustomer(customer) {
    return this.axios.post('/customer', customer);
  }

  updateCustomer(customerId, customer) {
    return this.axios.put(`/customer?customer_id=${customerId}`, customer);
  }

  deleteCustomer(customerId) {
    return this.axios.delete(`/customer?customer_id=${customerId}`);
  }
}

export default new Customers();
