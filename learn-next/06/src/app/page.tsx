import RandomNumber from "@/components/RandomNumber";

export default async function Page() {
  const res = await fetch("http://localhost:4000/random");
  const number = await res.json();
  return (
    <>
      <RandomNumber number={number} />
    </>
  );
}
