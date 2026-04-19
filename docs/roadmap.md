# Implementation Roadmap

This roadmap lists the main implementation steps to build the dashboard features, with short notes on why each step matters and expected deliverables.

## Steps

1. Setup Spring Boot backend with Spring Data MongoDB
	- Why it matters: Establishes basic connectivity and the data model for the dashboard.
	- Deliverables: Spring Boot application, Spring Data MongoDB configuration, sample seed data.

2. Create GET /api/dashboard/stats endpoint
	- Why it matters: Provides the aggregated data used by the main Figma dashboard cards.
	- Deliverables: Controller, service, DTOs, and unit tests for the endpoint.

3. Build Sidebar and StatCards in Next.js (manual CSS)
	- Why it matters: Fixes previous UI issues and provides the visual layout for the dashboard.
	- Deliverables: `Sidebar` and `StatCard` components, responsive styles, and local previews.

4. Connect the frontend using `useQuery`
	- Why it matters: Demonstrates fullstack integration and handles loading/error states.
	- Deliverables: API client, React hooks using `useQuery`, and integration examples in pages/components.

5. Add Search functionality
	- Why it matters: Enables dynamic data filtering and improves UX for large datasets.
	- Deliverables: Search input component, backend search endpoint or query params, tests.

6. Testing & polish
	- Why it matters: Ensures reliability, accessibility, and good UX before release.
	- Deliverables: e2e tests, accessibility checks, documentation, and small UI refinements.

---

If you'd like, I can also add estimated effort, milestones, or link these steps to issues/PRs.