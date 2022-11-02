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
import { useContext, useState } from "react";
import { CoffeeOrderContext } from "../../contexts/CoffeeOrderContext";
import { CoffeeCard } from "./CoffeeCard";
import { currencyFormatter } from "../../utils/formatter";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from "react-router-dom";

const deliveryPrice = 3.5;

const finishOrderFormValidationSchema = zod.object({
  cep: zod.string().min(6, 'Informe o CEP'),
  street: zod.string().min(5, 'Informe a Rua'),
  num: zod.string(),
  complement: zod.string(),
  district: zod.string().min(5, 'Informe o bairro'),
  city: zod.string().min(5, 'Informe a cidade'),
  uf: zod.string().max(2, 'Informe o UF'),
})

type FinishOrderFormData = zod.infer<typeof finishOrderFormValidationSchema>

export function Checkout(){
  const { register, handleSubmit, reset } = useForm<FinishOrderFormData>({
    resolver: zodResolver(finishOrderFormValidationSchema),
    defaultValues: {
      cep: '',
      street: '',
      num: '',
      city: '',
      complement: '',
      district: '',
      uf: '',
    },
  });

  const { coffeeOrder, totalItemsPrice } = useContext(CoffeeOrderContext);
  const [paymentOption, setPaymentOption] = useState('money');
  const navigate = useNavigate()

  function handlePaymentOption(selectedOption: string) {
    setPaymentOption(selectedOption);
  }

  function handleFinishPayment(data: FinishOrderFormData) {
    console.log(data)
    console.log(paymentOption)
    
    navigate('/success')

    reset();
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleFinishPayment)} action="">
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
              <Input 
                id="cep"
                alt="CEP"
                placeholder="CEP"
                widthInput="others"
                maxLength={9}
                {...register('cep')}                
              />
              <Input 
                id="rua"
                alt="RUA"
                placeholder="Rua"
                widthInput="full"
                maxLength={20}
                {...register('street')}             
              />
              <div>
                <Input 
                  id="numero"
                  alt="Número"
                  placeholder="Número"
                  widthInput="others"
                  maxLength={5}
                  {...register('num')}
                />
                <Input
                  alt="Complemento"
                  placeholder="Complemento"
                  widthInput ="complement"
                  maxLength={20}
                  {...register('complement')}
                />
              </div>
              <div>
                <Input
                  alt="Bairro"
                  placeholder="Bairro"
                  widthInput="others" 
                  maxLength={10}   
                  {...register('district')}              
                />
                <Input
                  alt="Cidade"
                  placeholder="Cidade"
                  widthInput="city"    
                  maxLength={20}
                  {...register('city')}             
                />
                <Input
                  alt="UF"
                  placeholder="UF"
                  widthInput="uf"
                  maxLength={2}
                  {...register('uf')}                            
                />
              </div>
            </FormFields>
          </FormSection>

          <FormSection>
            <FormHeader>
              <CurrencyDollar size={22} color='#8047F8'/>
              <FormDescription>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </FormDescription>                      
            </FormHeader>

            <PaymentOptions>
              <PaymentOption 
                active={ paymentOption === 'credit_card' }
                onClick={() => handlePaymentOption('credit_card')}
                value='Credit card'
              >
                <CreditCard size={16} color='#8047F8'/>
                CARTÃO DE CRÉDITO
              </PaymentOption>

              <PaymentOption
                active={ paymentOption === 'debit_card' }
                onClick={() => handlePaymentOption('debit_card')}
                value='Debit card'                
              >
                <Bank size={16} color='#8047F8'/>
                CARTÃO DE DÉBITO
              </PaymentOption>

              <PaymentOption
                active={ paymentOption === 'money' }
                onClick={() => handlePaymentOption('money')}
                value='Money'
              >
                <Money size={16} color='#8047F8'/>
                DINHEIRO
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

            <ConfirmOrderButton disabled={!totalItemsPrice} type="submit">
              Confirmar pedido
            </ConfirmOrderButton>
          </OrderContent>
        </OrderSummary>
      </form>
    </CheckoutContainer>
  )
}