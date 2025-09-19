export async function register() {
  // Node 런타임에서만 초기화 (Edge 번들에서는 이 블록이 제거됨)
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    try {
      const { initServerMSW } = await import('./mocks/server/init');
      initServerMSW();
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[MSW] Failed to initialize in instrumentation:', error);
      }
    }
  }
}
