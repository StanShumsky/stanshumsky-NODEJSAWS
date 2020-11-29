import {
  HttpResponse,
  HttpStatusCode,
  IProduct,
  validate,
} from '@nodejsaws/shared';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';
import { productSchema } from '../product.schema';
import { productService } from '../product.service';

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log({ path: event.path, method: event.httpMethod, body: event.body });

  try {
    const { error, value } = validate(productSchema, JSON.parse(event.body));
    if (error) {
      return new HttpResponse(HttpStatusCode.BAD_REQUEST, error);
    } else {
      const product: IProduct = await productService.create(value);
      return new HttpResponse(HttpStatusCode.CREATED, product);
    }
  } catch (error) {
    return new HttpResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, error);
  }
};
