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
  addCoffeeToOrder: (c: CoffeeInfo) => void;
  removeCoffeeFromOrder: (name: string) => void;
}

export const CoffeeOrderContext = createContext({} as CoffeeOrderContextType);

export function CoffeeOrderContextProvider({ children }: CoffeeOrderContextProps){

  const [coffeeOrder, setCoffeeOrder] = useState<OrderItem[]>([]);

  function addCoffeeToOrder({ name, imgSrc, price }: CoffeeInfo) {
    const newState = coffeeOrder;
    const orderItemIndex = newState.findIndex((coffee) => coffee.name === name);
    
    if(orderItemIndex < 0) {
      setCoffeeOrder(state => {
        state.push({ name, imgSrc, price, quantity: 1 });
        return state;
      });
    } else {
      newState[orderItemIndex].quantity += 1;

      setCoffeeOrder(newState);
    }
  }

  function removeCoffeeFromOrder( name: string ) {
    const newState = coffeeOrder.map(coffee => {
      if(coffee.name === name){
        coffee.quantity -= 1;
      }
      
      return coffee
    });

    setCoffeeOrder(newState);
  }

  return (
    <CoffeeOrderContext.Provider
      value={{
        coffeeOrder,
        addCoffeeToOrder,
        removeCoffeeFromOrder
      }}
    >
      {children}
    </CoffeeOrderContext.Provider>
  )
}