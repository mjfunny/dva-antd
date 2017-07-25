import qs from 'qs';
import request from '../utils/request';

export async function query() {
  return request('/api/users/list');
}

export async function detail({ id }) {
  return request(`/api/users?${qs.stringify({ id })}`);
}

export async function create({ isMale, name, age, address }) {
  return request('/api/users/create', {
    method: 'POST',
    body: qs.stringify({ isMale, name, age, address }),
  });
}

export async function modify({ isMale, name, age, address }) {
  return request('/api/users/modify', {
    method: 'POST',
    body: qs.stringify({ isMale, name, age, address }),
  });
}

export async function del({ id }) {
  return request('/api/users/delete', {
    method: 'POST',
    body: qs.stringify({ id }),
  });
}
