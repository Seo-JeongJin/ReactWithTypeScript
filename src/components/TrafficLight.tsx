export default function TrafficLight({
  light,
  handleRed,
  handleYellow,
  handleGreen,
}: {
  light: string;
  handleRed: () => void;
  handleYellow: () => void;
  handleGreen: () => void;
}) {
  switch (light) {
    case 'red':
      return <button onClick={handleRed}>Change to Yellow</button>;
    case 'yellow':
      return <button onClick={handleYellow}>Change to Green</button>;
    case 'green':
      return <button onClick={handleGreen}>Change to Red</button>;
    default:
      return <button onClick={handleRed}>Change to Yellow</button>;
  }
}
