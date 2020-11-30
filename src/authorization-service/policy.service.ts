import { APIGatewayTokenAuthorizerEvent } from 'aws-lambda';

export enum PolicyStatementEffect {
  Allow = 'Allow',
  Deny = 'Deny',
}

export class PolicyService {
  private generatePolicy(
    event: APIGatewayTokenAuthorizerEvent,
    effect: PolicyStatementEffect
  ) {
    return {
      principalId: event.authorizationToken,
      policyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Action: 'execute-api:Invoke',
            Effect: effect,
            Resource: event.methodArn,
          },
        ],
      },
    };
  }

  public generateAllow(event: APIGatewayTokenAuthorizerEvent) {
    return this.generatePolicy(event, PolicyStatementEffect.Allow);
  }

  public generateDeny(event: APIGatewayTokenAuthorizerEvent) {
    return this.generatePolicy(event, PolicyStatementEffect.Deny);
  }
}

export const policyService = new PolicyService();
