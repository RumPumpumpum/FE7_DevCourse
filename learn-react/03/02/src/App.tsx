// import styled from "styled-components";

// export default function App() {
//   return (
//     <>
//       <HelloWorld>App Component</HelloWorld>
//     </>
//   );
// }

import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { button } from "./css/style.css";

// @emotion/styled 로 인해서 styled-components도 쓸 수 있다...
const Button = styled.h1`
  color: red;
  text-decoration: underline;
  &:hover {
    color: blue;
  }
`;

export default function App() {
  const color = "white";
  return (
    <>
      <div
        className={css`
          padding: 32px;
          background-color: hotpink;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color
      </div>
      {/* styled-component 사용 부분 */}
      <Button>버튼</Button>
      <button className={button}>버튼</button>
    </>
  );
}
