import React, { useState } from 'react';
import ChildB from './ChildB';

// React.memo는 함수형 컴포넌트를 메모리에 저장해주는 역할을 함(메모이제이션) -> 불필요한 리렌더링을 막을 수 있음
// -> 컴포넌트를 메모리에 저장했기 때문에 App 컴포넌트가 리렌더링 된다고 하더라도 ChildA 컴포넌트는 리렌더링이 되지 않음
// -> ChildA 컴포넌트에 전달된 props나 데이터가 변경된 것이 없기 때문에 메모리에 저장되어져 있는 값을 그대로 사용하기 때문

export default React.memo(function ChildA() {
  console.log('ChildA');
  // 컴포넌트를 메모이제이션 했다고 하더라도 컴포넌트 자체의 상태가 변경되거나
  // 컴포넌트로 전달되는 props의 값이 변경되면 메모이제이션이 적용되지 않음(풀림)
  // 하지만 컴포넌트로 전달되는 props의 값이 일정하다면 (만약 상위 컴포넌트에서 props로 count={0}만 주고있다면)
  // 메모이제이션은 유지됨　props가 count={count}면 계속 변경되니 메모이제이션 풀림
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>ChildA Component: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}></button>
      <ChildB />
    </>
  );
});

// 만약 ChildB 에서 React.memo로 함수를 감싸줬을 때는 App, ChildA까지는 렌더링 됨
