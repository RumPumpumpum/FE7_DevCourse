"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <h1>{error.message}</h1>
      <button onClick={reset}>다시 시도하기</button>
    </>
  );
}
