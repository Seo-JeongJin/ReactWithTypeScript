import { useState } from 'react';

export default function App() {
  const [items, setItems] = useState<string[]>(['사과', '바나나', '오렌지']);
  const addFruit = () => {
    setItems((items) => [...items, '포도']);
  };
  return (
    <>
      <h1>Fruits List</h1>
      <ul>
        {items.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <button onClick={addFruit} disabled={items.length >= 4}>
        과일 추가
      </button>
    </>
  );
}
