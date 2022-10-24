import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  max-width: 40rem;
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Title = styled.strong`
  font-family: 'Baloo 2';
  font-size: 18px;
`

export const AddressContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  background: ${props => props.theme["base-card"]};
  border-radius: 6px;
`

export const AddressHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 0.5rem;
`

export const AddressDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 0.125rem;

  h3 {
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1rem;
    line-height: 1.3rem;
  }

  text {
    font-size: 0.875rem;
    line-height: 1.3;
  }
`

// &:first-child {
//   border-top-left-radius: 8px;
//   padding-left: 1.5rem;
// }

// &:last-child {
//   border-top-right-radius: 8px;
//   padding-right: 1.5rem;
// }