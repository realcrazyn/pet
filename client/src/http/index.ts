import axios from 'axios'

let path = '/'

const $host = axios.create({
  baseURL: path,
})
const $authHost = axios.create({
  baseURL: path,
})

const authInterceptor = (config: any) => {
  config.headers.authorization = `${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $authHost, $host }
