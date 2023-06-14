import React, { useCallback, useEffect, useState } from 'react'
import repositoryApi from '../../services/repositoryApi'

import { Container, ItemImage } from './styles'

interface IngredientType {
  id: number
  nome: string
  objetivo?: string
}

const Ingredients: React.FC = () => {
  const [ingredients, setIngredients] = useState<IngredientType[]>([])

  const loadIngredients = useCallback(async () => {
    try {
      const res = await repositoryApi.get('/excipiente/json')
      setIngredients(res.data)
    } catch (err) {
      console.log(err)
    }
  }, [])

  useEffect(() => {
    loadIngredients()
  }, [])

  return (
    <Container>
      <h2>Ingredientes</h2>
      {ingredients.map((i) => {
        const image = require(`../../assets/${i.id}.jpg`)
        return (
          <div key={i.id}>
            <ItemImage src={image} alt={i.nome} />
            <p>{i.nome}</p>
            <p>{i.objetivo ?? 'texto nao carregado'}</p>
          </div>
        )
      })}
    </Container>
  )
}

export default Ingredients
