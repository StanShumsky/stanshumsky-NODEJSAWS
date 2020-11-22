import * as Joi from 'joi';

export const productSchema = Joi.object({
  title: Joi.string().max(255).required(),
  description: Joi.string().max(2083).required(),
  price: Joi.number().min(0).required(),
  count: Joi.number().min(0).required(),
});
