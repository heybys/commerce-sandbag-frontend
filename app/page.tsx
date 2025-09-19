import NavigationLayout from '@components/layouts/navigation-layout';

export default function HomePage() {
  return (
    <NavigationLayout>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">알쏭달쏭한 쇼핑몰</h1>
            <p className="text-xl text-gray-600 mb-8">쓸데없는 것만 담았습니다</p>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-medium transition-colors">
              기부 시작하기
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">빠른 배송</h3>
                <p className="text-gray-600">당일 배송으로 빠르게</p>
              </div>
              <div className="bg-white p-8 rounded-xl text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">간편 결제</h3>
                <p className="text-gray-600">클릭 한 번으로 완료</p>
              </div>
              <div className="bg-white p-8 rounded-xl text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">안심 쇼핑</h3>
                <p className="text-gray-600">믿을 수 있는 품질</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </NavigationLayout>
  );
}
