import * as faker from 'faker';
import { IProduct } from '../product.interface';

// function generateProduct() {
//   return {
//     id: faker.random.uuid(),
//     title: faker.commerce.productName(),
//     description: faker.commerce.productDescription(),
//     price: faker.commerce.price(),
//     imageUrl: faker.image.imageUrl(),
//   };
// }

export const productMock: IProduct[] = [
  {
    id: 'ecbfaf6c-f87a-418b-82af-2f5304445216',
    title: 'Sleek Steel Shirt',
    description:
      'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J',
    price: '483.00',
    imageUrl: 'http://placeimg.com/640/480',
  },
  {
    id: '553993bf-6ba0-46ad-b557-74e121749ca0',
    title: 'Handmade Frozen Chips',
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    price: '837.00',
    imageUrl: 'http://placeimg.com/640/480',
  },
  {
    id: '1c787d3e-c50f-417f-9f18-6beee5ec07d1',
    title: 'Handmade Fresh Bike',
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    price: '781.00',
    imageUrl: 'http://placeimg.com/640/480',
  },
  {
    id: 'f4af45b7-7442-4539-994c-b696c0c0bf7e',
    title: 'Sleek Wooden Hat',
    description:
      'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
    price: '255.00',
    imageUrl: 'http://placeimg.com/640/480',
  },
  {
    id: '6c095a2e-4f1d-41ce-9bfa-658ff3865791',
    title: 'Generic Metal Shirt',
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    price: '159.00',
    imageUrl: 'http://placeimg.com/640/480',
  },
  {
    id: '9cb70d2b-1a1f-437e-b767-02035d9bac45',
    title: 'Fantastic Plastic Chair',
    description:
      'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
    price: '271.00',
    imageUrl: 'http://placeimg.com/640/480',
  },
];
