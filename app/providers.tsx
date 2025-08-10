// app/providers.tsx
'use client';

import { useEffect } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_API_MOCKING !== 'enabled') {
      return;
    }

    async function start() {
      const { worker } = await import('@mocks/browser');
      await worker.start({ onUnhandledRequest: 'bypass' });
    }

    start().then(() => {
      console.log('[MSW] Browser mocking enabled');
    });
  }, []);
  return <>{children}</>;
}
