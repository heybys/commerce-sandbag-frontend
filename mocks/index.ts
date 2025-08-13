async function initMSW() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen({ onUnhandledRequest: 'bypass' });
    console.info('[MSW] Server mocking enabled (Node runtime)');
  } else {
    const { worker } = await import('./browser');
    await worker.start({ onUnhandledRequest: 'bypass' });
    console.log('[MSW] Browser mocking enabled');
  }
}

export { initMSW };
