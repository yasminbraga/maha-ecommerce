import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`
export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const DescriptionContainer = styled.p`
  width: 200px;
  font-size: 14px;
`

export const PriceContainer = styled.span`
  font-weight: 600;
  color: #44732f;
  font-size: 14px;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const QuantityContainer = styled.div`
  border: 1px solid #90a67b;
  border-radius: 0.3rem;
  padding: 0.2rem 0.5rem;

  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
`
export const QuantityBtn = styled.button`
  border: none;
  background-color: transparent;
  font-weight: 500;
  font-size: 20px;
  height: fit-content;
`

export const RemoveBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  border: none;
  background-color: transparent;
  color: #ab0e0e;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`
