import React from 'react';
import dynamic from 'next/dynamic';
import CountComponent from './components/CountComponent';

// 서버 컴포넌트는 동적 import
const SlowServerComponent = dynamic(() => import('./SlowServerComponent'), {
  ssr: true,
  loading: () => <p>로딩 중… (fallback UI)</p>,
});

const WrapperComponent = () => {
  return (
    <div>
      <h1>서버 컴포넌트 로딩 테스트</h1>
      <div>
        <CountComponent />
        <SlowServerComponent />
      </div>
    </div>
  );
};

export default WrapperComponent;
