import {
  instance
} from './ajax'

export const multidataApi = () => {
  return instance({
    url: '/home/multidata',
    method: 'get'
  })
}
