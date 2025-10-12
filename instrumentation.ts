export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { server } = await import('@mocks/server');

    server.listen({ onUnhandledRequest: 'warn' });
    console.log('\x1b[32m ✓ \x1b[0m\x1b[33m[MSW]\x1b[0m Server mocking enabled (Node runtime)');
  }
}
