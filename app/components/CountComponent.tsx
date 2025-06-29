'use client';

import React, { useState } from 'react';

const CountComponent = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <title>CSR Component!!</title>
      <div>
        <div>{process.env.NEXT_PUBLIC_COUNT_COMPONENT_DESCRIPTION}</div>
      </div>
      <button
        onClick={() => {
          console.log('cur : ' + count);
          setCount(count + 1);
        }}>
        click
      </button>
      <div>{count}</div>
    </div>
  );
};

export default CountComponent;
