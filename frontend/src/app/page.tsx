import { TrpcHello } from '@/components/TrpcHello';

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-6">
      <section className="w-full max-w-xl rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-500">
          Workspace Sync
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-950">
          Next.js App Router with NestJS tRPC
        </h1>
        <p className="mt-4 text-base leading-7 text-neutral-600">
          The frontend stays focused on UI and client hooks while the backend owns
          the router, context, and Zod-ready server layer.
        </p>
        <div className="mt-6 rounded-2xl bg-neutral-100 px-4 py-3">
          <TrpcHello />
        </div>
      </section>
    </main>
  );
}
