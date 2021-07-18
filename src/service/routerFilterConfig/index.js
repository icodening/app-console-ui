import request from '@/util/request';

class RouterFilterConfigService {
  query(queryObject) {
    return request({
      url: '/routerFilterConfig',
      method: 'get',
      params: queryObject
    });
  }

  addRecord(record) {
    return request({
      url: '/routerFilterConfig',
      method: 'post',
      data: record
    });
  }

  editRecord(record) {
    return request({
      url: '/routerFilterConfig',
      method: 'put',
      data: record
    });
  }

  deleteRecord(id) {
    return request({
      url: '/routerFilterConfig/' + id,
      method: 'delete',
    });
  }
}

export default new RouterFilterConfigService();
