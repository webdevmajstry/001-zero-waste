import { Errors, User } from '@features/auth';
import { getMockRoute } from '@mocks/msw/utils';
import { generateToken } from '@mocks/msw/utils/jwt';
import { userStorage } from '@mocks/msw/utils/userStorage';
import {
  DefaultBodyType,
  ResponseComposition,
  rest,
  RestContext,
  RestRequest,
} from 'msw';

const tokenNames = {
  accessToken: 'access-token',
  refreshToken: 'refresh-token',
};

type RegisterBody = DefaultBodyType & {
  username: string;
  email: string;
  password: string;
};

export const RegisterApiMock = {
  //Post /api/auth/register

  async register(
    req: RestRequest<RegisterBody>,
    res: ResponseComposition<DefaultBodyType>,
    ctx: RestContext,
  ) {
    const { name, email, password } = await req.json();

    const foundUser = userStorage
      .getAllUsers()
      .find((item) => item.email === email);

    if (foundUser) {
      return res(
        ctx.status(401),
        ctx.json({
          message: Errors.EmailIsRepeated,
        }),
      );
    }

    const token = generateToken(foundUser.uuid);

    return res(
      ctx.status(201),
      ctx.cookie(tokenNames.accessToken, token),
      ctx.json({
        accessToken: token,
      }),
    );
  },
};

export const registerHandlers = [
  rest.post(getMockRoute('auth/register'), RegisterApiMock.register),
];
