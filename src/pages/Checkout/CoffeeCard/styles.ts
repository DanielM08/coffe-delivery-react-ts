import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0.25rem;
  gap: 0.5rem;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 1.25rem;

  img {
    width: 4rem;
  }
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 0.5rem;

  p {
    font-size: 1rem;
    line-height: 1.3;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 0.5rem;
`

export const Counter = styled.div`
  width: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.3rem;
  gap: 0.4rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  border: 0;

  cursor: pointer;
`

export const CoffeeQuantityButton = styled(Button)`
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['purple-dark']};
`

export const RemoveItemButton = styled(Button)`
  align-items: center;
  padding: 0.35rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  p {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6;
  }
`
