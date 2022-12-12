import { Errors } from '@features/auth';
import { getMockRoute } from '@mocks/msw/utils';
import { userStorage } from '@mocks/msw/utils/userStorage';
import {
  DefaultBodyType,
  ResponseComposition,
  rest,
  RestContext,
  RestRequest,
} from 'msw';

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

    return res(
      ctx.status(201),
      ctx.json({
        name,
        email,
        password,
      }),
    );
  },
};

export const registerHandlers = [
  rest.post(getMockRoute('auth/register'), RegisterApiMock.register),
];
