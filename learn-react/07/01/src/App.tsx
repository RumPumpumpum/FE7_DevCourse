// const [상태변수, 액션(리듀서)발생함수] =  useReducer(리듀서함수, 초깃값)
import { useReducer } from "react";
import Count from "./components/Count";
import reducer from "./reducer/countReducer";
// 리듀서 함수 -> 상태 업데이트 로직이 담겨 있는 함수

export default function App() {
  const [count, countDispatch] = useReducer(reducer, 0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => countDispatch({ type: "RESET" })}>0</button>
      <button onClick={() => countDispatch({ type: "INCREMENT" })}>증가</button>
    </>
  );
}
