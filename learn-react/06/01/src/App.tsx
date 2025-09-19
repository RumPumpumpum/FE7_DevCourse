import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("남자");
  // e.target은 이벤트가 발생한 DOM요소 태그 자체를 가리킨다.
  // e.target.value는 사용자가 선택한 라디오 버튼의 value 속성값을 가져온다.
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <pre>{value}</pre>
      <div>
        <input
          type="radio"
          name="gender"
          value="남자"
          defaultChecked
          onChange={handleChange}
        />{" "}
        남자
      </div>
      <div>
        <input
          type="radio"
          name="gender"
          value="여자"
          onChange={handleChange}
        />{" "}
        여자
      </div>
    </>
  );
}
