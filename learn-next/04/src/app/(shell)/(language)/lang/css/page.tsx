import { redirect } from "next/navigation";

export default function CssPage() {
  redirect("../lang");
  return (
    <>
      <h1>
        <span className="text-red-500">CSS</span>
        문서
      </h1>
    </>
  );
}
