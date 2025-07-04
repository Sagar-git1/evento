import H1 from "@/components/H1";
import SearchForm from "@/components/Search-form";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-36 px-3">
      <H1>Find Events Around you</H1>
      <p className="mb-12 mt-6 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="italic font-bold underline text-accent">10,000</span>{" "}
        events around you
      </p>
      <SearchForm />
      <section className="flex mt-4 gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href="/events/austin">Austin</Link>
          <Link href="/events/seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
