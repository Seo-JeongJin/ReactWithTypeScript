export default function UserProfile({
  name,
  age,
  status,
}: {
  name: string;
  age: number;
  status: string;
}) {
  return (
    <>
      <p>이름: {name}</p>
      <p>나이:{age}</p>
      <p>{status}</p>
    </>
  );
}
