import { Intro } from "./components/Intro";
import { CoffePanel, HomeContainer } from "./styles";
import { CoffeeCard } from "./components/CoffeeCard";

import expresso from "../../assets/expresso.svg";
import expressoAmericano from '../../assets/americano.svg';
import expressoCremoso from '../../assets/expresso-cremoso.svg';
import expressoGelado from '../../assets/cafe-gelado.svg';
import cafeComLeite from '../../assets/cafe-com-leite.svg';
import latte from '../../assets/latte.svg';
import capuccino from '../../assets/capuccino.svg';
import macchiato from '../../assets/macchiato.svg';
import mocaccino from '../../assets/mochaccino.svg';
import chocolateQuente from '../../assets/chocolate-quente.svg';
import cubano from '../../assets/cubano.svg';
import havaiano from '../../assets/havaiano.svg';
import arabe from '../../assets/arabe.svg';
import irlandes from '../../assets/irlandes.svg';


interface CardInfo {
  name: string;
  description: string;
  tags: string[];
  price: number;
  imgSrc: string;
}

const CoffeeCards = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['Tradicional'],
    price: 9.90,
    imgSrc: expresso,
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['Tradicional'],
    price: 9.90,
    imgSrc: expressoAmericano,
  },
  {
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['Tradicional'],
    price: 9.90,
    imgSrc: expressoCremoso,
  },
  {
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['Tradicional', 'Gelado'],
    price: 9.90,
    imgSrc: expressoGelado,
  },
  {
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.90,
    imgSrc: cafeComLeite,
  },
  {
    name: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.90,
    imgSrc: latte,
  },
  {
    name: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.90,
    imgSrc: capuccino,
  },
  {
    name: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['Tradicional', 'Com leite'],
    price: 9.90,
    imgSrc: macchiato,
  },
  {
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['Tradicional', 'Com Leite'],
    price: 9.90,
    imgSrc: mocaccino,
  },
  {
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['Especial', 'Com Leite'],
    price: 9.90,
    imgSrc: chocolateQuente,
  },
  {
    name: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    price: 9.90,
    imgSrc: cubano,
  },
  {
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['Especial'],
    price: 9.90,
    imgSrc: havaiano,
  },
  {
    name: 'Árabe',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['Especial'],
    price: 9.90,
    imgSrc: arabe,
  },
  {
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['Especial', 'Alcoólico'],
    price: 9.90,
    imgSrc: irlandes,
  }
]

export function Home(){
  return (
    <HomeContainer>
      <Intro />
      <h2>Nossos Cafés</h2>
      <CoffePanel>
        {
          CoffeeCards.map(item => 
            <CoffeeCard 
              description={item.description}
              imgSrc={item.imgSrc}
              name={item.name}
              price={item.price}
              tags={item.tags}
              key={item.name}
            />
          )
        }
      </CoffePanel>
    </HomeContainer>
  )
}