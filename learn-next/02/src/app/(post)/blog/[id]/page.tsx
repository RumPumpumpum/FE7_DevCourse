"use client";

import { useParams } from "next/navigation";
import React from "react";

export default function BlogDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>{`${params.id}번째 게시글`}</h1>
    </>
  );
}
