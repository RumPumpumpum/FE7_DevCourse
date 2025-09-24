import type { ActionDispatch } from "react";
import type { Action } from "../App";

export default function Count({
  count,
  dispatch,
}: {
  count: number;
  dispatch: ActionDispatch<[action: Action]>;
}) {
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>감소</button>
      <button onClick={() => dispatch({ type: "RESET" })}>0</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>증가</button>
    </>
  );
}
