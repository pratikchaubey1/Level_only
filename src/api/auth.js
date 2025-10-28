import client from './client';

export async function login({ email, username, password }) {
  const emailToSend = email || username; // backend expects `email`
  const { data } = await client.post('/auth/login', { email: emailToSend, password });
  return data; // expected: { token?, user?, ... }
}

export async function signup({ username, email, password, role }) {
  const { data } = await client.post('/auth/signup', { username, email, password, role });
  return data; // expected: { token?, user?, ... }
}
