import styled from 'styled-components'

export const Container = styled.div``
export const CartContent = styled.div`
  display: flex;
  gap: 1rem;
`

export const Summary = styled.div`
  background-color: #f9f7f5;
  padding: 1rem;
  /* width: 400px; */
`
export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & img {
    height: 60px;
    width: 60px;
    object-fit: cover;
  }
`
export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PrimaryButton = styled.button`
  background-color: #0d0d0d;
  color: #fff;
  border: none;
  width: 100%;
  padding: 0.5rem 0;
  font-weight: 500;
`
