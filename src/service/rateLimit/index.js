import request from '@/util/request';

class RateLimitService {
  queryRateLimits(queryObject) {
    return request({
      url: '/ratelimit',
      method: 'get',
      params: queryObject
    });
  }

  addRecord(record) {
    return request({
      url: '/ratelimit',
      method: 'post',
      data: record
    });
  }

  editRecord(record) {
    return request({
      url: '/ratelimit',
      method: 'put',
      data: record
    });
  }

  deleteRecord(id) {
    return request({
      url: '/ratelimit/' + id,
      method: 'delete',
    });
  }
}

export default new RateLimitService();
