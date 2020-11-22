import { HttpResponse, HttpStatusCode, IProduct } from '@nodejsaws/shared';
import { APIGatewayProxyEvent, APIGatewayProxyHandler } from 'aws-lambda';
import { productService } from '../product.service';

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
) => {
  console.log({ path: event.path, method: event.httpMethod });

  try {
    const products: IProduct[] = await productService.find();
    return new HttpResponse(HttpStatusCode.OK, products);
  } catch (error) {
    return new HttpResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, error);
  }
};
