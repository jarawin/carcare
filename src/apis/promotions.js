import Base from './base';

class Promotions extends Base {
  constructor(props) {
    super(props);
  }

  getPromotions() {
    return this.axios.get('/promotion');
  }

  getPromotion(promotionId) {
    return this.axios.get(`/promotion?promotion_id=${promotionId}`);
  }

  getCanUsePromotions(customerId, code, type_car, services) {
    console.log(
      'getCanUsePromotions',
      customerId,
      code,
      type_car,
      JSON.stringify(services)
    );
    return this.axios.post(
      `/promotion/canuse?customer_id=${customerId}&code=${code}&type_car=${type_car}`,
      services
    );
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
