import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';
import * as Joi from 'joi';
import { HttpResponse } from '../../utils/http-response';
import { HttpStatusCode } from '../../utils/http-status-code.enum';
import { validate } from '../../utils/validate';
import { IProduct } from '../product.interface';
import { productService } from '../product.service';

const schema = Joi.object({
  title: Joi.string().max(255).required(),
  description: Joi.string().max(2083).required(),
  price: Joi.number().min(0).required(),
  count: Joi.number().min(0).required(),
});

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log({ path: event.path, method: event.httpMethod, body: event.body });

  try {
    const { error, value } = validate(schema, JSON.parse(event.body));
    if (error) {
      return new HttpResponse(HttpStatusCode.BAD_REQUEST, error);
    } else {
      const product: IProduct = await productService.create(value);
      return new HttpResponse(HttpStatusCode.OK, product);
    }
  } catch (error) {
    return new HttpResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, error);
  }
};
