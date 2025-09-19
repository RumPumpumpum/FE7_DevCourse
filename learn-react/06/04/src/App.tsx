import { useEffect, useState } from "react";
import Interval from "./components/Interval";

export default function App() {
  const [count, setCount] = useState(0);
  console.log("App 컴포넌트");

  // 컴포넌트가 생성,수정,삭제 될 때 코드를 실행한다.
  useEffect(() => {
    // 사이드 이펙트를 처리하기 위한 코드를 작성
    return () => {
      //컴포넌트가 삭제될 때 호출되는 함수
    };
  }, [count]); // 의존성 배열이 무엇이 들어가냐에 따라서 동작이 달라지게됨
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>증가</button>
      {count === 0 && <Interval />}
    </>
  );
}
