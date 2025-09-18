import { useState } from "react";
export default function App() {
  const [count, setCount] = useState<number>(0); // count는 숫자값만 올 수 있다.
  //  setCount로 상태 업데이트를 하려고 해도 숫자값만 와야한다.
  // 혹시 나중에 string으로 할 수도 있다? 그럼 유니언 타입으로 number|string 으로 지정

  const handleIncrement = () => {
    setCount(10);
  };
  return (
    <>
      <h1>count: {count}</h1>
      <button onClick={handleIncrement}>증가</button>
    </>
  );
}
