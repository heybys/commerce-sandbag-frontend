export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.NODE_ENV === 'development') {
    const { server } = await import('@/mocks/server');
    let { mswInitialized } = await import('@/mocks/server');

    if (mswInitialized) {
      return;
    }

    server.listen({ onUnhandledRequest: 'warn' });
    mswInitialized = true;

    console.log('\x1b[32m ✓ \x1b[0m\x1b[33m[MSW]\x1b[0m Server mocking enabled (Node runtime)');
  }
}
