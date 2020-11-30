import { ForbiddenError, verifyAuthorizationHeader } from '@nodejsaws/shared';
import {
  APIGatewayAuthorizerResult,
  APIGatewayTokenAuthorizerEvent,
  APIGatewayTokenAuthorizerHandler,
} from 'aws-lambda';
import { policyService } from '../policy.service';

export const handler: APIGatewayTokenAuthorizerHandler = async (
  event: APIGatewayTokenAuthorizerEvent
): Promise<APIGatewayAuthorizerResult> => {
  console.log(event);

  try {
    await verifyAuthorizationHeader(event.authorizationToken);
    return policyService.generateAllow(event);
  } catch (error) {
    if (error instanceof ForbiddenError) {
      return policyService.generateDeny(event);
    }

    return error.message;
  }
};
