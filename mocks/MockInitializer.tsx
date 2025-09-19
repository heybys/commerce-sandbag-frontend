'use client';
import { useEffect, useRef } from 'react';

export const MockInitializer = () => {
  const initializedRef = useRef(false);
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      // 브라우저 전용 엔트리에서 동적 임포트
      import('./browser/init').then(({ initBrowserMSW }) => initBrowserMSW());
    }
  }, []);
  return null;
};
