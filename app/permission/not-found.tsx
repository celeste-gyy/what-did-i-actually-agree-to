import Link from "next/link";

export default function PermissionNotFound() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef2f7_100%)] px-4 py-12 text-slate-900 sm:px-8">
      <div className="mx-auto max-w-2xl rounded-[32px] border border-white/80 bg-white/90 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Permission world
        </p>
        <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">This permission world is not available</h1>
        <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
          The permission may have changed or the link is no longer active. Return to the permission world and choose another path.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
          >
            Back to permission world
          </Link>
        </div>
      </div>
    </main>
  );
}
