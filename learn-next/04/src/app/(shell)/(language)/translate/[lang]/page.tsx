import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang === "fr") notFound();
  return (
    <>
      <h1>번역 상세 Page</h1>
    </>
  );
}
