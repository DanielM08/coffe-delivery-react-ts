import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeOrderContext } from '../../../contexts/CoffeeOrderContext'
import { currencyFormatter } from '../../../utils/formatter'
import {
  Actions,
  CoffeeCardContainer,
  CoffeeQuantityButton,
  Counter,
  Details,
  Info,
  RemoveItemButton,
} from './styles'

interface CoffeeCardProps {
  name: string
  imgSrc: string
  price: number
  quantity: number
}

export function CoffeeCard({ imgSrc, name, price, quantity }: CoffeeCardProps) {
  const { addCoffeeToOrder, removeCoffeeFromOrder } =
    useContext(CoffeeOrderContext)

  function handleCoffeeDecrease() {
    removeCoffeeFromOrder(name)
  }
  function handleCoffeeIncrease() {
    addCoffeeToOrder({ name, imgSrc, price })
  }

  return (
    <CoffeeCardContainer>
      <Info>
        <img src={imgSrc} alt="" />
        <Details>
          <p>{name}</p>
          <Actions>
            <Counter>
              <CoffeeQuantityButton
                onClick={handleCoffeeDecrease}
                type="button"
              >
                <Minus size={12} />
              </CoffeeQuantityButton>
              <span>{quantity}</span>
              <CoffeeQuantityButton
                onClick={handleCoffeeIncrease}
                type="button"
              >
                <Plus size={12} />
              </CoffeeQuantityButton>
            </Counter>

            <RemoveItemButton type="button">
              <Trash size={16} color="#8047F8" />
              <p>REMOVER</p>
            </RemoveItemButton>
          </Actions>
        </Details>
      </Info>
      <strong>{currencyFormatter.format(price)}</strong>
    </CoffeeCardContainer>
  )
}
