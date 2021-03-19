import { fetchConToken, fetchSinToken } from '../../helpers/fetch';

describe('Pruebas en el helper Fetch', () => {
  let token = '';

  test('fetchSinToken debe de funcionar', async () => {
    const resp = await fetchSinToken(
      'auth',
      { email: 'carlos@gmail.com', password: '123456' },
      'POST',
    );

    expect(resp instanceof Response).toBe(true);

    const body = await resp.json();
    expect(body.ok).toBe(true);

    token = body.token;
  });

  test('fetchConToken debe de funcionar', async () => {
    localStorage.setItem('token', token);

    const resp = await fetchConToken('events/6054c6cba782f736348c316d', {}, 'DELETE');
    const body = await resp.json();
    
    expect( body.msg ).toBe('Evento no existe por ese id');
  });
});
