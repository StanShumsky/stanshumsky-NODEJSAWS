import { DomainError } from './errors';

export interface TokenPayload {
  username?: string;
  password?: string;
}

export class UnauthorizedError extends DomainError {
  constructor() {
    super('Unauthorized');
  }
}

export class ForbiddenError extends DomainError {
  constructor() {
    super('Forbidden');
  }
}

export class InvalidTokenError extends DomainError {
  constructor() {
    super('Invalid token');
  }
}

export function decodeToken(token: string): TokenPayload {
  try {
    const [username, password] = Buffer.from(token, 'base64')
      .toString('utf-8')
      .split(':');

    return { username, password };
  } catch {
    throw new InvalidTokenError();
  }
}

export async function verifyToken(token: string): Promise<TokenPayload> {
  const { username, password } = decodeToken(token);

  if (username && password) {
    const userPassword = process.env[username.toLowerCase()];

    if (userPassword && password === userPassword) {
      return { username, password };
    }
  }

  throw new ForbiddenError();
}

export function isToken(token: string): boolean {
  return /Basic\s[A-Za-z0-9-_=]*$/.test(token);
}

export async function verifyAuthorizationHeader(
  token: string
): Promise<TokenPayload> {
  if (isToken(token)) {
    token = token.replace(/Basic\s/, '');
    return await verifyToken(token);
  }

  throw new UnauthorizedError();
}
