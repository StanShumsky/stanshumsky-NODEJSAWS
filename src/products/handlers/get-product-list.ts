import { APIGatewayProxyHandler } from 'aws-lambda';
import { HttpResponse } from '../../utils/http-response';
import { HttpStatusCode } from '../../utils/http-status-code.enum';
import { IProduct } from '../product.interface';
import { productService } from '../product.service';

export const handler: APIGatewayProxyHandler = async () => {
  try {
    const products: IProduct[] = await productService.find();
    return new HttpResponse(HttpStatusCode.OK, products);
  } catch (error) {
    return new HttpResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, error);
  }
};
