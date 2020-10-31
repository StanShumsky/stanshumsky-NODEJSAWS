import {
  APIGatewayProxyEvent,
  APIGatewayProxyHandler,
  Callback,
  Context,
} from 'aws-lambda';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { HttpResponse } from 'src/utils/http-response';
import { HttpStatusCode } from 'src/utils/http-status-code.enum';
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
