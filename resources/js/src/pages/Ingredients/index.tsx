import React, { useCallback, useEffect } from 'react'
import repositoryApi from '../../services/repositoryApi'

// import { Container } from './styles';

const Ingredients: React.FC = () => {
  const loadIngredients = useCallback(async () => {
    try {
      const res = await fetch(
        'https://repositoriodefitoingredientes.herokuapp.com/excipiente/json'
      ).then((res) => {
        console.log(res)
        res.json()
      })

      const res2 = await repositoryApi.get('/excipiente/json')

      console.log(res)
      console.log(res2)
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    loadIngredients()
  }, [])

  return <h1>Ingredientes</h1>
}

export default Ingredients
