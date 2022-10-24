import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { 
  AddressContent, 
  AddressDescription, 
  AddressHeader, 
  CheckoutContainer, 
  FormContent, 
  Title 
} from "./styles";

export function Checkout(){
  return (
    <CheckoutContainer>
      <FormContent>
        <Title>
          Complete seu pedido
        </Title>

        <AddressContent>
          <AddressHeader>
            <MapPin size={22} color='#C47F17'/>
            <AddressDescription>
              <h3>Endereço de Entrega</h3>  
              <text>Informe o engereço onde deseja receber seu pedido</text>
            </AddressDescription>          
          </AddressHeader>
          <form>
            <input alt="CEP" placeholder="CEP" required />
            <input alt="RUA" placeholder="Rua" required />
            <div>
              <input alt="Número" placeholder="Número" />
              <input alt="Complemento" placeholder="Complemento" />
            </div>
            <div>
              <input alt="Bairro" placeholder="Bairro" required />
              <input alt="Cidade" placeholder="Cidade" required/>
              <input alt="UF" placeholder="UF" required/>
            </div>
          </form>
        </AddressContent>


        <div>
          <header>
            <CurrencyDollar size={22}/>
            <h3>Pagamento</h3>
            <text>O pagamento é feito na entrega. Escola a forma que deseja pagar</text>
          </header>

          <div>
            <button>
              <CreditCard size={22}/>
              CARTÃO DE CRÉDITO
            </button>
            <button>
              <Money size={22}/>
              CARTÃO DE DÉBITO
            </button>
            <button>
              <Bank size={22}/>
              DINHEIRO
            </button>
          </div>
        </div>
      </FormContent>
      <div>
        <Title>Cafés selecionados</Title>
        <div></div>
      </div>
    </CheckoutContainer>
  )
}