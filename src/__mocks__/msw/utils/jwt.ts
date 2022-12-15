import { sign, verify } from 'jsonwebtoken';

const secret = 'secret';
const expiresIn = '30d';

export const AUTH_TOKEN_COOKIE_NAME = 'access-token';

export const REFRESH_TOKEN_COOKIE_NAME = 'refresh-token';

export const generateToken = (userId: string) => {
  return sign({ userId }, secret, { expiresIn });
};

interface JwtPayload {
  userId: string;
}

export const validateToken = (token: string): false | string => {
  try {
    const { userId } = verify(token, secret) as JwtPayload;
  
    return userId;
  } catch (err) {
    console.error('JWT Error!', err);
  }

  return false;
}