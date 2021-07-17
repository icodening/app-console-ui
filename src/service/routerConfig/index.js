import request from '@/util/request';

class RouterConfigService {
  query(queryObject) {
    return request({
      url: '/routerConfig',
      method: 'get',
      params: queryObject
    });
  }

  addRecord(record) {
    return request({
      url: '/routerConfig',
      method: 'post',
      data: record
    });
  }

  editRecord(record) {
    return request({
      url: '/routerConfig',
      method: 'put',
      data: record
    });
  }

  deleteRecord(id) {
    return request({
      url: '/routerConfig/' + id,
      method: 'delete',
    });
  }
}

export default new RouterConfigService();
