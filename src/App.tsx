import Button from './components/Button';

export default function App() {
  const handler = (message: string) => alert(message);
  return (
    <>
      <Button message={'hi'} handler={handler}>
        click
      </Button>
    </>
  );
}
