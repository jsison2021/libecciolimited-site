import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="font-display text-7xl font-medium text-line sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
          This page could not be found.
        </h1>
        <p className="mt-4 text-ink-soft">
          The page may have moved, or the property is no longer listed.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-dark">
            Return Home
          </Link>
          <Link href="/properties" className="btn btn-outline">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
