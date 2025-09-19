import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link href="/" className="group">
            <span
              className="text-2xl font-bold text-transparent bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 bg-clip-text hover:from-red-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 transform group-hover:scale-105"
              style={{
                fontFamily: "'Black Han Sans', sans-serif",
                textShadow: '0 0 10px rgba(239, 68, 68, 0.3)',
              }}>
              알쏭달숑핑몰
            </span>
          </Link>

          {/* 메뉴 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              홈
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              소개
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              상품
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              카테고리
            </Link>
            <Link href="/cart" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              장바구니
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button className="md:hidden p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
