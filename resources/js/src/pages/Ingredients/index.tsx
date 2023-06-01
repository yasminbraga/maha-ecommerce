import React, { useEffect } from 'react'
import repositoryApi from '../../services/repositoryApi'

// import { Container } from './styles';

const Ingredients: React.FC = () => {
  useEffect(() => {
    repositoryApi
      .get('/excipiente/json')
      .then((response) => {
        console.log(response)
      })
      .catch((err) => console.log(err))
  }, [])

  return <h1>Ingredientes</h1>
}

export default Ingredients
