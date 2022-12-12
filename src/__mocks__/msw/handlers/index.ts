import { AuthApiMock, authHandlers } from './api/auth';
import { TestApiMock, testHandlers } from './api/test';

export const handlers = [...testHandlers, ...authHandlers];

export { AuthApiMock, TestApiMock };
