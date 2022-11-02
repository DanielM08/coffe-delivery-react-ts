import {
  Actions,
  Cart,
  HeaderContainer,
  HeaderContent,
  ShoppingItemsCounter,
} from './styles'

import logoCoffeeDelivery from '../../assets/1-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeOrderContext } from '../../contexts/CoffeeOrderContext'

export function Header() {
  const { totalCoffeeItems } = useContext(CoffeeOrderContext)
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Home">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <Actions>
          <div>
            <MapPin size={22} weight="fill" />
            <span>Apodi, RN</span>
          </div>
          <Cart>
            <NavLink to="/checkout" title="Checkout" aria-current="page">
              <ShoppingCart size={22} weight="fill" />
            </NavLink>
            {!!totalCoffeeItems && (
              <ShoppingItemsCounter>{totalCoffeeItems}</ShoppingItemsCounter>
            )}
          </Cart>
        </Actions>
      </HeaderContent>
    </HeaderContainer>
  )
}
