// 함수형
export default function App() {
  return (
    <>
      <h1>Hello, World! (Function Conponent)</h1>
      <h1>1 * 2 = {1 * 2}</h1> {/*간단한 표현식은 중괄호로 사용 */}
      <h2 style={{ color: "red" }}> name: kim</h2> {/*인라인 스타일은 객체로 */}
    </>
  );
}

// 화살표 함수형
// const App = () => {
//   return <h1>Hello, World! (Function Conponent)</h1>;
// };

// 클래스형
// import React from "react";

// class App extends React.Component {
//   render(): React.ReactNode {
//     return <h1>Hello, World(With Class Components)</h1>; // JSX 문법 *javascript XML
//   }
// }

// export default App;
// export default App; // default를 붙이는 것-> react 생태계의 관례
// // default는 해당 파일에서 단 하나만 내보낼 수 있는 '기본 내보내기' 방식을 의미
// // 이렇게 내보낸 값은 다른 파일에서 import할 때 중괄호 {} 없이 원하는 이름으로 가져올 수 있음
