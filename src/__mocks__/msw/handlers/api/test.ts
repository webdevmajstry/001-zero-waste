import { getMockRoute } from '@mocks/msw/utils';
import {
  DefaultBodyType,
  ResponseComposition,
  rest,
  RestContext,
  RestRequest,
} from 'msw';

export const TestApiMock = {
  test(
    req: RestRequest,
    res: ResponseComposition<DefaultBodyType>,
    ctx: RestContext,
  ) {
    const foo = req.url.searchParams.get('foo') ?? 0;

    return res(
      ctx.json({
        foo,
      }),
    );
  },
};

export const testHandlers = [rest.get(getMockRoute('test'), TestApiMock.test)];
