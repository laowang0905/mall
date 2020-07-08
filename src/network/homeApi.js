import {
  instance
} from './ajax'

export const multidataApi = () => {
  return instance({
    url: '/home/multidata',
    method: 'get'
  })
}
export const reqGoodsList = (type, page) => {
  return instance({
    method: 'get',
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
