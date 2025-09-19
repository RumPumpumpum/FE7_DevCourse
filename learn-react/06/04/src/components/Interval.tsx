import { useEffect } from "react";

export default function Interval() {
  useEffect(() => {
    // 클린업 함수
    // 컴포넌트가 제거될 때, 정리하는 코드를 작성할수 있다.
    const interval = setInterval(() => {
      console.log("interval 코드 실행!");
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Interval 컴포넌트 제거됨");
    };
  }, []); // 의존성 배열이 무엇이 들어가냐에 따라서 동작이 달라지게됨

  return (
    <>
      <h1>Interval Component</h1>
    </>
  );
}
