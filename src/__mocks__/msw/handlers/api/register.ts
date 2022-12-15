import { Errors } from '@features/auth';
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
};

type RegisterPostBody = DefaultBodyType & {
  uuid: string;
  email: string;
  password: string;
  username: string;
};

export const RegisterApiMock = {
  // POST https://localhost:3000/auth/register

  async register(
    req: RestRequest<RegisterPostBody>,
    res: ResponseComposition<DefaultBodyType>,
    ctx: RestContext,
  ) {
    const newUser = await req.json();

    const existingUserEmail = userStorage
      .getAllUsers()
      .find((user) => user.email === newUser.email);

    if (existingUserEmail) {
      return res(
        ctx.status(400),
        ctx.json({
          message: Errors.EmailIsRepeated,
        }),
      );
    }

    userStorage.addUser(newUser);

    const token = generateToken(newUser.uuid);

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
  rest.post('https://localhost:3000/auth/register', RegisterApiMock.register),
];
