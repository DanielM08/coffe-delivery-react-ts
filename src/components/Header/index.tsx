import { Actions, HeaderContainer, HeaderContent } from './styled'

import logoIgnite from '../../assets/1-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Home">
          <img src={logoIgnite} alt="" />
        </NavLink>
        <Actions>
          <div>
            <MapPin size={22} weight='fill'/>
            <text>Apodi, RN</text>
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
