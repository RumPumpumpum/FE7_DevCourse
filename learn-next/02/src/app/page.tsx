export default async function Page({
  params,
}: {
  params: Promise<{ app: string }>;
}) {
  const { app } = await params;
  return (
    <>
      <h1>{app}</h1>
    </>
  );
}
