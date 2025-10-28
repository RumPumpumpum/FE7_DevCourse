export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-purple-200 p-2 border-2 border-purple-600 m-2">
        🟣 Guides 레이아웃 (2단계)
        {children}
      </div>
    </>
  );
}
