import Base from './base';

class Commissions extends Base {
  constructor(props) {
    super(props);
  }

  getCommissions() {
    return this.axios.get('/commissions');
  }

  getCommission(commissionId) {
    return this.axios.get(`/commission?commission_id=${commissionId}`);
  }

  addCommission(commission) {
    return this.axios.post('/commission', commission);
  }

  updateCommission(commission) {
    return this.axios.put('/commission', commission);
  }

  deleteCommission(commissionId) {
    return this.axios.delete(`/commission?commission_id=${commissionId}`);
  }
}

export default new Commissions();
