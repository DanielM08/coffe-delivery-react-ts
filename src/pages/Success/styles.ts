import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin-top: 5rem;

  > strong {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'baloo 2';
    line-height: 1.3;
    font-size: 2rem;
  }

  > p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const InfoPanel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 6rem;

  margin-top: 2.5rem;
`

export const OrderInfo = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;

  width: 100%;
  max-width: 800px;

  background: linear-gradient(white, white) padding-box,
    linear-gradient(to right, #dbac2c 0%, #8047f8 100%) border-box;

  border: 1px solid transparent;
  border-radius: 6px 36px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;

  margin-bottom: 1rem;
`

interface IconProps {
  variant: 'purple' | 'yellow' | 'yellow-dark'
}

export const Icon = styled.span<IconProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[props.variant]};
  border-radius: 1000px;
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-text']};
`
