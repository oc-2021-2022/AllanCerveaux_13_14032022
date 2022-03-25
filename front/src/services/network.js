import Axios from 'axios'
import { API_SERVER } from '../config/constant'
import { getToken } from './authentication'

const axios = Axios.create({
  baseURL: `${API_SERVER}`,
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Content-type": "application/json"
  }
})

axios.interceptors.request.use(
  (config) => Promise.resolve(config),
  (error) => Promise.reject(error)
)

axios.interceptors.response.use(
  (config) => Promise.resolve(config),
  (error) => Promise.reject(error)
)

export default axios
