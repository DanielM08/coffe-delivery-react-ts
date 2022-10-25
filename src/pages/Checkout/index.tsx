import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { 
  FormSection, 
  FormDescription, 
  FormHeader, 
  CheckoutContainer, 
  FormContent, 
  FormFields, 
  Input, 
  Title, 
  PaymentOptions,
  PaymentOption,
  OrderSummary,
  OrderContent
} from "./styles";

export function Checkout(){
  return (
    <CheckoutContainer>
      <form>
        <FormContent>
          <Title>
            Complete seu pedido
          </Title>

          <FormSection>
            <FormHeader>
              <MapPin size={22} color='#C47F17'/>
              <FormDescription>
                <h3>Endereço de Entrega</h3>  
                <text>Informe o engereço onde deseja receber seu pedido</text>
              </FormDescription>          
            </FormHeader>
            <FormFields>
              <Input alt="CEP" placeholder="CEP" widthInput="others" required />
              <Input alt="RUA" placeholder="Rua" widthInput="full" required />
              <div>
                <Input alt="Número" placeholder="Número" widthInput="others" />
                <Input alt="Complemento" placeholder="Complemento" widthInput ="complement"/>
              </div>
              <div>
                <Input alt="Bairro" placeholder="Bairro" widthInput="others" required />
                <Input alt="Cidade" placeholder="Cidade" widthInput="city" required/>
                <Input alt="UF" placeholder="UF" widthInput="uf" required/>
              </div>
            </FormFields>
          </FormSection>

          <FormSection>
            <FormHeader>
              <CurrencyDollar size={22} color='#8047F8'/>
              <FormDescription>
                <h3>Pagamento</h3>
                <text>O pagamento é feito na entrega. Escola a forma que deseja pagar</text>
              </FormDescription>                      
            </FormHeader>

            <PaymentOptions>
              <PaymentOption>
                <CreditCard size={16} color='#8047F8'/>
                <text>CARTÃO DE CRÉDITO</text>
              </PaymentOption>
              <PaymentOption>
                <Money size={16} color='#8047F8'/>
                <text>CARTÃO DE DÉBITO</text>
              </PaymentOption>
              <PaymentOption>
                <Bank size={16} color='#8047F8'/>
                <text>DINHEIRO</text>
              </PaymentOption>
            </PaymentOptions>
          </FormSection>
        </FormContent>

        <OrderSummary>
          <Title>Cafés selecionados</Title>
          <OrderContent>
            
          </OrderContent>
        </OrderSummary>
      </form>
    </CheckoutContainer>
  )
}