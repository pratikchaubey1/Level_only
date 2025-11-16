import client from './client';

// Admin login: username: admin, password: admin13
export async function adminLogin({ username, password }) {
  const { data } = await client.post('/admin/login', { username, password });
  return data; // { success, token, payload }
}
