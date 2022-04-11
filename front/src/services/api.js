import { getToken } from './authentication';
import axios from './network';

export function login(data) {
  return axios.post('/user/login', data)
}

export function profile() {
  return axios.post(
    '/user/profile',
    undefined,
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-type": "application/json"
      }
    }
  )
}

export function updateProfile({firstName, lastName}) {
  return axios.put(
    '/user/profile',
    { firstName, lastName },
    {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-type": "application/json"
      }
    }
  )
}

export function signout(apiContext = {}) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1453);
  });
}
