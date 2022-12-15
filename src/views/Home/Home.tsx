import { getMockRoute } from '@mocks/msw/utils';
import FacebookIcon from '@svg/facebook.svg';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TempRegisterUser = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      uuid: uuidv4(),
      email,
      password,
      username: userName,
    };

    try {
      await axios.post('https://localhost:3000/auth/register', newUser);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex">
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => setUserName(e.target.value)}
          className="border-2 p-2"
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 p-2"
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border-2 p-2"
        />
      </div>
      <button type="submit" className="bg-primary-400 p-4">
        SUBMIT FORM
      </button>
    </form>
  );
};

export const Home = () => {
  const [backendFoo, setBackendFoo] = useState();

  useEffect(() => {
    // Request the mocked /api/test route and assign retrieved data to state variable
    fetch(getMockRoute('test?foo=bar'))
      .then((res) => res.json())
      .then(({ foo }) => setBackendFoo(foo));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-black text-primary-500">Hello World!</h1>
      <FacebookIcon />
      <TempRegisterUser />
      {backendFoo && <div>Foo from backend: {backendFoo}</div>}
    </div>
  );
};
