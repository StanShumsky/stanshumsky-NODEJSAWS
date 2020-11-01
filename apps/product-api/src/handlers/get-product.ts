import { IProduct, productService } from '@sls/feature-products';
import { HttpResponse, HttpStatusCode } from '@sls/http';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  Context,
} from 'aws-lambda';
import * as Joi from 'joi';

const schema = Joi.object({ id: Joi.string().required() });

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  try {
    const { error, value } = productService.validate(
      schema,
      event.pathParameters
    );

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
