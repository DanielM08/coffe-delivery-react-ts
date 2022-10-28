import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { priceFormatter } from "../../../../utils/formatter";
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
  TagList
} from "./styles";

interface CardProps {
  name: string;
  description: string;
  tags: string[];
  price: number;
  imgSrc: string;
}

export function CoffeeCard({ description, imgSrc, name, price, tags }: CardProps){
  return (
    <CoffeeCardContainer>
      <img src={imgSrc}/>
      <TagList>
        {
          tags.map((tag) => {
            return (
              <Tag key={tag}>      
                <strong>{tag}</strong>
              </Tag>
            )
          })
        }
      </TagList>
      <Description>
        <h3>{name}</h3>
        <text>{description}</text>          
      </Description>
      <BuyContent>
        <PriceContent>
          <text>R$</text>
          <h3>{priceFormatter.format(price)}</h3>
        </PriceContent>
        <BuyAction>
          <Counter>
            <CoffeeQuantityButton>
              <Minus size={12}/>
            </CoffeeQuantityButton>
            <text>1</text>
            <CoffeeQuantityButton>
              <Plus size={12}/>
            </CoffeeQuantityButton>
          </Counter>
          <ShoppingButton>
            <ShoppingCart size={22} weight="fill"/>
          </ShoppingButton>          
        </BuyAction>
      </BuyContent>
    </CoffeeCardContainer>
  )
}