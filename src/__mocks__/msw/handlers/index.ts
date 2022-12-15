import { AuthApiMock, authHandlers } from './api/auth';
import { registerHandlers } from './api/register';
import { TestApiMock, testHandlers } from './api/test';

export const handlers = [...testHandlers, ...authHandlers, ...registerHandlers];

export { AuthApiMock, TestApiMock };
