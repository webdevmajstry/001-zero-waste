import { getMockedUrl } from '@mocks/msw/utils';
import FacebookIcon from '@svg/facebook.svg';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [backendFoo, setBackendFoo] = useState();

  useEffect(() => {
    // Request the mocked /api/test route and assign retrieved data to state variable
    fetch(getMockedUrl('test?foo=bar'))
      .then((res) => res.json())
      .then(({ foo }) => setBackendFoo(foo));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-black text-primary-500">Hello World!</h1>
      <FacebookIcon />
      {backendFoo && <div>Foo from backend: {backendFoo}</div>}
    </div>
  );
};
