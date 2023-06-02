import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f7f5;
  padding: 1rem;
`
export const QRCodeImage = styled.img`
  width: 100px;
`
export const KeyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem 0;
`
export const CopyBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #44732f;
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`
