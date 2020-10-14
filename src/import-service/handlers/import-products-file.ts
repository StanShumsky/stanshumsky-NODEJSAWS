import { HttpResponse, HttpStatusCode, validate } from '@nodejsaws/shared';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  APIGatewayProxyResult,
} from 'aws-lambda';
import * as Joi from 'joi';
import { simpleStrorageService } from '../ simple-storage.service';

const schema = Joi.object({
  name: Joi.string().required(),
});

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log({
    path: event.path,
    method: event.httpMethod,
    queryParams: event.queryStringParameters,
  });

  try {
    const { error, value } = validate(schema, event.queryStringParameters);

    if (error) {
      return new HttpResponse(HttpStatusCode.BAD_REQUEST, error);
    } else {
      const url = await simpleStrorageService.getSignedUrl(value.name);

      return new HttpResponse(HttpStatusCode.OK, { url });
    }
  } catch (error) {
    return new HttpResponse(HttpStatusCode.INTERNAL_SERVER_ERROR, error);
  }
};
