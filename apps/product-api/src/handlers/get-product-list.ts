import { IProduct, productService } from '@sls/feature-products';
import { HttpResponse, HttpStatusCode } from '@sls/http';
import { APIGatewayProxyHandler } from 'aws-lambda';

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const products: IProduct[] = await productService.find();
    return new HttpResponse(HttpStatusCode.OK, products);
  } catch (error) {
    return new HttpResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, error);
  }
};
