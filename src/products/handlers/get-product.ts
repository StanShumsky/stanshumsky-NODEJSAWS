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

const schema = Joi.object({ id: Joi.string().required() });

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const { error, value } = validate(schema, event.pathParameters);

    if (error) {
      return new HttpResponse(HttpStatusCode.BAD_REQUEST, error);
    } else {
      const product: IProduct = await productService.findOne(value.id);

      if (product) {
        return new HttpResponse(HttpStatusCode.OK, product);
      }

      return new HttpResponse(HttpStatusCode.NOT_FOUND);
    }
  } catch (error) {
    return new HttpResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, error);
  }
};
