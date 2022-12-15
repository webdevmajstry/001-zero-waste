import { User, Errors } from '@features/auth';
import {
  DefaultBodyType,
  ResponseComposition,
  rest,
  RestContext,
  RestRequest,
} from 'msw';
import { getMockRoute } from '@mocks/msw/utils';
import { generateToken, validateToken } from '@mocks/msw/utils/jwt';
import { userStorage } from '@mocks/msw/utils/userStorage';

const tokenNames = {
  accessToken: 'access-token',
  refreshToken: 'refresh-token',
};

type LoginBody = DefaultBodyType & {
  email: string;
  password: string;
};

export const AuthApiMock = {
  // POST /api/auth/login
  async login(
    req: RestRequest<LoginBody>,
    res: ResponseComposition<DefaultBodyType>,
    ctx: RestContext,
  ) {
    const { authToken } = req.cookies;

    if (authToken) {
      return res(
        ctx.status(400),
        ctx.json({
          message: Errors.AlreadyLoggedIn,
        }),
      );
    }

    const { email, password } = await req.json();

    const foundUser = userStorage
      .getAllUsers()
      .find((item) => item.email === email && item.password === password);

    if (!foundUser) {
      return res(
        ctx.status(401),
        ctx.json({
          message: Errors.UserNotFound,
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

  // GET /api/auth/me
  async me(
    req: RestRequest<DefaultBodyType>,
    res: ResponseComposition<DefaultBodyType>,
    ctx: RestContext,
  ) {
    const authToken = req.cookies[tokenNames.accessToken];

    if (!authToken) {
      return res(
        ctx.status(400),
        ctx.json({
          message: Errors.Unauthorized,
        }),
      );
    }

    const userId = validateToken(authToken);

    const foundUser = userStorage
      .getAllUsers()
      .find((item) => item.uuid === userId);

    if (!foundUser) {
      return res(
        ctx.status(400),
        ctx.json({
          message: Errors.Unauthorized,
        }),
      );
    }

    return res(ctx.status(200));
  },
};

export const authHandlers = [
  rest.post(getMockRoute('auth/login'), AuthApiMock.login),
  rest.get(getMockRoute('auth/me'), AuthApiMock.me),
];
