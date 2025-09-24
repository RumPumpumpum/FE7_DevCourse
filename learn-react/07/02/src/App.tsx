// const [상태변수, 상태디스패치] = useReducer(리듀서함수, 초깃값)

import { useState } from "react";
import Count from "./components/Count";

export default function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(10);
  };
  return (
    <>
      {/* <h1>Count: {count} </h1> */}
      {/* <button onClick={() => setCount(100)}>업데이트</button> */}
      {/* <button onClick={handleIncrement}>업데이트</button> */}
      {/* <Count count={count} setCount={setCount} /> */}
      <Count count={count} handleIncrement={handleIncrement} />
    </>
  );
}
