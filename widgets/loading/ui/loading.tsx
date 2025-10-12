import { HTMLAttributes } from 'react';

interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
  loadingText?: string;
  description?: string;
}

export const Loading = ({ loadingText = '로딩 중', description = '잠시만 기다려 주세요...' }: LoadingProps) => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-gray-400 rounded-full animate-spin mx-auto"
            style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
        </div>

        {/* Loading Text */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{loadingText}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
