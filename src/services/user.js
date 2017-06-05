import request from '../utils/request';

export async function load() {
  return request('/api/usersTest',{ 
    method : 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
}
