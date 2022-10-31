import { Icon, Info, InfoPanel, OrderInfo, SuccessContainer, Text } from "./styles";

import successIllustration from '../../assets/success-illustration.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Success() {
  return (
    <SuccessContainer>
      <strong>Uhu! Pedido confirmado</strong>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <InfoPanel>
        <OrderInfo>
          <Info>
            <Icon variant="purple">
              <MapPin size={20} weight="fill"/>
            </Icon>
            <Text>
              <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
              Farrapos - Porto Alegre, RS
            </Text>                      
          </Info>
          
          <Info>
            <Icon variant="yellow">
              <Timer size={20} weight="fill"/>
            </Icon>
            <Text>
              Previsão de entrega{"\n"}
              <strong>20 min - 30 min</strong>
            </Text>
          </Info>

          <Info>
            <Icon variant="yellow-dark">
              <CurrencyDollar size={20} weight="fill"/>
            </Icon>
            <Text>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </Text>                        
          </Info>
        </OrderInfo>
        <img src={successIllustration} />
      </InfoPanel>
    </SuccessContainer>
  )
}