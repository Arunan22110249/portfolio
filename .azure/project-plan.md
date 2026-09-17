# Project Plan

**Status**: Integrated
**Created**: 2026-09-17
**Mode**: NEW

---

## 1. Project Overview

**Goal**: Build a polished public developer portfolio website that presents the user's supplied portfolio content exactly, with no invented biography, projects, links, or personal details. The project is designed so that every module is independently testable.

**App Type**: Static + API

**API Login**: No

**Mode**: NEW

**Deployment Plan**: No deployment plan found

---

## 2. Portfolio Web — frontend

| Component | Technology |
|-----------|-----------|
| **Language** | JavaScript |
| **Framework** | React + Vite |
| **Package Manager** | npm |
| **Test Runner** | vitest |
| **Mocking Library** | vi.mock |
| **Test Command** | npm test |

---

## 3. Services Required

| Azure Service | Role in App | Environment Variable | Default Value (Local) | Classification |
|---------------|------------|---------------------|----------------------|----------------|
| Blob Storage | Store and serve portfolio media assets supplied by the user | STORAGE_CONNECTION_STRING | UseDevelopmentStorage=true | Essential |

---

## 4. Prerequisites

### Run

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Node.js | * | ✅ | 22.20.0 |
| npm | * | ✅ | bundled with Node.js 22.20.0 |
| Vite | Portfolio Web | ❓ | Not confirmed |
| Azure Storage emulator | Portfolio Web | ❓ | Not confirmed |

### Debug

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Docker | Portfolio Web | ✅ | 0.0.0.0 |
| Docker Compose | Portfolio Web | ❓ | Not confirmed |
| JavaScript Debugger for VS Code | Portfolio Web | ❓ | Not confirmed |

Double-check all ❓ tools before proceeding.

---

## 5. Design System & UI

**Component Library**: Fluent UI v9
**Style Direction**: Editorial developer portfolio with a bright paper-like canvas, ink-black typography, and electric coral accents. Use generous whitespace, a strong typographic hero, restrained borders, and subtle motion so the supplied work remains the focus.
**Typography**: Segoe UI Variable

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#D94F45` | Coral brand color for primary actions, links, and active navigation |
| `accent`  | `#1B6B66` | Deep teal for secondary emphasis, metadata, and selected work accents |
| `surface` | `#F7F3ED` | Warm paper background for the portfolio canvas |
| `text`    | `#17211F` | Ink-black body and heading text |
| `muted`   | `#66736E` | Supporting copy, labels, and unavailable-content messaging |
| `border`  | `#D8D0C5` | Quiet dividers, media frames, and form boundaries |

### Pages

| Page | Route | Purpose | Layout |
|------|-------|---------|--------|
| Portfolio | `/` | Present the user's supplied identity, work, links, and contact content in one scannable public page without adding facts. | `header, nav, hero, main, card-list, split(table|card-list), actions, footer` |

### Sample Content

Portfolio — supplied content blocks:
| Content area | Display rule | State |
|--------------|--------------|-------|
| Identity | Render only the name, title, and introduction supplied by the user | data |
| Work | Render only project names, descriptions, technologies, and links supplied by the user | loading (skeleton) |
| Links | Render only destinations supplied by the user; show no invented destinations | empty |
| Contact | Render the contact method supplied by the user, if present; otherwise show an inline retryable content error | error |

The scaffold must preserve these content boundaries and must not fabricate personal details when a supplied value is absent.

---

## 6. Project Structure

```
portfolio/
├── .azure/
│   └── project-plan.md
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── app.css
│   ├── content/
│   │   └── portfolioContent.js
│   ├── components/
│   │   ├── PortfolioHeader.jsx
│   │   ├── PortfolioHero.jsx
│   │   ├── WorkList.jsx
│   │   ├── LinkList.jsx
│   │   └── ContactPanel.jsx
│   └── test/
│       └── setup.js
└── public/
    └── media/
```

---

## 7. Route Definitions

| # | Method | Path | Description | Request Body | Response Body | Status Codes |
|---|--------|------|-------------|-------------|--------------|-------------|
| 1 | GET | `/` | Serve the public portfolio single-page application | — | Rendered portfolio document | 200 |
| 2 | GET | `/assets/*` | Serve user-supplied portfolio media from Blob Storage or the local asset fallback | — | Media asset bytes | 200, 404 |

---

## 8. Next Steps

1. Run **azure-project-scaffold** to execute this plan
2. Run **azure-project-integrate** to wire the frontend to live data, smoke-test the backend, and create the migrations
3. Run **azure-debug-plan** → **azure-debug-generate** for Docker emulators and VS Code debugging
4. Run the **azure-deploy** agent when ready; it uses **azure-app-onboard** for architecture, cost estimation, IaC generation, provisioning, and health verification
