'use client';

import React, { useState } from 'react';

const CountComponent = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <button
        onClick={() => {
          console.log('cur : ' + count);
          setCount(count + 1);
        }}>
        click
      </button>
      <div>{count}</div>
    </>
  );
};

export default CountComponent;
