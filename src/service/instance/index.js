import request from '@/util/request';

class InstanceService {
  queryInstances(queryObject) {
    return request({
      url: '/instance',
      method: 'get',
      params: queryObject
    });
  }
}

export default new InstanceService();
