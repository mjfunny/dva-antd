import qs from 'qs';
import request from '../utils/request';

export async function query() {
  return request('/api/users/list');
}

export async function detail({ id }) {
  return request(`/api/users?${qs.stringify({ id })}`);
}
