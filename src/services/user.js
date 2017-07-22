import request from '../utils/request';

export async function load() {
  return request('/api/users/list');
}
