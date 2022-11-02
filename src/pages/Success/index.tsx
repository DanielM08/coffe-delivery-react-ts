import { Icon, Info, InfoPanel, OrderInfo, SuccessContainer, Text } from "./styles";

import successIllustration from '../../assets/success-illustration.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useLocation } from "react-router-dom";
import { PaymentOptionsEnum } from "../../contexts/CoffeeOrderContext";

interface StateProps {
  state: {
    cep: string;
    street: string;
    num: string;
    complement: string;
    district: string;
    city: string;
    uf: string;
    paymentOption: PaymentOptionsEnum;
  }
}

export function Success() {

  const { state }: StateProps = useLocation();
  const { paymentOption } = state;

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
              <p>Entrega em <strong>{state.street}, {state.num}</strong></p>
              {state.district} - {state.city}, {state.uf}
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
              <strong>{paymentOption}</strong>
            </Text>                        
          </Info>
        </OrderInfo>
        <img src={successIllustration} />
      </InfoPanel>
    </SuccessContainer>
  )
}