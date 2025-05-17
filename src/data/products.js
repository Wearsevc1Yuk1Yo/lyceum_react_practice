// data/products.js
// ЗАГРУЗИТЬ СЮДА ФОТКИ ИЗ ПИНТЕРЕСТ АДЛЯ ТОВАРОВ
import pryzhaImg from '../images/pryazha.png';
import ringImg from '../images/flowring.png';
import podveskaImg from '../images/podveska.png';
import braceletImg from '../images/bracelet.png';
import nightlampImg from '../images/nightlamp.png';
import tapkidImg from '../images/tapki.png';

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
];