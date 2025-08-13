import React from 'react';
import './global.css';
import { MockInitializer } from '@mocks/MockInitializer';
import { initMSW } from '@mocks/index';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  await initMSW();
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {process.env.NODE_ENV === 'development' && <MockInitializer />}
        {children}
      </body>
    </html>
  );
}
