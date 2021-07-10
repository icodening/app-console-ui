import request from '@/util/request';

class ConfigService {
  query(queryObject) {
    return request({
      url: '/config',
      method: 'get',
      params: queryObject
    });
  }

  addRecord(record) {
    return request({
      url: '/config',
      method: 'post',
      data: record
    });
  }

  editRecord(record) {
    return request({
      url: '/config',
      method: 'put',
      data: record
    });
  }

  deleteRecord(id) {
    return request({
      url: '/config/' + id,
      method: 'delete',
    });
  }
}

export default new ConfigService();
