import { ApiUser } from "../handlers/types/user";

const USERS_STORAGE_KEY = 'db#users';

const defaultUsers: ApiUser[] = [
  {
    uuid: '00000000-0000-0000-0000-000000000000',
    email: 'test@test.com',
    password: 'password',
    username: 'Test User',
  },
];

if (!localStorage.getItem(USERS_STORAGE_KEY)) {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(defaultUsers))
}

const createUserStorage = (): {
  getAllUsers: () => ApiUser[];
  addUser: (user: ApiUser) => ApiUser;
  getUser: (userId: string) => null | ApiUser;
  removeUser: (userId: string) => null | ApiUser;
} => {
  let users: ApiUser[] = JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) as string);
  
  return {
    addUser(user) {
      users.push(user);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      return user;
    },
    getAllUsers() {
      return users;
    },
    getUser(userId) {
      const user = users.find((item) => item.uuid === userId);
      if (!user) {
        return null;
      }
      return user;
    },
    removeUser(userId) {
      const user = users.find((item) => item.uuid === userId);
      if (!user) {
        return null;
      }
      users = users.filter((item) => item.uuid === userId);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      return user;
    },
  }
};

export const userStorage = createUserStorage();