import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { HomeText, IntroContainer, MarketingElement, MarketingElements, Title } from "./styles";

import logoCoffeeDelivery from '../../../assets/2-logo.svg'

export function Intro(){
  return (
    <IntroContainer>
      <HomeText>
        <Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <text>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</text>
        </Title>
        <MarketingElements>
          <MarketingElement color="yellow-dark">
            <span>
              <ShoppingCart weight="fill"/>
            </span>
            Compra simples e segura
          </MarketingElement>
          
          <MarketingElement color="gray">
            <span>
              <Package weight="fill" />
            </span>
            Embalagem mantém o café intacto
          </MarketingElement>

          <MarketingElement color="yellow">
            <span>
              <Timer weight="fill"/>
            </span>
            Entrega rápida e rastreada
          </MarketingElement>

          <MarketingElement color="purple">
            <span>  
              <Coffee weight="fill"/>
            </span>
            O café chega fresquinho até você
          </MarketingElement>
        </MarketingElements>
      </HomeText>
      <img src={logoCoffeeDelivery} alt="" />
    </IntroContainer>
  )
}