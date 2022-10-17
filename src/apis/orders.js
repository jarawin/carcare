import Base from './base';

class Orders extends Base {
  constructor(props) {
    super(props);
  }

  getOrders() {
    return this.axios.get('/orders');
  }

  getOrder(orderId) {
    return this.axios.get(`/order?order_id=${orderId}`);
  }

  addOrder(order) {
    return this.axios.post('/order', order);
  }

  updateOrder(order, orderId) {
    return this.axios.put(`/order?order_id=${orderId}`, order);
  }

  deleteOrder(orderId) {
    return this.axios.delete(`/order?order_id=${orderId}`);
  }
}

export default new Orders();
