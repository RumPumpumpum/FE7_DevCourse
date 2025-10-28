export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-green-200 p-2 border-2 border-green-600 m-2">
        <header>헤더</header>
        {children}
        <footer>푸터</footer>
      </div>
    </>
  );
}
