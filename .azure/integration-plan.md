# Integration Plan

## Backend
- Project folder: `services/web` (static Vite frontend; no backend service scaffolded in the approved plan)
- Run command: `npm --prefix services/web run dev`
- Port: Vite default (prints the selected localhost URL)
- Build command: `npm --prefix services/web run build`
- Health endpoint: `GET /`

## Frontend
- Project folder: `services/web`
- Build command: `npm --prefix services/web run build`
- Dev command: `npm --prefix services/web run dev`
- API seam: `src/api/client.js` and the `api` export; repoint this mock client to the live asset/content client.
- Mock files to delete after wiring: `src/api/client.js` mock implementation and any mock-only content in `src/content/portfolioContent.js` that is replaced by live data.

## API routes
- `GET /` - serve the public portfolio SPA
- `GET /assets/*` - serve user-supplied portfolio media from Blob Storage or local fallback; status `200` or `404`

## Database
- Type: none planned
- Migration tool/directory: none
- Connection environment variables: none
- No seed data is to be created.

## Shared types
- No shared package planned. Portfolio content currently lives at `services/web/src/content/portfolioContent.js` and should be replaced with the live response contract when available.

## Services
- Essential: Blob Storage, configured by `STORAGE_CONNECTION_STRING`.
- Enhancement: none.

## Integration results

- Database migrations: N/A. The approved plan uses Blob Storage only and defines no SQL or PostgreSQL database.
- Backend smoke test: the approved project has no backend service; the Vite host serves `GET /` and `GET /portfolio.json` successfully.
- Live data: `src/api/client.js` now fetches `/portfolio.json`; `App.jsx` renders the fetched response and no longer imports mock content or exposes preview-state controls.
- Frontend verification: `npm --prefix services/web run build` passes with zero errors.
- End-to-end evidence: the running Vite host returned `GET /` with `200` and `GET /portfolio.json` with `200`.
- Test status: Vitest reports no test files in the scaffold.
