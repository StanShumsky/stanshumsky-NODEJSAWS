import { HttpResponse, HttpStatusCode } from '@nodejsaws/shared';
import createEvent from '@serverless/event-mocks';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { mockProduct } from '../mock/product.mock';
import { IProduct } from '../product.interface';
import { productService } from '../product.service';
import { handler as getProductById } from './get-product';

describe('getProductById', () => {
  describe('given id in pathParameters', () => {
    const mockEvent = createEvent('aws:apiGateway', {
      pathParameters: {
        id: 'a21afdd4-8621-4b0d-bac3-c21a8475ad30',
      },
    } as any);

    test('should return product by id', async () => {
      const product: IProduct = mockProduct({
        id: 'a21afdd4-8621-4b0d-bac3-c21a8475ad30',
      });

      productService.findOne = jest.fn().mockReturnValue(product);
      const result = await getProductById(mockEvent, null, null);

      expect(result).toEqual(new HttpResponse(HttpStatusCode.OK, product));
    });

    test('should return not found error', async () => {
      const mockEvent = createEvent('aws:apiGateway', {
        pathParameters: {
          id: 'a21afdd4-8621-4b0d-bac3-c21a8475ad30',
        },
      } as any);
      productService.findOne = jest.fn().mockReturnValue(null);
      const result = (await getProductById(
        mockEvent,
        null,
        null
      )) as APIGatewayProxyResult;

      expect(result.statusCode).toEqual(HttpStatusCode.NOT_FOUND);
    });
  });

  describe('given no id in pathParameters', () => {
    test('should return bad request error', async () => {
      const mockEvent = createEvent('aws:apiGateway', {
        pathParameters: {},
      } as any);
      const response = (await getProductById(
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
    const result = (await getProductById(
      {} as APIGatewayProxyEvent,
      null,
      null
    )) as APIGatewayProxyResult;

    expect(result.statusCode).toEqual(HttpStatusCode.INTERNAL_SERVER_ERROR);
  });
});
