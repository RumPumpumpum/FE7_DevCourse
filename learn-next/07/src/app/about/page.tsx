import Link from "next/link";

export const revalidate = 1;
export default function AboutPage() {
  const date = new Date().toLocaleTimeString("ko-KR");
  return (
    <>
      <h1>{date}</h1>
      <Link href={"/"}>Home</Link>
    </>
  );
}
