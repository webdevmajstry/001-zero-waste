import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

async function prepare(): Promise<any> {
  if (process.env.NEXT_PUBLIC_API_MOCK === 'true') {
    const { setupMocks } = await import('../__mocks__');
    return setupMocks();
  }

  return;
}

export default function App({ Component, pageProps }: AppProps) {
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    prepare().then(() => setMounted(true));
  }, []);

  if (!isMounted) {
    return <p>Loading...</p>;
  }

  return <Component {...pageProps} />;
}
