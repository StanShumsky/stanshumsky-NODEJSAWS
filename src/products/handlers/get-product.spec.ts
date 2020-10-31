import createEvent from '@serverless/event-mocks';
import { APIGatewayProxyResult } from 'aws-lambda';
import { HttpResponse } from '../../utils/http-response';
import { HttpStatusCode } from '../../utils/http-status-code.enum';
import { IProduct } from '../product.interface';
import { productService } from '../product.service';
import { handler as getProductById } from './get-product';

describe('getProductById', () => {
  describe('given id in pathParameters', () => {
    const mockEvent = createEvent('aws:apiGateway', {
      pathParameters: {
        id: 'test',
      },
    } as any);

    test('should return product by id', async () => {
      const mockProduct: IProduct = {
        id: 'test',
        title: 'test',
        description: 'test',
        price: '10.0',
        imageUrl: 'test.com',
      };
      productService.findOne = jest.fn().mockReturnValue(mockProduct);
      const result = await getProductById(mockEvent, null, null);

      expect(result).toEqual(new HttpResponse(HttpStatusCode.OK, mockProduct));
    });

    test('should return not found error', async () => {
      const mockEvent = createEvent('aws:apiGateway', {
        pathParameters: {
          id: 'test',
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
      null,
      null,
      null
    )) as APIGatewayProxyResult;

    expect(result.statusCode).toEqual(HttpStatusCode.INTERNAL_SERVER_ERROR);
  });
});
