"use client";

import { trpc } from '@/lib/trpc';

export function TrpcHello() {
  const hello = trpc.hello.useQuery();

  if (hello.isLoading) {
    return <p className="text-sm text-neutral-500">Loading tRPC response...</p>;
  }

  if (hello.isError) {
    return <p className="text-sm text-red-600">Could not reach the tRPC backend.</p>;
  }

  return (
    <p className="text-sm text-neutral-700">
      {hello.data?.greeting ?? 'No greeting returned.'}
    </p>
  );
}
