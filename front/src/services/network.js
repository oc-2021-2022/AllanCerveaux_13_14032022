import Axios from 'axios'
import { API_SERVER } from '../config/constant'

const axios = Axios.create({
  baseURL: `${API_SERVER}`
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
