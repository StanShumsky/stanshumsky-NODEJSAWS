import { HttpResponse, HttpStatusCode } from '@nodejsaws/shared';
import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  Callback,
  Context,
} from 'aws-lambda';
import { readFileSync } from 'fs';
import { resolve } from 'path';

import { setup } from 'swagger-ui-aws-apigateway';

const document = readFileSync(resolve(__dirname, '../../openapi.yml'));
const swaggerHandler = setup(document);

export const handler: APIGatewayProxyHandler = (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback
): void => {
  if (event.path.includes('/api-docs')) {
    swaggerHandler(event, context, callback);
  } else {
    callback(null, new HttpResponse(HttpStatusCode.NOT_FOUND));
  }
};
