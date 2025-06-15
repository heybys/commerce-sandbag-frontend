import React from 'react';

const SlowServerComponent = async () => {
  // 1) 인위적 딜레이 (예: 3초)
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // 2) 실제로는 fetch 를 할 수도 있고,
  //    테스트용으로 그냥 텍스트 리턴해도 OK!
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    cache: 'no-store', // 매번 새로 fetch 하도록
  }).then((res) => res.json());

  return (
    <div>
      <h2>데이터 로드 완료!</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default SlowServerComponent;
