import { TestApiMock } from '@mocks/msw';
import { getMockRoute } from '@mocks/msw/utils';

describe('Home page', () => {
  beforeEach(() => {
    // Create cypress-side request interceptor for /api/test* route
    cy.interceptRequest(
      'GET',
      getMockRoute('test*'),
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
