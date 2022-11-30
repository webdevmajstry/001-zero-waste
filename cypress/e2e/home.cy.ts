import { TestApiMock } from '@mocks/msw';
import { getMockedUrl } from '@mocks/msw/utils';

describe('Home page', () => {
  beforeEach(() => {
    // Create cypress-side request interceptor for /api/test* route
    cy.interceptRequest(
      'GET',
      getMockedUrl('test*'),
      TestApiMock.test,
      'testRequest',
    );
  });

  it('Renders "Hello world!"', () => {
    cy.visit('/');
    cy.findByText('Hello World!');
  });

  it('Fetches "foo" from fake backend', () => {
    cy.visit('/');
    cy.waitForRequest('@testRequest');
    cy.findByText('Foo from backend: bar');
  });
});
