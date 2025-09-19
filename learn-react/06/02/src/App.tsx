import { useRef } from "react";

export default function App() {
  const ref = useRef<HTMLHeadingElement>(null); // current 속성이 포함된 객체가 반환됨
  // const handleClick = () => {
  //   if (ref.current) {
  //     ref.current.style.color = "red";
  //   }
  // };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(ref.current?.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="color" ref={ref} />
        <button type="submit">전송</button>
      </form>
    </>
  );
}
