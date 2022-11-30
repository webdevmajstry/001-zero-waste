const IS_BROWSER = typeof window !== 'undefined';

export const setupMocks = async () => {
  if (IS_BROWSER) {
    const { worker } = await import('./msw/browser');
    worker.start();
  } else {
    const { server } = await import('./msw/server');
    server.listen();
  }
};

export * from './msw/handlers';
