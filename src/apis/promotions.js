import Base from './base';

class Promotions extends Base {
  constructor(props) {
    super(props);
  }

  getPromotions() {
    return this.axios.get('/promotions');
  }

  getPromotion(promotionId) {
    return this.axios.get(`/promotion?promotion_id=${promotionId}`);
  }

  addPromotion(promotion) {
    return this.axios.post('/promotion', promotion);
  }

  updatePromotion(promotion, promotionId) {
    return this.axios.put(`/promotion?promotion_id=${promotionId}`, promotion);
  }

  deletePromotion(promotionId) {
    return this.axios.delete(`/promotion?promotion_id=${promotionId}`);
  }
}

export default new Promotions();
