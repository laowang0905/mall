import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://152.136.185.210:8000/api/n3',
  timeout: 5000
})
instance.interceptors.request.use(config => {
  return config
}, err => {
  throw err
})
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  throw err
})
