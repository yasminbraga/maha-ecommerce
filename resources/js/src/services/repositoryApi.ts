import axios from 'axios'

const repositoryApi = axios.create({
  baseURL: 'https://repositoriodefitoingredientes.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
})

export default repositoryApi
