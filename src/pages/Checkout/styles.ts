import styled from 'styled-components'

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

  background: ${(props) => props.theme['base-card']};
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
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    line-height: 1.3rem;
  }

  p {
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

  background: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-input']};
  border-radius: 4px;

  color: ${(props) => props.theme['base-label']};
  font-size: 0.875rem;
  line-height: 1.3;
`

const WIDTH_SIZE = {
  full: '100%',
  complement: '70%',
  city: '60%',
  uf: '10%',
  others: '30%',
} as const
interface InputProps {
  widthInput: keyof typeof WIDTH_SIZE
}
export const Input = styled(InputBase)<InputProps>`
  width: ${(props) => WIDTH_SIZE[props.widthInput]};
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;
`

interface PaymentOptionProps {
  active: boolean
}

export const PaymentOption = styled.button<PaymentOptionProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  width: 100%;

  font-size: 0.75rem;
  line-height: 1.6;
  color: ${(props) => props.theme['base-text']};

  background: ${(props) =>
    props.active ? props.theme['purple-light'] : props.theme['base-button']};

  border-radius: 6px;
  border: 1px solid
    ${(props) =>
      props.active ? props.theme.purple : props.theme['base-button']};

  &:hover {
    transition: 0.2s;
    background: ${(props) =>
      props.active ? props.theme['purple-light'] : props.theme['base-hover']};
  }
  cursor: pointer;
`

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 40%;
`

export const OrderContent = styled(FormSection)`
  border-radius: 6px 44px;

  strong {
    align-self: flex-start;
  }
`

export const PriceSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  gap: 0.75rem;
`

export const PriceElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 0.5rem;

  p {
    font-size: 0.875rem;
    line-height: 1.3;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ConfirmOrderButton = styled.button`
  display: flex;
  justify-content: center;
  border: 0;

  cursor: pointer;

  flex-direction: row;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.125rem;

  background: ${(props) => props.theme.yellow};
  border-radius: 6px;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`
