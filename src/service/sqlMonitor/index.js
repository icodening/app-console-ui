import request from '@/util/request';

class SQLMonitorService {
  query(id) {
    return request({
      url: '/sqlMonitor/' + id,
      method: 'get'
    });
  }
}

export default new SQLMonitorService();
