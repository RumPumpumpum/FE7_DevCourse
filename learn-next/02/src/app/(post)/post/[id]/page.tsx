import React from "react";

// 동적 세그먼트는 params로 받아야 함
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>포스트 ID: {id}</div>;
}
