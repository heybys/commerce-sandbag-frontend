'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Error occurred:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <div className="flex items-center justify-center gap-3 mb-3">
          <h1 className="text-xl font-semibold text-gray-900">문제가 발생했어요</h1>
          <button
            onClick={reset}
            className="p-1 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
            title="다시 시도">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
        </div>

        <p className="text-gray-500 mb-8">잠시 후 다시 시도해주세요</p>

        <button
          onClick={() => (window.location.href = '/')}
          className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors">
          홈으로 가기
        </button>
      </div>
    </div>
  );
}
