import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { CoffeeOrderContext } from '../../../../contexts/CoffeeOrderContext'
import { priceFormatter } from '../../../../utils/formatter'
import {
  BuyAction,
  BuyContent,
  CoffeeCardContainer,
  CoffeeQuantityButton,
  Counter,
  Description,
  PriceContent,
  ShoppingButton,
  Tag,
  TagList,
} from './styles'

interface CardProps {
  name: string
  description: string
  tags: string[]
  price: number
  imgSrc: string
}

export function CoffeeCard({
  description,
  imgSrc,
  name,
  price,
  tags,
}: CardProps) {
  const { addCoffeeToOrder, removeCoffeeFromOrder, coffeeOrder } =
    useContext(CoffeeOrderContext)

  const [coffeeQuantity, setCoffeeQuantity] = useState(0)

  useEffect(() => {
    setCoffeeQuantity(
      coffeeOrder.find((coffee) => coffee.name === name)?.quantity ?? 0,
    )
  }, [coffeeOrder, name])

  function handleCoffeeDecrease() {
    if (coffeeQuantity > 0) {
      setCoffeeQuantity((state) => (state -= 1))

      removeCoffeeFromOrder(name)
    }
  }
  function handleCoffeeIncrease() {
    setCoffeeQuantity((state) => (state += 1))

    addCoffeeToOrder({ name, imgSrc, price })
  }

  return (
    <CoffeeCardContainer>
      <img src={imgSrc} alt="" />
      <TagList>
        {tags.map((tag) => {
          return (
            <Tag key={tag}>
              <strong>{tag}</strong>
            </Tag>
          )
        })}
      </TagList>
      <Description>
        <h3>{name}</h3>
        <p>{description}</p>
      </Description>
      <BuyContent>
        <PriceContent>
          <p>R$</p>
          <h3>{priceFormatter.format(price)}</h3>
        </PriceContent>
        <BuyAction>
          <Counter>
            <CoffeeQuantityButton onClick={handleCoffeeDecrease}>
              <Minus size={12} />
            </CoffeeQuantityButton>
            <span>{coffeeQuantity}</span>
            <CoffeeQuantityButton onClick={handleCoffeeIncrease}>
              <Plus size={12} />
            </CoffeeQuantityButton>
          </Counter>
          <ShoppingButton disabled>
            <ShoppingCart size={22} weight="fill" />
          </ShoppingButton>
        </BuyAction>
      </BuyContent>
    </CoffeeCardContainer>
  )
}
