// data/products.js
// ЗАГРУЗИТЬ СЮДА ФОТКИ ИЗ ПИНТЕРЕСТ АДЛЯ ТОВАРОВ
import pryzhaImg from '../images/pryazha.png';
import ringImg from '../images/flowring.png';
import podveskaImg from '../images/podveska.png';
import braceletImg from '../images/bracelet.png';
import nightlampImg from '../images/nightlamp.png';
import tapkidImg from '../images/tapki.png';
import bonesImg from '../images/bones.png'
import biserImg from '../images/biser.png'
import shurupImg from '../images/shurups.png'
import tapeImg from '../images/tape.png'

export const products = [
  { 
    id: 1, 
    name: "Пряжа 100% шерсть", 
    price: 50, 
    category: "materials", 
    description: "Пряжа ALASKA (100% шерсть 50 г 70 м) ", 
    img: pryzhaImg 
  },
  { 
    id: 2, 
    name: "Кольцо незабудка", 
    price: 30, 
    category: "accessories", 
    description: "Кольцо серебряное с цветком-незабудкой из стекла", 
    img: ringImg 
  },
  { 
    id: 3, 
    name: "Подвеска тюленчики", 
    price: 30, 
    category: "accessories", 
    description: "Подвеска на шею тюленчики, кмоплект из 2х штук", 
    img: podveskaImg 
  },
  { 
    id: 4, 
    name: "Браслет", 
    price: 25, 
    category: "accessories", 
    description: "Браслет на руку со звездами (несколько в 1)", 
    img: braceletImg 
  },
  { 
    id: 5, 
    name: "Ночник", 
    price: 100, 
    category: "trinkets", 
    description: "Ночная лампа с котиками, теплый мягкий свет", 
    img: nightlampImg 
  },
  { 
    id: 6, 
    name: "Тапки", 
    price: 250, 
    category: "trinkets", 
    description: "Тапки раки красные из Японии", 
    img: tapkidImg 
  },
  { 
    id: 7, 
    name: "Кости", 
    price: 80, 
    category: "materials", 
    description: "Кости натуральные (не человеческие)", 
    img: bonesImg 
  },
  { 
    id: 8, 
    name: "Бисер", 
    price: 20, 
    category: "materials", 
    description: "Бисер для браслетов/подвесок/рукоделия", 
    img: biserImg 
  },
  { 
    id: 9, 
    name: "Шурупы", 
    price: 10, 
    category: "materials", 
    description: "Шурупы для фурниторы 2x6мм бронза", 
    img: shurupImg 
  },
  { 
    id: 10, 
    name: "Декоративный скотч", 
    price: 30, 
    category: "materials", 
    description: "Односторонний декоративный скотч 2смx5м", 
    img: tapeImg 
  },
];