import { authHandlers, AuthApiMock } from './api/auth';
import { testHandlers, TestApiMock } from './api/test';

export const handlers = [...testHandlers, ...authHandlers];

export { AuthApiMock, TestApiMock };