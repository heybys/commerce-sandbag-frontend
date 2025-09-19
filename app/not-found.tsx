import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-sm">
        <div className="text-2xl font-bold text-gray-900 mb-3">404</div>

        <h1 className="text-xl font-semibold text-gray-900 mb-3">페이지를 찾을 수 없어요</h1>

        <p className="text-gray-500 mb-8">주소를 다시 확인해주세요</p>

        <Link
          href="/"
          className="block w-full h-12 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
          홈으로 가기
        </Link>
      </div>
    </div>
  );
}
