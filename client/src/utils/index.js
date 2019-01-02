import reactLoadable from 'react-loadable'
import Loading from '../components/Loading'

export { default as request } from './request'

export const loadable = (opts) => {
  return reactLoadable(Object.assign({
    loading: Loading,
    delay: 200
  }, opts))
}
