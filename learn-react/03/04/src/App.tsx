import User from "./components/User";

export default function App() {
  return (
    <>
      {/* User는 태그가 아니고 컴포넌트, 컴포넌트에도 속성을 추가할 수 있을까? */}
      {/* HTML의 속성은 그 태그의 이름이나 기능을 보충해주는 역할 */}
      {/* 컴포넌트의 속성은 그 컴포넌트로 데이터를 전달해주는 기능 */}
      <User name="김지호" age={20} />
      {/* {"문자열"} 혹은 {20} 의 형식임, 문자열은 {}가 생략된 것 뿐. */}
    </>
  );
}
