import { HttpResponse, HttpStatusCode } from '@nodejsaws/shared';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { mockProduct } from '../mock/product.mock';
import { productService } from '../product.service';
import { handler as getProductList } from './get-product-list';

describe('getProductList', () => {
  test('should return products', async () => {
    const products = [mockProduct(), mockProduct()];
    productService.find = jest.fn().mockReturnValue(products);
    const result = await getProductList({} as APIGatewayProxyEvent, null, null);

    expect(result).toEqual(new HttpResponse(HttpStatusCode.OK, products));
  });

  test('should return internal server error', async () => {
    productService.find = jest.fn(() => {
      throw new Error('');
    });
    const result = (await getProductList(
      {} as APIGatewayProxyEvent,
      null,
      null
    )) as APIGatewayProxyResult;

    expect(result.statusCode).toEqual(HttpStatusCode.INTERNAL_SERVER_ERROR);
  });
});
