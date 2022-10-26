import { Bank, CreditCard, CurrencyDollar, MapPin, Minus, Money, Plus, Trash } from "phosphor-react";
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
  OrderContent,
  Counter,
  CoffeeQuantityButton,
  CoffeeCard,
  Info,
  Details,
  Actions,
  RemoveItemButton,
  PriceSummary,
  PriceElement,
  ConfirmOrderButton
} from "./styles";

import expresso from '../../assets/expresso.svg'
import latte from '../../assets/latte.svg'

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
            <CoffeeCard>
              <Info>
                <img src={expresso} />
                <Details>
                  <text>Expresso Tradicional</text>
                  <Actions>
                    <Counter>
                      <CoffeeQuantityButton>
                        <Minus size={12}/>
                      </CoffeeQuantityButton>
                      <text>1</text>
                      <CoffeeQuantityButton>
                        <Plus size={12}/>
                      </CoffeeQuantityButton>
                    </Counter>
                    <RemoveItemButton>
                      <Trash size ={16} color='#8047F8'/>
                      <text>REMOVER</text>
                    </RemoveItemButton>
                  </Actions>
                </Details>
              </Info>
              <strong>R$ 9,90</strong>
            </CoffeeCard>
            <CoffeeCard>
              <Info>
                <img src={latte} />
                <Details>
                  <text>Expresso Tradicional</text>
                  <Actions>
                    <Counter>
                      <CoffeeQuantityButton>
                        <Minus size={12}/>
                      </CoffeeQuantityButton>
                      <text>1</text>
                      <CoffeeQuantityButton>
                        <Plus size={12}/>
                      </CoffeeQuantityButton>
                    </Counter>
                    <RemoveItemButton>
                      <Trash size ={16} color='#8047F8'/>
                      <text>REMOVER</text>
                    </RemoveItemButton>
                  </Actions>
                </Details>
              </Info>
              <strong>R$ 9,90</strong>
            </CoffeeCard>

            <PriceSummary>
              <PriceElement>
                <text>Total de Itens</text>
                <text>R$ 29,70</text>
              </PriceElement>
              <PriceElement>
                <text>Entrega</text>
                <text>R$ 3,50</text>
              </PriceElement>
              <PriceElement>
                <h2>Total</h2>
                <h2>R$ 33,20</h2>
              </PriceElement>
            </PriceSummary>
            <ConfirmOrderButton>
              Confirmar pedido
            </ConfirmOrderButton>
          </OrderContent>
        </OrderSummary>
      </form>
    </CheckoutContainer>
  )
}