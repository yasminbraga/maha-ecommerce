import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`

export const InfoContainer = styled.div``

export const Title = styled.h2`
  text-transform: uppercase;
  color: #90a67b;
`

export const Description = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 1rem;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`

export const ItemTitle = styled.h4`
  text-transform: uppercase;
  /* color: #90a67b; */
  color: #0d2601;
`
