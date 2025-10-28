"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const handleRandomNumber = () => {
    alert("랜덤 숫자가 뽑혔습니다. 결과는 마이페이지에서 확인해주세요");
    router.push("/docs");
  };
  return (
    <>
      <h1>Page</h1>
      <button onClick={handleRandomNumber}>docs</button>
    </>
  );
}
