import Link from "next/link";
import { getSiteCopy } from "@/lib/site/get-copy";

export default function NotFound() {
  const copy = getSiteCopy("fr");

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-heading-xl text-navy-800">{copy.notFound.title}</h1>
      <p className="mt-4 text-neutral-700">{copy.notFound.description}</p>
      <Link href="/fr" className="mt-8 text-sm font-semibold text-blue-600 hover:underline">
        {copy.notFound.home}
      </Link>
    </main>
  );
}
