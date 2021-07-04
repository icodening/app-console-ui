import request from '@/util/request';

class RateLimitService {
  queryRateLimits(queryObject) {
    return request({
      url: '/ratelimit',
      method: 'get',
      params: queryObject
    });
  }

  addRecord(queryObject) {
    return request({
      url: '/ratelimit',
      method: 'post',
      params: queryObject
    });
  }

  deleteRecord(id) {
    return request({
      url: '/ratelimit/'+id,
      method: 'delete',
    });
  }
}

export default new RateLimitService();
