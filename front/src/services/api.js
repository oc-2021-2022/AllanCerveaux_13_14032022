import axios from './network';

export function login(data) {
  return axios.post('/user/login', data)
}

export function profile() {
  return axios.post(
    '/user/profile'
  )
}

export function updateProfile({firstName, lastName}) {
  return axios.put(
    '/user/profile',
    { firstName, lastName }
  )
}
