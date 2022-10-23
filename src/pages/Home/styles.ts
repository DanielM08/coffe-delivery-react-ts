import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h2 {
    margin-bottom: 1rem;
  }

  margin-bottom: 10rem;
`

export const CoffeeCardContainer = styled.div`
  max-width: 256px;

  background: ${props => props.theme["base-card"]};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -20px;
    margin-bottom: 12px;
  }
`

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 4px 8px;
  border-radius: 100px;

  background: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};

  line-height: 1.3;
  font-size: 10px;
  text-transform: uppercase;

  margin-bottom: 1rem;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  
  gap: 0.5rem;
  
  h3 {
    font-family: 'Baloo 2';
    font-size: 20px;
    line-height: 1.3;
  }

  text {
    color: ${props => props.theme["base-label"]};
  }

  margin-bottom: 33px;
`

export const BuyContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  gap: 1.8rem;

  margin-bottom: 20px;
`

export const PriceContent = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
  }
  text {
    font-size: 0.875rem;
  }
`

export const BuyAction = styled.div`
  display: flex;
  gap: 8px;
`

export const Counter = styled.div`
  display: flex;
  align-items: center;

  padding: 0.5rem;
  gap: 0.25rem;

  background: ${props => props.theme["base-button"]};
  border-radius: 6px;
`

const Button = styled.button`
  display: flex;
  justify-content: center;
  border: 0;

  cursor: pointer;
`

export const CoffeeQuantityButton = styled(Button)`
  background: ${props => props.theme["base-button"]};
  color: ${props => props.theme["purple-dark"]};
`

export const ShoppingButton = styled(Button)`
  border-radius: 6px;
  padding: 0.5rem;
  
  background: ${props => props.theme["purple-dark"]};
  color: ${props => props.theme.white};
`
