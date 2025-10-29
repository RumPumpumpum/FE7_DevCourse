import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  // 비동기 통신의 결과를 메타데이터의 정보를 활용할 수 있다.
  const { id } = await params;
  return {
    title: `${id} - 게시글`,
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <>
      <h1>Page - {id} </h1>
    </>
  );
}
