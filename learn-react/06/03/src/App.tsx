import { useState, useRef } from "react";
import Input from "./components/Input";

export default function App() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const [pw, setPw] = useState("");
  const pwRef = useRef<HTMLInputElement>(null);

  const hanedleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() === "") {
      alert("이메일을 입력해주세요");
      if (emailRef.current) emailRef.current.focus();
      return;
    }
    if (pw.trim() === "") {
      alert("비밀번호를 입력해주세요");
      if (pwRef.current) pwRef.current.focus();
      return;
    }
    console.log(email, pw);
  };
  return (
    <>
      <form onSubmit={hanedleSubmit}>
        <Input
          placeholder="이메일 입력"
          ref={emailRef}
          value={email}
          setValue={setEmail}
        />
        <Input
          placeholder="비밀번호 입력"
          ref={pwRef}
          value={pw}
          setValue={setPw}
        />
        <button>로그인</button>
      </form>
    </>
  );
}
