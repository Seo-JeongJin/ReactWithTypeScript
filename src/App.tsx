import { useState } from 'react';

export default function App() {
  const [name, setName] = useState<string>('jina');
  const [age, setAge] = useState<number>(24);
  const [gender, setGender] = useState<string>('male');
  const handleUpdateProfile = () => {
    setName('haru');
    setAge(23);
    setGender('female');
  };
  return (
    <>
      <h1>name: {name}</h1>
      <h1>age: {age}</h1>
      <h1>gender: {gender}</h1>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </>
  );
}
