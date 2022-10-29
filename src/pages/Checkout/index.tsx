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
                <p>Informe o engereço onde deseja receber seu pedido</p>
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
                <p>O pagamento é feito na entrega. Escola a forma que deseja pagar</p>
              </FormDescription>                      
            </FormHeader>

            <PaymentOptions>
              <PaymentOption>
                <CreditCard size={16} color='#8047F8'/>
                <p>CARTÃO DE CRÉDITO</p>
              </PaymentOption>
              <PaymentOption>
                <Money size={16} color='#8047F8'/>
                <p>CARTÃO DE DÉBITO</p>
              </PaymentOption>
              <PaymentOption>
                <Bank size={16} color='#8047F8'/>
                <p>DINHEIRO</p>
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
                  <p>Expresso Tradicional</p>
                  <Actions>
                    <Counter>
                      <CoffeeQuantityButton>
                        <Minus size={12}/>
                      </CoffeeQuantityButton>
                      <p>1</p>
                      <CoffeeQuantityButton>
                        <Plus size={12}/>
                      </CoffeeQuantityButton>
                    </Counter>
                    <RemoveItemButton>
                      <Trash size ={16} color='#8047F8'/>
                      <p>REMOVER</p>
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
                  <p>Expresso Tradicional</p>
                  <Actions>
                    <Counter>
                      <CoffeeQuantityButton>
                        <Minus size={12}/>
                      </CoffeeQuantityButton>
                      <span>1</span>
                      <CoffeeQuantityButton>
                        <Plus size={12}/>
                      </CoffeeQuantityButton>
                    </Counter>
                    <RemoveItemButton>
                      <Trash size ={16} color='#8047F8'/>
                      <p>REMOVER</p>
                    </RemoveItemButton>
                  </Actions>
                </Details>
              </Info>
              <strong>R$ 9,90</strong>
            </CoffeeCard>

            <PriceSummary>
              <PriceElement>
                <p>Total de Itens</p>
                <p>R$ 29,70</p>
              </PriceElement>
              <PriceElement>
                <p>Entrega</p>
                <p>R$ 3,50</p>
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