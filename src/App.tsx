import { useState } from 'react';
import CountButton from './components/CountButton';
import CountDisplay from './components/CountDisplay';

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  };
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <CountDisplay count={count} />
      <CountButton
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        handleReset={handleReset}
      />
    </>
  );
}
