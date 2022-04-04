import { TOKEN_KEY } from '../config/constant';
import { signout } from './api';

export function isAuthenticated() {
  return !!getToken()
}

export function getToken() {
  return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY)
}

export async function logout() {
  await signout()
  sessionStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(TOKEN_KEY)
}

