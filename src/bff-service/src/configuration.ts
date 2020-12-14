import { ConfigFactory } from '@nestjs/config/dist/interfaces';

export const configFactory: ConfigFactory = () => ({
  services: {
    product: process.env.product,
    cart: process.env.cart,
  },
});
