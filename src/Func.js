import React, { useState } from 'react';

export default function Func() {
  let [count, setCount] = useState(0);
  if (count < 1){
      count = 0
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(count = 0)}>reset</button>


    </div>
  );
}