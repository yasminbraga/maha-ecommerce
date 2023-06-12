import axios, { AxiosRequestHeaders } from 'axios'

const repositoryApi = axios.create({
  baseURL: 'https://repositoriodefitoingredientes.herokuapp.com',
})

repositoryApi.interceptors.request.use((config) => {
  config.headers = {
    'Content-Type': 'text/plain',
  } as AxiosRequestHeaders

  return config
})
export default repositoryApi
