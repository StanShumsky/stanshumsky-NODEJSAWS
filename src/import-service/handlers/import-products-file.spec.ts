import { HttpResponse, HttpStatusCode } from '@nodejsaws/shared';
import createEvent from '@serverless/event-mocks';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { simpleStrorageService } from '../ simple-storage.service';
import { handler as importProductsFile } from './import-products-file';

describe('importProductsFile', () => {
  describe('given id in pathParameters', () => {
    const mockEvent = createEvent('aws:apiGateway', {
      queryStringParameters: {
        name: 'test',
      },
    } as any);

    test('should return presigned url', async () => {
      simpleStrorageService.getSignedUrl = jest
        .fn()
        .mockReturnValue(Promise.resolve('test'));
      const result = await importProductsFile(mockEvent, null, null);

      expect(result).toEqual(
        new HttpResponse(HttpStatusCode.OK, { url: 'test' })
      );
    });
  });

  describe('given no name in queryStringParameters', () => {
    test('should return bad request error', async () => {
      const mockEvent = createEvent('aws:apiGateway', {
        queryStringParameters: null,
      } as any);
      simpleStrorageService.getSignedUrl = jest
        .fn()
        .mockReturnValue(Promise.reject(''));
      const response = (await importProductsFile(
        mockEvent,
        null,
        null
      )) as APIGatewayProxyResult;

      expect(response.statusCode).toEqual(HttpStatusCode.BAD_REQUEST);
    });
  });

  test('should return internal server error', async () => {
    simpleStrorageService.getSignedUrl = jest
      .fn()
      .mockReturnValue(Promise.reject(''));

    const result = (await importProductsFile(
      {} as APIGatewayProxyEvent,
      null,
      null
    )) as APIGatewayProxyResult;

    expect(result.statusCode).toEqual(HttpStatusCode.INTERNAL_SERVER_ERROR);
  });
});
