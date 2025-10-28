"use client";

import { useState } from "react";

// 클라이언트 컴포넌트
export default function ClientCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => setClicked(true)}
      className="border-2 border-blue-500 p-4 m-2 bg-blue-100 cursor-pointer"
    >
      <h2 className="text-xl font-bold text-blue-800">
        클라이언트 컴포넌트 (클릭 가능!)
      </h2>
      {children} {/* 여기에 서버 컴포넌트가 들어감! */}
      {clicked && <p className="text-green-600 font-bold mt-2">✅ 클릭됨!</p>}
    </div>
  );
}


