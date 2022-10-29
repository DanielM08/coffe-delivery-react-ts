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
  OrderContent,
  PriceSummary,
  PriceElement,
  ConfirmOrderButton
} from "./styles";
import { useContext } from "react";
import { CoffeeOrderContext } from "../../contexts/CoffeeOrderContext";
import { CoffeeCard } from "./CoffeeCard";
import { currencyFormatter } from "../../utils/formatter";

const deliveryPrice = 3.5;

export function Checkout(){
  const { coffeeOrder, totalItemsPrice } = useContext(CoffeeOrderContext);

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
            <>
              {
                coffeeOrder.map(coffee =>                 
                  <CoffeeCard 
                    imgSrc={coffee.imgSrc}
                    name={coffee.name}
                    price={coffee.price}
                    quantity={coffee.quantity}
                    key={coffee.name}
                  />
                )
              }
            </>
            <PriceSummary>
              <PriceElement>
                <p>Total de Itens</p>
                <p>{currencyFormatter.format(totalItemsPrice)}</p>
              </PriceElement>
              <PriceElement>
                <p>Entrega</p>
                <p>{currencyFormatter.format(deliveryPrice)}</p>
              </PriceElement>
              <PriceElement>
                <h2>Total</h2>
                <h2>{currencyFormatter.format(totalItemsPrice + deliveryPrice)}</h2>
              </PriceElement>
            </PriceSummary>

            <ConfirmOrderButton type="submit" disabled={totalItemsPrice === 0}>
              Confirmar pedido
            </ConfirmOrderButton>
          </OrderContent>
        </OrderSummary>
      </form>
    </CheckoutContainer>
  )
}