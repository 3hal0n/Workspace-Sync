## Workspace Sync

Workspace Sync is a full-stack project management and time-tracking dashboard. It was built specifically to bridge high-end frontend design with enterprise-grade backend architecture.

This project was developed under a Strict Manual Coding Policy.

Zero AI Assistance: No GitHub Copilot, ChatGPT, Claude, or AI-powered IDE agents were used for code generation.

Purpose: To master the foundational "muscle memory" of CSS layouts, Java Spring Boot patterns, and complex state management.

Outcome: Every line of code, from the Tailwind grid configurations to the Spring Boot DTO mappings, was written manually to ensure deep technical understanding and architectural integrity.

## Structure

- `src/app`: route segments and layout
- `src/components`: reusable UI and client components
- `src/providers`: React context providers, including tRPC and React Query
- `src/lib`: client helpers and utilities
- `backend/src/trpc`: tRPC server router, context, and Nest integration

## Getting Started

First, run the frontend development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Set `NEXT_PUBLIC_TRPC_URL=http://localhost:4000/trpc` if your backend is running on the default NestJS port.

You can start editing the page by modifying `src/app/page.tsx`.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
