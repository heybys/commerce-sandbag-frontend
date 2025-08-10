// instrumentation.ts
export async function register() {
  if (process.env.NEXT_RUNTIME !== 'nodejs') {
    return;
  }
  if (process.env.NEXT_PUBLIC_API_MOCKING !== 'enabled') {
    return;
  }

  const { server } = await import('@mocks/server');
  server.listen({ onUnhandledRequest: 'bypass' });
  console.info('[MSW] Server mocking enabled (Node runtime)');
}
