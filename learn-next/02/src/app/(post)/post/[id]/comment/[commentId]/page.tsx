import React from "react";

// 동적 세그먼트는 params로 받아야 함
// 상위의 [id]를 받으려면 params에 추가!
export default async function Page({
  params,
}: {
  params: Promise<{ id: string; commentId: string }>;
}) {
  const { id, commentId } = await params;
  return (
    <div>
      포스트 ID: {id}, 코멘트 ID: {commentId}
    </div>
  );
}
