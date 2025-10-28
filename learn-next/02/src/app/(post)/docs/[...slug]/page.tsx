import React from "react";

export default async function DocsPage({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;
  console.log(id);

  return (
    <>
      <h1>DocPage</h1>
    </>
  );
}
