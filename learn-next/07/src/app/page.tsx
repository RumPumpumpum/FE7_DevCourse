import { revalidatePath } from "next/cache";
import Link from "next/link";

async function getRandomNumber() {
  const res = await fetch("http://localhost:4000/random", {
    cache: "force-cache",
  });
  const randomNum = await res.json();
  return randomNum;
}

export async function generateMetadata() {
  const randomNum = await getRandomNumber();
  return {
    title: `${randomNum}`,
  };
}

const handle = async () => {
  "use server";
  revalidatePath("/");
  revalidatePath("/about");
};

export default async function HomePage() {
  const randomNum = await getRandomNumber();
  return (
    <>
      <h1>{randomNum}</h1>
      <Link href={"/about"}>about</Link>
      <form action={handle}>
        <button type="submit">revalidate</button>
      </form>
    </>
  );
}
