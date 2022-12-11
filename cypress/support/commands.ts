import '@testing-library/cypress/add-commands';
import 'cypress-msw-interceptor';

import {
  DefaultBodyType,
  ResponseComposition,
  RestContext,
  RestRequest,
} from 'msw';

declare global {
  // eslint-disable-next-line unused-imports/no-unused-vars
  namespace Cypress {
    interface Chainable {
      interceptRequest(
        _method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE',
        _url: string,
        _handler: (
          _req: RestRequest,
          _res: ResponseComposition<DefaultBodyType>,
          _ctx: RestContext,
        ) => void,
        _alias: string,
      ): Chainable;
      waitForRequest: (_alias: string) => void;
    }
  }
}

export {};
