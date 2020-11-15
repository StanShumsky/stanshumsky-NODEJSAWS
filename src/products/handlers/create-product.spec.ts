import createEvent from '@serverless/event-mocks';
import { APIGatewayProxyResult } from 'aws-lambda';
import { HttpResponse } from '../../utils/http-response';
import { HttpStatusCode } from '../../utils/http-status-code.enum';
import { mockProduct } from '../mock/product.mock';
import { productService } from '../product.service';
import { handler as createProduct } from './create-product';

describe('createProduct', () => {
  describe('given valid product in body', () => {
    const product = mockProduct({ id: 'a21afdd4-8621-4b0d-bac3-c21a8475ad30' });
    const mockEvent = createEvent('aws:apiGateway', {
      body: JSON.stringify({
        title: product.title,
        description: product.description,
        count: product.count,
        price: product.price,
      }),
    } as any);

    test('should create product', async () => {
      productService.create = jest.fn().mockReturnValue(product);
      const result = await createProduct(mockEvent, null, null);

      expect(result).toEqual(new HttpResponse(HttpStatusCode.OK, product));
    });
  });

  describe('given not valid product in body ', () => {
    test('should return bad request error', async () => {
      const mockEvent = createEvent('aws:apiGateway', {
        body: JSON.stringify({}),
      } as any);
      const response = (await createProduct(
        mockEvent,
        null,
        null
      )) as APIGatewayProxyResult;

      expect(response.statusCode).toEqual(HttpStatusCode.BAD_REQUEST);
    });
  });

  test('should return internal server error', async () => {
    productService.findOne = jest.fn(() => {
      throw new Error('');
    });
    const result = (await createProduct(
      null,
      null,
      null
    )) as APIGatewayProxyResult;

    expect(result.statusCode).toEqual(HttpStatusCode.INTERNAL_SERVER_ERROR);
  });
});
