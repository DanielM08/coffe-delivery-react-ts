import { Actions, HeaderContainer, HeaderContent } from './styles'

import logoCoffeeDelivery from '../../assets/1-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Home">
          <img src={logoCoffeeDelivery} alt="" />
        </NavLink>
        <Actions>
          <div>
            <MapPin size={22} weight='fill'/>
            <span>Apodi, RN</span>
          </div>
          <nav>
            <NavLink to="/checkout" title="Checkout">
              <ShoppingCart size={22} weight='fill' />
            </NavLink>
          </nav>
        </Actions>
      </HeaderContent>
    </HeaderContainer>
  )
}
