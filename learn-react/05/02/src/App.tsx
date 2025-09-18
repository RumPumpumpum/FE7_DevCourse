export default function App() {
  const handleClick = (e: unknown) => {
    console.log(e);
  };
  return (
    <>
      <button onClick={handleClick}>버튼</button>
    </>
  );
}
