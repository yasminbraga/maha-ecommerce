import React, { useCallback, useEffect, useState } from 'react'
import repositoryApi from '../../services/repositoryApi'

import { Container, Description, ItemContainer, ItemImage, ItemTitle, List, Title } from './styles'

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
      <Title>Ingredientes</Title>
      <Description>
        Ingredientes advindos da nossa rica floresta Amazônica fortalecendo o comércio local e
        preservando a região.
      </Description>

      <List>
        {ingredients.map((i) => {
          const image = require(`../../assets/${i.id}.png`)
          return (
            <ItemContainer key={i.id}>
              <ItemImage src={image} alt={i.nome} />
              <ItemTitle>{i.nome}</ItemTitle>
              <p>Exemplo de descrição de ingrediente</p>
            </ItemContainer>
          )
        })}
      </List>
    </Container>
  )
}

export default Ingredients
