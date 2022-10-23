import Base from './base';

class Services extends Base {
  constructor(props) {
    super(props);
  }

  getServices() {
    return this.axios.get('/service');
  }
}
export default new Services();
