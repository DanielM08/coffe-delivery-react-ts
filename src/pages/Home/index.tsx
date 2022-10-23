import { Intro } from "./components/Intro";
import { BuyAction, BuyContent, CoffeeCardContainer, CoffeeQuantityButton, Counter, Description, HomeContainer, PriceContent, ShoppingButton, Tag } from "./styles";

import expresso from '../../assets/expresso.svg'
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function Home(){
  return (
    <HomeContainer>
      <Intro />

      <h2>Nossos Cafés</h2>

      <CoffeeCardContainer>
        <img src={expresso}/>
        <Tag>
          <strong>Tradicional</strong>
        </Tag>
        <Description>
          <h3>Expresso Tradicional</h3>
          <text>O tradicional café feito com água quente e grãos moídos</text>          
        </Description>
        <BuyContent>
          <PriceContent>
            <text>R$</text>
            <h3>9,90</h3>
          </PriceContent>
          <BuyAction>
            <Counter>
              <CoffeeQuantityButton>
                <Minus size={12}/>
              </CoffeeQuantityButton>
              <text>1</text>
              <CoffeeQuantityButton>
                <Plus size={12}/>
              </CoffeeQuantityButton>
            </Counter>
            <ShoppingButton>
              <ShoppingCart size={22} weight="fill"/>
            </ShoppingButton>          
          </BuyAction>
        </BuyContent>
        
      </CoffeeCardContainer>
    </HomeContainer>
  )
}