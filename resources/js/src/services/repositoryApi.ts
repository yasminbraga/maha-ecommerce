import axios from 'axios'

const repositoryApi = axios.create({
  baseURL: 'https://repositoriodefitoingredientes.herokuapp.com',
})

export default repositoryApi
