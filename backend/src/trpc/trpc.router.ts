import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import type { Context } from './trpc.context';

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const appRouter = t.router({
  hello: t.procedure.query(() => {
    return { greeting: 'Hello from NestJS tRPC' };
  }),
});

export type AppRouter = typeof appRouter;
