import { createContext, ReactNode, useState } from "react";

interface CoffeeOrderContextProps {
  children: ReactNode;
}

interface CoffeeInfo {
  name: string;
  price: number;
  imgSrc: string;
}

interface OrderItem extends CoffeeInfo {
  quantity: number;
}

interface CoffeeOrderContextType {
  coffeeOrder: OrderItem[],
  totalCoffeeItems: number;
  totalItemsPrice: number;
  addCoffeeToOrder: (c: CoffeeInfo) => void;
  removeCoffeeFromOrder: (name: string) => void;
}

export const CoffeeOrderContext = createContext({} as CoffeeOrderContextType);

export function CoffeeOrderContextProvider({ children }: CoffeeOrderContextProps){

  const [coffeeOrder, setCoffeeOrder] = useState<OrderItem[]>([]);
  const [totalCoffeeItems, setTotalCoffeeItems] = useState(0);
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);

  function addCoffeeToOrder({ name, imgSrc, price }: CoffeeInfo) {
    const newState = coffeeOrder;
    const orderItemIndex = newState.findIndex((coffee) => coffee.name === name);
    
    if(orderItemIndex < 0) {
      newState.push({ name, imgSrc, price, quantity: 1 });
    } else {
      newState[orderItemIndex].quantity += 1;
    }

    setTotalItemsPrice(state => state + price);
    setTotalCoffeeItems(state => state += 1);
    setCoffeeOrder(newState);
  }

  function removeCoffeeFromOrder( name: string ) {
    let itemPrice = 0
    const newState = coffeeOrder.filter(coffee => {
      if(coffee.name === name) {
        coffee.quantity -= 1;
        itemPrice = coffee.price;
        if(coffee.quantity === 0){
          return false
        }
      }
      
      return true;
    });

    setTotalItemsPrice(state => state - itemPrice);
    setTotalCoffeeItems(state => state -= 1);
    setCoffeeOrder(newState);
  }

  return (
    <CoffeeOrderContext.Provider
      value={{
        coffeeOrder,
        totalCoffeeItems,
        totalItemsPrice,
        addCoffeeToOrder,
        removeCoffeeFromOrder
      }}
    >
      {children}
    </CoffeeOrderContext.Provider>
  )
}
