import { APIGatewayProxyResult } from 'aws-lambda';
import { HttpStatusCode } from './http-status-code.enum';

export class HttpResponse implements APIGatewayProxyResult {
  public readonly statusCode: number;
  public readonly body: string;
  public readonly headers: {
    'Content-Type': 'application/json';
    'Access-Control-Allow-Methods': '*';
    'Access-Control-Allow-Origin': '*';
  };

  constructor(statusCode: HttpStatusCode, body: unknown = {}) {
    this.statusCode = statusCode;
    this.body = JSON.stringify(body, null, 2);
  }
}
