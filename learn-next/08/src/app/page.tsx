import RandomNumber from "@/components/RandomNumber";
import { Suspense } from "react";

export default async function Page() {
  return (
    <>
      <h1>Random Number</h1>
      <Suspense fallback={null}>
        <RandomNumber />
      </Suspense>
    </>
  );
}
