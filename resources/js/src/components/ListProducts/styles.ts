import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`

export const ProductImage = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`
