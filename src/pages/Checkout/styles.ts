import styled from "styled-components";

export const CheckoutContainer = styled.main`
  form {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 60%;
`

export const Title = styled.strong`
  font-family: 'Baloo 2';
  font-size: 18px;
`

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  background: ${props => props.theme["base-card"]};
  border-radius: 6px;
`

export const FormHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 0.5rem;
`

export const FormDescription = styled.div`
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
export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }
`

const InputBase = styled.input`
  box-sizing: border-box;
  padding: 0.75rem;
  
  background: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-input"]};
  border-radius: 4px;

  color: ${props => props.theme["base-label"]};
  font-size: 0.875rem;
  line-height: 1.3;
`

const WIDTH_SIZE = {
  'full': '100%',
  'complement': '70%',
  'city': '60%',
  'uf': '10%',
  'others': '30%',
} as const
interface InputProps {
  widthInput: keyof typeof WIDTH_SIZE
} 
export const Input = styled(InputBase)<InputProps>`
  width: ${props => WIDTH_SIZE[props.widthInput]};
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;
`

export const PaymentOption = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  border: 0;

  width: 100%;

  background: ${props => props.theme["base-button"]};
  border-radius: 6px;

  cursor: pointer;

  text {
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    color: ${props => props.theme["base-text"]};
  }
`

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 40%;
`

export const OrderContent = styled(FormSection)`
  border-radius: 6px 44px;
`