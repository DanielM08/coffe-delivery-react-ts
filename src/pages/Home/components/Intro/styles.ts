import styled from 'styled-components'
import background from '../../../../assets/background.svg'

export const IntroContainer = styled.main`
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-image: url(${background});
  background-size: contain;
`

export const HomeText = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
  }
`

export const MarketingElements = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`

const STATUS_COLORS = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  gray: 'base-text',
} as const

interface ElementProps {
  color: keyof typeof STATUS_COLORS
}

export const MarketingElement = styled.div<ElementProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.875rem;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;
    border-radius: 1000px;

    background-color: ${(props) => props.theme[STATUS_COLORS[props.color]]};
    color: ${(props) => props.theme.white};
  }
`
