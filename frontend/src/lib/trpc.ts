import { createTRPCReact } from '@trpc/react-query';
import type { CreateTRPCClientOptions } from '@trpc/client';
import { httpBatchLink } from '@trpc/client';
import superjson from 'superjson';
import type { AppRouter } from '@backend/trpc/trpc.router';

export const trpc = createTRPCReact<AppRouter>();

export function getClientOptions(): CreateTRPCClientOptions<AppRouter> {
  return {
    links: [
      httpBatchLink({
        url: process.env.NEXT_PUBLIC_TRPC_URL ?? 'http://localhost:4000/trpc',
        transformer: superjson,
      }),
    ],
  };
}
