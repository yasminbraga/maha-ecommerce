import axios from 'axios'

const repositoryApi = axios.create({
  baseURL: 'https://repositoriodefitoingredientes.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json',
  },
})

export default repositoryApi
