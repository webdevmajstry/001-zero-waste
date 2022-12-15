export enum Errors {
  AlreadyLoggedIn = 'ALREADY_LOGGED_IN',
  UserNotFound = 'USER_NOT_FOUND',
  Unauthorized = 'UNAUTHORIZED',
}

export const MESSAGES = {
  [Errors.AlreadyLoggedIn]: 'Jesteś już zalogowany!',
  [Errors.UserNotFound]:
    'Nie znaleziono konta z takim adresem e-mail lub hasłem. Spróbuj ponownie.',
  [Errors.Unauthorized]: 'Nie jesteś zalogowany.',
};
