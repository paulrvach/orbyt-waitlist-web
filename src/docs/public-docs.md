<!--
ORBYT DOCS — SITE SPEC
======================
This file is a single-source spec for an OpenAI/Anthropic-style developer-docs
website (dark theme, left sidebar, right-rail TOC, code samples inline).

Format contract for the consuming AI builder (Claude Code):

1. The first `---` YAML block is GLOBAL site config (brand, theme, nav).
2. Each page is delimited by `<!-- PAGE -->` followed by a YAML frontmatter
   block, followed by the markdown body for that page.
3. Page slugs are URL paths (e.g. slug `quickstart` -> `/docs/quickstart`).
4. The `section` field in each page's frontmatter MUST match a section under
   `nav.sidebar` in the site config. Sidebar order = section order.
5. The right-rail TOC for each page is auto-generated from `##` headings in
   the body. Do not duplicate the page title as a heading.
6. Code blocks are real, runnable where possible. Treat them as canonical.
7. Cross-page links use `[text](/docs/<slug>)`.

Build target: Next.js (App Router) + MDX + shadcn/ui, dark-by-default.
-->

---
site:
  brand: Orbyt
  tagline: The local-first AI study companion for students
  description: >
    Orbyt is a desktop app that connects to Canvas, plans your week with a
    hybrid AI scheduler, and keeps everything you need for school in one
    chat-first workspace. This site is the developer and user documentation.
  theme: dark
  accent: "#7C9CFF"
  font:
    sans: "Inter"
    mono: "JetBrains Mono"
  search:
    placeholder: "Start searching"
    enabled: true
  cta:
    label: "Get Orbyt"
    href: "/download"

nav:
  top:
    - { label: Home, href: "/" }
    - { label: Product, href: "/product" }
    - { label: Docs, href: "/docs/overview", active: true }
    - { label: Plugins, href: "/docs/plugins/overview" }
    - { label: Resources, href: "/resources" }
  sidebar:
    - section: "Get started"
      items:
        - { slug: "overview",      label: "Overview" }
        - { slug: "quickstart",    label: "Quickstart" }
        - { slug: "architecture",  label: "Architecture" }
        - { slug: "tech-stack",    label: "Tech stack" }
        - { slug: "roadmap",       label: "Roadmap" }
    - section: "Core concepts"
      items:
        - { slug: "chat-and-ai-harness", label: "Chat & AI harness" }
        - { slug: "soul-and-personality", label: "Soul & personality" }
        - { slug: "memory",              label: "Memory" }
        - { slug: "skills",              label: "Skills" }
        - { slug: "smart-planner",       label: "Smart planner" }
        - { slug: "canvas-sync",         label: "Canvas sync" }
        - { slug: "dashboard",           label: "Dashboard" }
        - { slug: "notifications",       label: "Notifications & feed" }
        - { slug: "file-system",         label: "File system" }
    - section: "Plugins (MCP)"
      items:
        - { slug: "plugins/overview",     label: "Overview" }
        - { slug: "plugins/canvas",       label: "Canvas MCP" }
        - { slug: "plugins/apple-calendar", label: "Apple Calendar MCP" }
        - { slug: "plugins/build-your-own", label: "Build your own plugin" }
    - section: "Reference"
      items:
        - { slug: "reference/soul-format",     label: "Soul.md format" }
        - { slug: "reference/skill-format",    label: "Skill format" }
        - { slug: "reference/manifest-schema", label: "Manifest schema" }
        - { slug: "reference/rpc-protocol",    label: "RPC protocol" }
        - { slug: "reference/cli",             label: "CLI commands" }
---

<!-- PAGE -->
---
slug: overview
title: "Overview"
section: "Get started"
description: >
  Orbyt is a local-first desktop app that brings agentic AI workflows to
  everyday student tasks. It plans your week, tracks your assignments, and
  improves outcomes through a chat-first experience.
hero:
  eyebrow: "Documentation"
  heading: "Orbyt Platform"
  card:
    title: "Student quickstart"
    body: "Make your first plan in minutes. Connect Canvas, sign in to Codex, and let Orbyt build your week."
    primary: { label: "Get started", href: "/docs/quickstart" }
    secondary: { label: "Install Orbyt", href: "/download" }
    code:
      language: "bash"
      content: |
        # macOS — install and run
        bun install
        bun run dev:server   # local AI + sync orchestrator
        bun run dev:ui       # React UI rendered inside Electron
  callout:
    title: "Built on the Codex CLI"
    body: "Orbyt uses your existing ChatGPT subscription via the Codex CLI as the AI runtime — no separate API key required."
    cta: { label: "How it works", href: "/docs/chat-and-ai-harness" }
build_paths:
  - title: "Smart planner"
    body: "Hybrid AI + deterministic scheduling that produces a 6-week rolling academic plan, with three-way completion check-ins."
    href: "/docs/smart-planner"
  - title: "Plugin system (MCP)"
    body: "A local-first MCP orchestrator runs each integration in an isolated utility process with encrypted credentials."
    href: "/docs/plugins/overview"
---

Orbyt is a desktop application for students. It connects to **Canvas LMS**,
builds a normalized local view of coursework and grades, helps plan the week,
and surfaces autonomous agent activity through a unified feed — powered by a
local Codex CLI harness and the student's existing ChatGPT subscription.

The product is built for one job first: **show students what's due, when, and
help plan their week.** Everything else — memory, skills, dashboards,
notifications, plugins — exists to make that job feel effortless.

## What Orbyt does

- **Connects to Canvas** and normalizes assignments, modules, pages, and
  announcements into a single `CourseWorkItem` model.
- **Plans your week** with a hybrid scheduler: the AI decomposes and estimates,
  deterministic code places sessions and respects constraints.
- **Remembers what matters** via mem0 with entity partitioning — routines,
  preferences, and behavioral patterns are scoped and retrievable.
- **Surfaces activity** in a feed-first notification system with optional
  native OS notifications and weekly insight cards.
- **Runs locally**. Plugins are sandboxed `utilityProcess` instances; secrets
  live in OS-encrypted storage; nothing leaves your machine unless a plugin
  explicitly sends it.

## Who it's for

Orbyt is built for students who already have a ChatGPT subscription and want
their assistant to actually live with their school work — not just answer
questions in a tab. It is **not** a paper-writing tool. The assistant helps
you plan, outline, and review; it will not write essays for you.

## Where to next

- **Install and run** Orbyt: [Quickstart](/docs/quickstart).
- **Understand the three-tier architecture**: [Architecture](/docs/architecture).
- **See the chat surface and AI runtime**: [Chat & AI harness](/docs/chat-and-ai-harness).

<!-- PAGE -->
---
slug: quickstart
title: "Quickstart"
section: "Get started"
description: >
  Install Orbyt, connect Canvas, sign in to Codex, and generate your first
  weekly plan.
toc_hint:
  - "Install"
  - "First launch"
  - "Connect Canvas"
  - "Sign in to Codex"
  - "Generate your first plan"
  - "Where things live"
---

This guide walks you from a clean machine to your first generated plan in
about ten minutes.

## Install

Orbyt ships as a signed macOS `.dmg` for v1. Linux and Windows are on the
[Roadmap](/docs/roadmap).

```bash
# Prereqs: Bun 1.3.5+ and Node 24+
bun install
bun run build
```

Developers running from source can launch the dev stack:

```bash
bun run dev:server   # local server: AI harness, Canvas sync, planner
bun run dev:ui       # React UI inside Electron
```

## First launch

When you first open Orbyt, the onboarding wizard runs five steps:

1. **Welcome** and privacy summary.
2. **Canvas institution** picker and access-token wizard.
3. **Codex auth** (ChatGPT OAuth, opens a browser).
4. **Preferences & routines** capture (stored in mem0).
5. **First sync** — Canvas pulls courses, assignments, grades, and announcements.

The wizard ends on a live dashboard walkthrough that uses **your real data**,
not screenshots.

## Connect Canvas

Generate a Canvas personal access token:

```text
Canvas > Account > Settings > Approved Integrations > + New Access Token
```

Paste it into the wizard along with your institution base URL
(`https://canvas.youruniversity.edu`). Orbyt stores the token encrypted via
Electron `safeStorage` (Keychain on macOS) and only the bundled Canvas MCP
process can read it.

## Sign in to Codex

Orbyt uses the Codex CLI as the AI runtime. On first launch:

1. Orbyt triggers a device OAuth flow via the Codex app-server.
2. Your browser opens. Sign in with the same account you use for ChatGPT.
3. Orbyt detects completion and stores the session.

There is no API-key fallback in v1. If auth fails, Orbyt prompts re-auth
through OAuth without losing your conversation context.

## Generate your first plan

From the chat tab, say:

> "Plan my week."

Orbyt will stream a plan as it builds — task analysis, decomposition, slot
finding, and schedule assembly — with student-friendly status messages like
*"Looking at your Problem Set 3..."* and *"Checking your schedule for open
time..."*. The calendar view fills in incrementally.

You can interrupt at any point and tell Orbyt what to change. Completed plans
are persisted in SQLite under `tasks`, `planned_sessions`, and
`user_preferences`.

## Where things live

| Path                          | Purpose                                       |
|-------------------------------|-----------------------------------------------|
| `~/.orbyt/extensions/`        | Installed MCP plugins (per-plugin manifest)   |
| `~/.orbyt/vault/`             | Encrypted secrets (safeStorage)               |
| `~/.orbyt/orbyt.sqlite`       | Local cache: courses, coursework, plans, feed |
| `soul/SOUL.md`                | Immutable AI personality core                 |

<!-- PAGE -->
---
slug: architecture
title: "Architecture"
section: "Get started"
description: >
  Orbyt is a three-tier desktop app: Electron shell, local Bun server, and
  external services reached through MCP plugins.
toc_hint:
  - "Three tiers"
  - "Communication"
  - "Data flow"
  - "Why this shape"
---

Orbyt's architecture is inspired by T3 Code: a thin Electron shell, a
heavy-weight local server, and external services reached exclusively through
MCP plugins.

## Three tiers

| Tier               | Responsibility                                                              |
|--------------------|-----------------------------------------------------------------------------|
| **Electron shell** | Native OS surface — file dialogs, notifications, tray, IPC bridge, plugin lifecycle |
| **Local server**   | AI harness, Canvas sync, planner, memory, policy enforcement, autonomous workflows, WebSocket domain streams |
| **External**       | Canvas LMS, calendar providers, Notion, etc. — reached only via MCP plugins  |

The React UI is rendered inside Electron but talks to the local server over
**WebSocket domain streams** and **typed IPC**, not directly to external
services. The renderer has no `fetch` capability for Canvas.

## Communication

```text
React UI  <-- WebSocket domain streams + typed IPC -->  Local Server
Local Server  <-- stdin/stdout JSON-RPC -->  Codex CLI
Local Server  <-- plugin gateway IPC -->  Electron Main  <-- MCP stdio -->  MCP plugins
```

- **UI <-> Server**: typed RPC + push subscriptions (`orbyt.v1` protocol).
- **Server <-> Codex**: JSON-RPC 2.0 over a managed subprocess.
- **Server <-> Plugins**: every MCP call routes through Electron Main, which
  owns the plugin sandbox lifecycle. The renderer never touches plugins.

## Data flow

Three flows carry most of the system:

1. **Chat turn**. UI sends `chat.sendMessage`. The server's
   `OrchestrationService` assembles context (soul + skills + profile +
   memories + tools + history), forwards to Codex, streams tokens back to the
   UI, and routes any tool calls to the plugin orchestrator.
2. **Canvas sync**. The server's `CanvasSyncService` polls on an adaptive
   schedule (15 min active / 60 min in tray), diffs against the SQLite
   snapshot, emits typed change events
   (`AssignmentAdded`, `DeadlineChanged`, `GradePosted`, `AnnouncementPosted`),
   and writes notification + feed records.
3. **Plan generation**. `PlannerService` invokes the AI for analysis and
   decomposition, deterministic code for slot-finding and constraint checks,
   and streams progressive status events back through the chat channel.

## Why this shape

- **Local-first**. Student data — Canvas grades, notes, schedules — never
  leaves the machine unless a plugin explicitly sends it.
- **Crash isolation**. A bad plugin can die without taking down the UI.
- **Type safety end-to-end**. Effect Schema is the source of truth for IPC,
  RPC, and database row shapes.
- **Multi-vendor ready, single-vendor today**. v1 ships with Codex only, but
  the provider port allows another adapter to be added without changing the
  UI.

<!-- PAGE -->
---
slug: tech-stack
title: "Tech stack"
section: "Get started"
description: >
  The libraries and runtimes Orbyt is built on.
toc_hint:
  - "Stack at a glance"
  - "Key choices"
---

## Stack at a glance

| Layer              | Technology                                                                 |
|--------------------|----------------------------------------------------------------------------|
| Runtime            | Bun 1.3.5+                                                                 |
| Frontend           | React 18 + Vite, shadcn/ui, TanStack Router, TanStack Query, Zustand       |
| Backend            | Effect-TS (typed errors, structured concurrency, layered DI)               |
| Database           | SQLite (local persistence)                                                 |
| AI runtime         | Codex CLI subprocess, JSON-RPC 2.0; OpenAI embeddings via the shared auth broker for mem0 |
| Desktop shell      | Electron (`utilityProcess` plugin sandboxes, `safeStorage` for secrets)    |
| Shared contracts   | Effect Schema for typed UI ↔ server messages                               |
| Memory             | mem0 with entity partitioning (user / agent / run scoping)                 |
| Plugin protocol    | Model Context Protocol (MCP), stdio transport                              |

## Key choices

- **Bun** for fast install + native test runner across all packages.
- **Effect-TS** because LLM-driven backends benefit from structured errors,
  fiber-based interruption, and explicit layered dependencies.
- **shadcn/ui** as a baseline component library — preset `b3RXNlzf8` for
  the Vite template.
- **Local SQLite over a managed cloud DB** because Orbyt is local-first.
- **MCP for every integration** — even Canvas is a plugin. This keeps the
  core small and forces every integration through the same security and
  sandbox model.

<!-- PAGE -->
---
slug: roadmap
title: "Roadmap"
section: "Get started"
description: >
  What ships in v1 and what's next.
toc_hint:
  - "v1 (macOS)"
  - "After v1"
---

## v1 (macOS)

- Signed macOS `.dmg` distribution.
- Canvas integration, smart planner, dashboard, memory, skills, plugin
  system, file system, notifications, and Codex-based AI harness.
- Bundled MCPs: Canvas, Apple Calendar, Notion (wrapper), and a template.
- Native macOS notifications via Electron `Notification`.
- Weekly insight cards driven by the proactive scheduler in
  `packages/electron/src/push/`.

## After v1

- Linux and Windows builds.
- Optional cross-device push (previously prototyped, removed from v1 to
  reduce surface area).
- Second AI provider adapter via the existing provider port — no user-facing
  vendor picker until the port is proven.
- Mid-stream "steer" if and when the Codex protocol exposes one.
- Multi-Canvas-instance support (the local schema is already forward-compatible).

<!-- PAGE -->
---
slug: chat-and-ai-harness
title: "Chat & AI harness"
section: "Core concepts"
description: >
  How a user message becomes a streamed answer: process management, JSON-RPC,
  context assembly, and tool calls.
toc_hint:
  - "What the harness does"
  - "Context assembly order"
  - "Budget manager"
  - "Streaming and interruption"
  - "Tool calls"
  - "Pre-warm and offline"
---

The AI harness is the bridge between the chat UI and the model. It owns the
Codex CLI subprocess, the JSON-RPC protocol, streaming, session lifecycle,
context assembly, and tool routing.

## What the harness does

- Spawns and supervises the Codex CLI process. Pre-warms on app launch so
  there's no cold start on the first user message.
- Speaks JSON-RPC 2.0 over stdin/stdout. Streaming tokens arrive as
  notifications (no `id`).
- Handles ChatGPT OAuth via Codex's `account/login/start` flow. No API-key
  fallback in v1.
- Assembles the prompt for every turn and enforces the token budget.
- Routes tool calls to the MCP orchestrator and feeds results back to the
  model.

## Context assembly order

Every turn assembles the prompt in this order:

1. **Soul** — immutable personality (`soul/SOUL.md`) + adaptive signals from memory.
2. **Active skills** — e.g. `plan-mode`.
3. **Student profile** — ~500-token summary from the memory profile compiler.
4. **Relevant memories** — top-k chunks from semantic search.
5. **Tool definitions** — from active MCP plugins.
6. **Conversation history** — verbatim recent turns + rolling summary.
7. **User message** — always included in full.

## Budget manager

| Source              | Budget               | Notes                                    |
|---------------------|----------------------|------------------------------------------|
| Soul                | ~300 tokens          | Fixed, always loaded                     |
| Active skills       | ~500–1000 tokens     | Competes when multiple are active        |
| Student profile     | ~500 tokens          | Compact summary                          |
| Retrieved memories  | ~500–1000 tokens     | Top-k from semantic search               |
| Tool definitions    | ~200–500 tokens      | Scales with active plugins               |
| Conversation history| Remainder            | First to be trimmed                      |
| User message        | Unbounded            | Always included                          |

When demand exceeds the window, the harness trims history first, then reduces
memory retrieval, then truncates skill prompts. Soul is never trimmed.

## Streaming and interruption

Tokens are streamed over the WebSocket `chat.streaming` channel. The user can
press **Stop** to send `chat.interrupt`. There is no separate "steer
mid-stream" feature in v1 — to redirect, the user sends a normal next turn.

## Tool calls

When Codex emits a tool call:

1. The harness parses the call from the JSON-RPC stream.
2. Routes the call through `Electron Main` to the MCP orchestrator.
3. The matching plugin is started (if not already running), credentials are
   handed off via a one-time secure message, and the tool is invoked.
4. The result is returned to Codex to continue generation.

Large tool outputs are spilled to files in the workspace; only a short handle
goes back into the prompt.

## Pre-warm and offline

- **Pre-warm** runs on app launch. If pre-warm fails (install, auth, timeout),
  the chat surface enters a degraded mode: clear UI, Stop disabled, optional
  Retry, exponential backoff. The rest of the app (dashboard, cached data)
  keeps working.
- **Offline**: outbound user messages go into a durable local queue and flush
  in order when the network returns. The harness never fakes a reply.

<!-- PAGE -->
---
slug: soul-and-personality
title: "Soul & personality"
section: "Core concepts"
description: >
  Orbyt's assistant has a stable personality — encouraging, honest, focused.
  Soul.md defines the immutable core; the adaptive layer learns your style.
toc_hint:
  - "Why soul"
  - "Immutable core"
  - "Adaptive layer"
  - "How updates happen"
---

## Why soul

A generic chatbot has no personality, so it has no consistency. Orbyt loads a
**soul** document on every turn so the assistant behaves like the same
companion across sessions — even after memory resets, restarts, or a new
device.

The format is aligned with the Open Claw `SOUL.md` template: core truths,
boundaries, vibe, continuity.

## Immutable core

Lives in `soul/SOUL.md` on disk. It contains:

- **Identity** — "You are a student's academic assistant. Encouraging but honest."
- **Values** — prioritize understanding over giving answers; respect deadlines.
- **Boundaries** — never write essays for the student; help plan, outline, review.
- **Tone** — casual but focused, like a smart friend who's good at school.
- **Session awareness** — "You don't remember previous sessions unless memories are loaded."

The immutable core is read once at server startup and **injected at the
beginning of every assembled prompt**.

## Adaptive layer

The adaptive layer is **not** silently merged into the file. It lives in
memory + the profile compiler and is injected alongside the core block.

It tracks signals such as:

- **Interaction style** — casual, formal, terse, emoji-heavy.
- **Tone calibration** — match energy without losing the core personality.
- **Learned preferences** — "prefers bullet points," "responds well to analogies."

Updates are conservative: multiple consistent signals before a behavior
changes. This prevents the assistant from mirroring the student's worst
habits.

## How updates happen

After conversations, the memory extractor scans for interaction patterns and
stores them with confidence scores. The profile compiler surfaces them during
context assembly. The file `SOUL.md` is never auto-rewritten in v1; if we
ever propose changes, they will be user-reviewed and the user will be told.

See the [Soul.md format](/docs/reference/soul-format) reference for the exact
schema.

<!-- PAGE -->
---
slug: memory
title: "Memory"
section: "Core concepts"
description: >
  mem0 with entity partitioning is Orbyt's single source of truth for what it
  knows about you. Memories are scoped by user, agent, and run.
toc_hint:
  - "Why mem0"
  - "Partitioning model"
  - "Extraction pipeline"
  - "Profile compiler"
  - "MEMORY.md projection"
---

## Why mem0

Discrete markdown files per topic don't scale: contradictions go unresolved,
retrieval is keyword-only, and updates become a chore. mem0 with entity
partitioning gives Orbyt scoped retrieval, automatic contradiction handling,
and a clean update path.

## Partitioning model

Memories are tagged by three IDs:

| Tag         | Example                                  | Purpose                          |
|-------------|------------------------------------------|----------------------------------|
| `user_id`   | `student:reynard@school.edu`             | Identifies the human owner       |
| `agent_id`  | `routines`, `preferences`, `behavioral`  | Categorizes what kind of memory  |
| `run_id`    | `session-abc123`                         | Scopes to a conversation         |

Categories like `routines`, `preferences`, and `behavioral` are queried
independently. The planner reads from `routines` + `preferences`; the
adaptive soul layer reads from `behavioral`.

## Extraction pipeline

After each conversation, the extractor walks the transcript and emits an
ADD / UPDATE / DELETE plan against the existing mem0 store. Contradictions
trigger UPDATE rather than ADD. Successful Canvas retrievals and user
clarifications also feed in (see [Canvas sync](/docs/canvas-sync)).

## Profile compiler

The profile compiler reads the relevant partitions and produces a compact
**student profile** (~500 tokens) that the AI harness injects on every turn.
This is what makes the assistant "remember" without paying the cost of
shoving the whole memory into context.

## MEMORY.md projection

`MEMORY.md` is a **read-only human-readable projection** of the mem0 store,
not the source of truth. It exists so users can audit what Orbyt has learned.
Edits to `MEMORY.md` are not persisted — to change a memory, talk to the
assistant.

<!-- PAGE -->
---
slug: skills
title: "Skills"
section: "Core concepts"
description: >
  Skills are markdown workflows that give Orbyt specialized modes of
  behavior. Curated and custom skills go through the same policy gate.
toc_hint:
  - "Two tiers"
  - "Activation modes"
  - "Context injection"
  - "Pre-installed skills"
  - "Fork and promote"
---

## Two tiers

| Tier         | Source                          | Trust          |
|--------------|---------------------------------|----------------|
| **Curated**  | Bundled with Orbyt              | Full capabilities (subject to user prompt on first use) |
| **Custom**   | Authored or forked by the user  | Starts in **read-suggest** mode with planner-scope access; capabilities promoted one at a time |

A server-side **policy gate** decides which capabilities a skill may exercise.
The markdown file is no longer the final authority — students can author
skills without turning prompt files into a privilege-escalation path.

## Activation modes

- **Explicit**: user says "activate plan-mode" or clicks a skill.
- **Suggest then confirm**: the assistant proposes a skill before shifting
  into a higher-impact workflow.
- **Always-on (limited)**: only lightweight formatting / tone skills.

High-impact skills must never silently take over.

## Context injection

When a skill is active, its markdown body is inserted into the system prompt
after the soul block and before conversation history. Multiple skills can
coexist if compatible; the budget manager allocates ~500–1000 tokens across
them.

## Pre-installed skills

Seven curated skills ship with v1:

- `plan-mode` — flagship weekly planning workflow.
- `study-helper` — guided study sessions grounded in real coursework.
- `essay-reviewer` — feedback-only review pass.
- `exam-prep` — exam-focused study workflow.
- `citation-helper` — source formatting.
- `explain-like` — re-explain at a different level.
- `scheduling-session` — focused replan loop.

## Fork and promote

Any curated skill can be forked into a custom skill via the in-app **Skill
Editor**. A forked custom skill starts with the same body but in
read-suggest mode. Promotion to full capabilities happens **capability by
capability** — the user explicitly approves each side-effect (calendar
writes, file downloads, etc.).

See the [Skill format](/docs/reference/skill-format) reference for frontmatter
fields and capability declarations.

<!-- PAGE -->
---
slug: smart-planner
title: "Smart planner"
section: "Core concepts"
description: >
  Hybrid AI + deterministic scheduling. The AI decomposes and estimates;
  code places sessions and enforces constraints.
toc_hint:
  - "Why hybrid"
  - "Pipeline"
  - "Streaming UX"
  - "Rescheduling"
  - "Completion check-ins"
---

## Why hybrid

Pure-AI scheduling hallucinates time slots and forgets constraints. Pure
deterministic scheduling can't estimate effort or split tasks usefully.
Orbyt's planner runs the AI for **judgment** (importance, decomposition,
estimation) and runs deterministic code for **placement** (slot finding,
constraint checks, conflict detection).

## Pipeline

```text
1. Task analyzer       (AI)  — priority + time estimation + dependencies
2. Task decomposer     (AI)  — multi-session splits for large tasks
3. Slot finder         (det) — open windows that respect routines + sleep
4. Schedule builder    (det) — places sessions, prevents collisions
5. Plan emitter        (det) — persists to SQLite + streams to UI
6. Reschedule engine   (both)— student-initiated and event-driven
7. Completion handler  (det) — Yes / No / Yes-but check-ins update memory
```

The rolling planning window is **6 weeks**.

## Streaming UX

Plan generation can take 15–30 seconds. The planner emits status events
through the AI harness streaming channel as each stage completes:

```text
"Looking at your Problem Set 3..."
"Checking your schedule for open time..."
"Found 3 evening slots this week..."
"Splitting your essay outline into two sessions..."
```

Raw implementation events are mapped to student-friendly messages before they
reach the UI. Cancel is available throughout — if the student realizes their
routines were wrong mid-plan, they can abort and restart.

## Rescheduling

Two flavors:

- **Student-initiated** — "Can't do this tonight, move it."
- **Event-driven** — Canvas emits `DeadlineChanged`, the reschedule engine
  picks up only the affected sessions instead of redoing the entire plan.

## Completion check-ins

Each session resolves as Yes, No, or Yes-but. Yes-but ("I did it but it took
twice as long") feeds back into the memory system's estimation calibration so
future plans get better.

<!-- PAGE -->
---
slug: canvas-sync
title: "Canvas sync"
section: "Core concepts"
description: >
  Canvas runs as an Orbyt-owned MCP plugin. The local server owns scheduling,
  caching, diffing, and event emission.
toc_hint:
  - "Architecture"
  - "Normalization"
  - "Adaptive sync"
  - "Change events"
  - "Professor patterns"
---

## Architecture

The Canvas MCP owns API access and normalization. The server owns:

- adaptive sync scheduling,
- SQLite cache + snapshot diffing,
- typed change events,
- memory feedback writes.

This split keeps Canvas-specific code in one place while letting the server
react to changes uniformly across features.

## Normalization

All Canvas inputs flow into a single `CourseWorkItem` shape:

```ts
type CourseWorkItem = {
  id: string;
  courseId: string;
  sourceType: "assignment" | "module" | "page" | "announcement";
  sourceId: string;
  title: string;
  description: string;
  effectiveDueAt: ISOString | null;
  sourceDueDateKind: "base" | "override" | "inferred";
  pointsPossible: number | null;
  submissionStatus: "submitted" | "pending" | "overdue" | "graded";
  grade: number | null;
  freshnessStatus: "fresh" | "soft-stale" | "stale";
  cachedAt: ISOString;
  lastVerifiedAt: ISOString;
  rawSourceSnapshot: unknown; // slim debug snapshot
};
```

Official assignments always become `CourseWorkItem`s. Work *inferred* from
Modules, Pages, or Announcements also becomes a `CourseWorkItem` when it
clearly looks plan-eligible. If a student deletes an inferred item, that's a
signal that lowers trust for similar patterns in that course.

## Adaptive sync

| Mode             | Interval  |
|------------------|-----------|
| Active (focused) | 15 minutes |
| Tray (minimized) | 60 minutes |

Sync is **metadata-first** — thin assignment payloads are polled before
re-fetching detail. Crossing midnight marks items soft-stale, not invalid.

## Change events

The diff engine emits typed events:

| Event                | Trigger                                 | Consumed by                                |
|----------------------|-----------------------------------------|--------------------------------------------|
| `AssignmentAdded`    | New assignment in any course            | Notifications, planner, dashboard          |
| `DeadlineChanged`    | Due date modified on an existing item   | Notifications, planner                     |
| `GradePosted`        | New score on a submission               | Notifications, dashboard                   |
| `AnnouncementPosted` | New announcement in any course          | Notifications, dashboard                   |

These are also the trigger surface for user-defined autonomous workflows.

## Professor patterns

Different professors use Canvas differently. The pattern detector starts at
**course level** (e.g. `{ course: "BIO 201", pattern: "posts_in_modules",
confidence: 0.8 }`) and promotes to professor level only after repeated
confirmations across multiple courses or terms.

If Orbyt can't confidently locate a course's real work, it asks the user in
chat — never blocking sync with a modal.

<!-- PAGE -->
---
slug: dashboard
title: "Dashboard"
section: "Core concepts"
description: >
  A desktop command center that reinforces the chat workflow. Priority queue,
  weekly calendar, insight cards, and quick actions.
toc_hint:
  - "Layout"
  - "Sections"
  - "Quick actions"
---

## Layout

The dashboard is a high-density command center that reinforces the chat
surface rather than competing with it. Every dashboard action either opens
chat with prefilled context or updates state that chat can reason about.

## Sections

- **Priority queue** — the next things due, ranked by importance × urgency.
- **Insight cards** — AI-generated weekly summaries from the proactive
  scheduler.
- **Upcoming deadline timeline** — horizontal scroll, two-week window.
- **Weekly planner calendar** — sessions from the [smart planner](/docs/smart-planner).
- **Completion check-ins** — Yes / No / Yes-but cards for finished sessions.
- **Grade overview** — current + projected per course, with trend arrows.
- **Weekly progress** — sessions completed vs. planned.
- **Announcements** — fresh items from any Canvas course.

## Quick actions

Every card has a "Plan this in chat" or "Ask about this" action that opens
chat with the relevant context attached. This is the seam between
dashboard-first behavior and chat-first intent.

<!-- PAGE -->
---
slug: notifications
title: "Notifications & feed"
section: "Core concepts"
description: >
  Feed-first activity model with optional native notifications, quiet hours,
  per-type preferences, and weekly insight cards.
toc_hint:
  - "Why feed-first"
  - "Sources"
  - "Quiet hours"
  - "Weekly insights"
---

## Why feed-first

Students need a durable audit trail of what Orbyt did and why. Native OS
notifications are ephemeral and easy to miss. The feed is the canonical
record; native notifications are an optional layer on top.

## Sources

The notification service listens to:

- Canvas change events (`AssignmentAdded`, `DeadlineChanged`, `GradePosted`,
  `AnnouncementPosted`).
- Planner reminders (session about to start, session moved).
- Autonomous workflow runs.

Each event becomes a durable `activity_feed` row. Native delivery via
Electron `Notification` is opt-in and respects quiet hours and per-type
preferences.

## Quiet hours

Users set a window (default 22:00–08:00 local). Within the window, native
notifications are suppressed; feed records are still written.

## Weekly insights

A weekly insight card is generated every Sunday by the proactive scheduler in
`packages/electron/src/push/`. The card summarizes grade trends, time spent,
and recommendations for the upcoming week.

<!-- PAGE -->
---
slug: file-system
title: "File system"
section: "Core concepts"
description: >
  Local copy-based storage for coursework, research, and generated artifacts.
  Built-in viewers and a SQLite-backed metadata index.
toc_hint:
  - "Where files live"
  - "Viewers"
  - "Metadata index"
  - "AI context extraction"
---

## Where files live

Files imported from Canvas, downloads, and AI-generated artifacts live under
the user's local workspace. Storage is **copy-based** — Orbyt never edits the
original source.

## Viewers

Built-in viewers for:

- **Markdown** (the canonical artifact format)
- **PDF**
- **Plain text, code, JSON**
- **Images** (PNG, JPG, SVG)

External files open in the OS default app.

## Metadata index

A SQLite metadata index tracks title, MIME type, source (Canvas course /
manual / AI artifact), tags, and last-opened time. The index is what powers
search and "show me files about X" in chat.

## AI context extraction

When the user references a file in chat, the file extractor parses it (PDF
text extraction, code summarization, image alt text via vision tools when
available) and inserts a compact summary into the prompt. Full file content
is stored locally and accessible by handle, never inlined.

<!-- PAGE -->
---
slug: plugins/overview
title: "Plugin system (MCP)"
section: "Plugins (MCP)"
description: >
  Hub-and-spoke MCP orchestrator. Electron Main is the hub; each plugin runs
  in an isolated utility process with encrypted credentials.
toc_hint:
  - "Hub and spoke"
  - "Lifecycle"
  - "Security model"
  - "Permissions"
  - "Bundled plugins"
---

## Hub and spoke

The Electron **Main process** is the Hub (Orchestrator). Each MCP plugin is a
Spoke that runs in its own `utilityProcess` sandbox. The renderer and the
local server never talk to plugins directly — every call goes through Main.

```text
React UI  ─┐
            ├──► Local Server  ──► Electron Main  ──► utilityProcess(plugin)
Renderer  ─┘                            │
                                        └─► Local Vault (safeStorage)
```

## Lifecycle

```text
1. Discover     — scan ~/.orbyt/extensions for manifest.json files
2. Validate     — check version, permissions, signature (where applicable)
3. Lazy load    — spawn utilityProcess on first tool call
4. Credential handshake — one-time secure message after spawn
5. tools/list   — Orchestrator caches the tool registry
6. tools/call   — dispatched per AI request, results forwarded to harness
7. Stop         — kill on idle timeout or user disable
```

## Security model

- **Process isolation** — plugins never run in the renderer.
- **No UI network capability** — the renderer cannot `fetch` Canvas or any
  third party. Only the plugin process has outbound network.
- **Encrypted credentials** — secrets are stored via Electron `safeStorage`
  (Keychain on macOS) and handed to the plugin via a **one-time secure
  message**, not env vars.
- **Permission prompting** — the first time a plugin is used, Main shows a
  modal asking the user to approve access to that specific service.

## Permissions

A plugin declares its permissions in `manifest.json`:

```json
{
  "id": "canvas-mcp",
  "name": "Canvas Assistant",
  "version": "1.0.0",
  "entry": "index.js",
  "permissions": ["assignments", "grades", "announcements", "modules"],
  "authType": "manual_token",
  "requiredCredentials": ["CANVAS_TOKEN", "CANVAS_BASE_URL"]
}
```

The Orchestrator enforces declared permissions — the AI cannot call a tool
that requires a permission the user hasn't approved.

## Bundled plugins

v1 ships with:

- `canvas-mcp` — Canvas LMS integration ([details](/docs/plugins/canvas))
- `apple-calendar-mcp` — read/write Apple Calendar
  ([details](/docs/plugins/apple-calendar))
- `notion-mcp` — wrapper around the official Notion MCP
- `template-mcp` — boilerplate for building your own

<!-- PAGE -->
---
slug: plugins/canvas
title: "Canvas MCP"
section: "Plugins (MCP)"
description: >
  The bundled Canvas plugin. Owns Canvas REST access and normalization;
  exposes student-safe read tools and a small set of writes.
toc_hint:
  - "Capabilities"
  - "Tools"
  - "Authentication"
  - "Throttling"
---

## Capabilities

The Canvas MCP is read-first. It uses student-safe endpoints (`/users/self/...`)
and prefers cached reads where possible. A small set of writes are exposed
where they help workflows that humans naturally do anyway (replying in a
discussion, marking a conversation read, downloading a course file).

## Tools

Selected tools — see the in-app **Skill Editor → Tools** view for the full
list.

| Tool                              | Purpose                                            |
|-----------------------------------|----------------------------------------------------|
| `get_my_upcoming_assignments`     | List upcoming assignments across active courses    |
| `get_my_submission_status`        | Submitted / pending / overdue                      |
| `get_my_course_grades`            | Current grades across active courses               |
| `get_my_todo_items`               | Canvas todo items                                  |
| `list_courses`                    | All visible courses                                |
| `get_course_content_overview`     | Summarize pages, modules, and front page           |
| `list_assignments`                | Assignments visible in a course                    |
| `get_assignment_details`          | Detail for a single assignment                     |
| `list_modules` / `list_module_items` | Module structure                                |
| `list_pages` / `get_page_content` | Page content                                       |
| `list_discussion_topics`          | Discussions in a course                            |
| `post_discussion_entry`           | Post a new discussion entry (where allowed)        |
| `list_conversations`              | Canvas inbox conversations                         |
| `mark_conversations_read`         | Bulk mark read                                     |
| `download_course_file`            | Pull a file into the local workspace               |

## Authentication

The Canvas MCP is configured with two credentials:

```text
CANVAS_TOKEN     — personal access token (Canvas > Settings > Approved Integrations)
CANVAS_BASE_URL  — e.g. https://canvas.youruniversity.edu
```

Both are stored in the Orbyt Vault (safeStorage) and delivered to the plugin
process via the one-time secure handshake.

## Throttling

Canvas uses dynamic request-cost throttling. The MCP:

- keeps reads cache-first via the server's `CourseWorkCache`,
- handles pagination via `Link` headers,
- backs off on `429`, inspecting request-cost headers,
- avoids broad parallel scans.

<!-- PAGE -->
---
slug: plugins/apple-calendar
title: "Apple Calendar MCP"
section: "Plugins (MCP)"
description: >
  Read and write the user's Apple Calendar via macOS EventKit. Optional;
  required only if the user wants planned sessions on their device calendar.
toc_hint:
  - "Capabilities"
  - "Permissions"
  - "Sync model"
---

## Capabilities

The Apple Calendar plugin uses macOS EventKit to:

- list calendars,
- read events in a window,
- create / update / delete events,
- subscribe to local change notifications.

## Permissions

On first use, macOS shows the standard calendar permission dialog. Orbyt
additionally surfaces an in-app modal explaining what the integration will do
before requesting OS permission.

## Sync model

Plan-mode never silently writes to the device calendar. The user approves a
**plan** in chat; the planner then asks the calendar plugin to materialize
each session as an event. Reschedules update existing events by their stored
Orbyt session ID, so cancelling a session in Apple Calendar correctly
propagates back into Orbyt.

<!-- PAGE -->
---
slug: plugins/build-your-own
title: "Build your own plugin"
section: "Plugins (MCP)"
description: >
  Bootstrap a custom MCP plugin from the bundled template. Declare
  capabilities, expose tools, and let users install it from disk.
toc_hint:
  - "Start from the template"
  - "Project layout"
  - "Declare tools"
  - "Install locally"
  - "Submit for distribution"
---

## Start from the template

The `template-mcp` package is a runnable boilerplate. Copy it out of the
Orbyt repo or scaffold it via the CLI:

```bash
bun x @orbyt/create-plugin my-plugin
cd my-plugin
bun install
```

## Project layout

```text
my-plugin/
├── manifest.json
├── package.json
├── src/
│   ├── index.ts         # MCP server entry point (stdio transport)
│   └── tools/
│       └── hello.ts     # one file per tool
└── README.md
```

`manifest.json` declares identity and permissions:

```json
{
  "id": "my-plugin",
  "name": "My Plugin",
  "description": "Does a thing",
  "version": "0.1.0",
  "entry": "dist/index.js",
  "permissions": ["read"],
  "authType": "none",
  "requiredCredentials": []
}
```

## Declare tools

Each tool is a typed handler registered with the MCP SDK:

```ts
import { Server } from "@modelcontextprotocol/sdk/server";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";

const server = new Server({ name: "my-plugin", version: "0.1.0" });

server.tool(
  "hello",
  {
    description: "Say hello",
    inputSchema: {
      type: "object",
      properties: { name: { type: "string" } },
      required: ["name"],
    },
  },
  async ({ name }) => ({
    content: [{ type: "text", text: `Hello, ${name}!` }],
  }),
);

await server.connect(new StdioServerTransport());
```

## Install locally

Drop the built plugin into `~/.orbyt/extensions/my-plugin/` and restart
Orbyt. On next chat that triggers a tool call, the Orchestrator will spawn
the plugin and prompt the user for the permissions you declared.

## Submit for distribution

Bundled distribution is post-v1. For now, plugins are local-only. The
manifest schema is forward-compatible with a signed distribution channel.

<!-- PAGE -->
---
slug: reference/soul-format
title: "Soul.md format"
section: "Reference"
description: >
  Schema and conventions for the immutable personality file.
toc_hint:
  - "File location"
  - "Sections"
  - "Example"
---

## File location

```text
soul/SOUL.md
```

Read once at server startup; reloaded on user-initiated edit.

## Sections

The immutable core has five sections:

| Section              | Purpose                                              |
|----------------------|------------------------------------------------------|
| `## Identity`        | One-sentence role and stance                         |
| `## Values`          | Ranked priorities                                    |
| `## Boundaries`      | Hard nos — never write essays, never lie, etc.       |
| `## Tone`            | How the assistant speaks                             |
| `## Session awareness` | What the assistant assumes about persistence       |

## Example

```markdown
## Identity
You are a student's academic assistant. Encouraging but honest.

## Values
- Prioritize the student's understanding over giving answers.
- Respect deadlines — never optimize away a hard date silently.
- Default to plain language.

## Boundaries
- Never write essays for the student.
- Help them plan, outline, and review — not cheat.
- Never claim to remember something you weren't told.

## Tone
Casual but focused. Like a smart friend who's good at school. Short
sentences. No emoji unless the student uses them first.

## Session awareness
You don't remember previous sessions unless memories are loaded for you.
That's okay — if you don't know, ask.
```

<!-- PAGE -->
---
slug: reference/skill-format
title: "Skill format"
section: "Reference"
description: >
  YAML frontmatter + markdown body. Skills declare capabilities; the server
  enforces them.
toc_hint:
  - "Frontmatter"
  - "Body"
  - "Capabilities"
  - "Example"
---

## Frontmatter

```yaml
---
name: plan-mode
description: Plan the student's week from Canvas and routines.
tier: curated            # curated | custom
version: 1.0.0
triggers:
  - "plan my week"
  - "schedule my study time"
activation: suggest      # explicit | suggest | always-on
capabilities:
  - canvas.read
  - planner.write
  - memory.read
budget: 800              # token budget for this skill's body
---
```

## Body

The markdown body **is** the system prompt the skill injects. Write it as
direct instructions to the assistant. Keep it under the declared `budget`.

## Capabilities

Capabilities are declared, not implied. A skill that wants to write the
calendar must declare `calendar.write`; the server will block it otherwise.
Custom skills default to `read-suggest` mode and must be promoted capability
by capability.

| Capability         | Allows                                          |
|--------------------|-------------------------------------------------|
| `canvas.read`      | Reading from the Canvas MCP                     |
| `planner.read`     | Reading the planner state                       |
| `planner.write`    | Creating or modifying planned sessions          |
| `memory.read`      | Reading scoped memory partitions                |
| `memory.write`     | Writing memories                                |
| `calendar.read`    | Reading the device calendar                     |
| `calendar.write`   | Writing to the device calendar                  |
| `files.read`       | Reading files in the workspace                  |
| `files.write`      | Writing files into the workspace                |

## Example

```markdown
---
name: essay-reviewer
description: Give feedback on a draft without rewriting it.
tier: curated
version: 1.0.0
triggers:
  - "review my essay"
activation: suggest
capabilities:
  - files.read
budget: 400
---

You are reviewing a draft. Never rewrite the essay. Identify three things
the draft does well and three things to improve, with specific line
references. End with a single concrete next step.
```

<!-- PAGE -->
---
slug: reference/manifest-schema
title: "Manifest schema"
section: "Reference"
description: >
  Every MCP plugin includes a manifest.json. This is the schema the
  Orchestrator validates against.
toc_hint:
  - "Fields"
  - "authType values"
  - "Example"
---

## Fields

| Field                  | Type     | Required | Notes                                              |
|------------------------|----------|----------|----------------------------------------------------|
| `id`                   | string   | yes      | Slug, lowercase, hyphenated, globally unique       |
| `name`                 | string   | yes      | Display name                                       |
| `description`          | string   | yes      | One-line summary                                   |
| `version`              | semver   | yes      | `MAJOR.MINOR.PATCH`                                |
| `entry`                | string   | yes      | Path to the built entry file, relative to plugin dir |
| `permissions`          | string[] | yes      | Capability strings the plugin will use             |
| `authType`             | enum     | yes      | See below                                          |
| `requiredCredentials`  | string[] | yes      | Env names that must be present at handshake        |
| `icon`                 | string   | no       | Path to PNG, square                                |
| `homepage`             | URL      | no       | Where users can learn more                         |

## `authType` values

| Value              | Use case                                                          |
|--------------------|-------------------------------------------------------------------|
| `none`             | No credentials needed                                             |
| `manual_token`     | User pastes a token (e.g. Canvas)                                 |
| `oauth_pkce`       | Plugin runs an OAuth PKCE flow                                    |
| `os_permission`    | Relies on an OS-level permission (e.g. EventKit)                  |

## Example

```json
{
  "id": "canvas-mcp",
  "name": "Canvas Assistant",
  "description": "Connects to Canvas coursework, grades, and announcements",
  "version": "1.0.0",
  "entry": "index.js",
  "permissions": ["assignments", "grades", "announcements", "modules"],
  "authType": "manual_token",
  "requiredCredentials": ["CANVAS_TOKEN", "CANVAS_BASE_URL"],
  "icon": "canvas-icon.png"
}
```

<!-- PAGE -->
---
slug: reference/rpc-protocol
title: "RPC protocol"
section: "Reference"
description: >
  The UI talks to the local server over a typed WebSocket RPC. Method
  constants live in packages/contracts; the server validates and routes.
toc_hint:
  - "Envelope"
  - "Domains"
  - "Push channels"
  - "Adding a method"
---

## Envelope

Requests and responses both use a JSON envelope with a typed `method`,
`params`, and a correlation `id`. The server validates `params` against an
Effect Schema before dispatch.

```ts
// Request
{ id: "req-1", method: "chat.sendMessage", params: { threadId, text } }

// Response
{ id: "req-1", result: { turnId } }

// Push (server -> client, no id)
{ method: "chat.streaming", params: { turnId, delta: "..." } }
```

## Domains

| Domain         | Examples                                                           |
|----------------|--------------------------------------------------------------------|
| `chat.*`       | `chat.sendMessage`, `chat.interrupt`, `chat.listThreads`           |
| `canvas.*`     | `canvas.syncNow`, `canvas.listCourses`, `canvas.getUpcoming`       |
| `planner.*`    | `planner.generate`, `planner.reschedule`, `planner.complete`       |
| `memory.*`     | `memory.search`, `memory.compact`, `memory.profile`                |
| `skills.*`     | `skills.list`, `skills.activate`, `skills.fork`                    |
| `plugins.*`    | `plugins.list`, `plugins.enable`, `plugins.disable`                |
| `feed.*`       | `feed.list`, `feed.markRead`, `feed.preferences`                   |
| `files.*`      | `files.list`, `files.open`, `files.import`                         |

## Push channels

Server-to-client only. Subscribed via `subscribe(channel)`:

| Channel                      | Carries                                          |
|------------------------------|--------------------------------------------------|
| `chat.streaming`             | Token deltas from the AI harness                 |
| `canvas.syncProgress`        | Sync stage updates                               |
| `planner.progress`           | Planner stage events                             |
| `feed.activity`              | New durable feed rows                            |
| `plugins.lifecycle`          | Plugin started / stopped / errored               |

## Adding a method

1. **Define types** in `packages/contracts/src/schemas/` using Effect Schema.
2. **Add method constant** to `packages/contracts/src/protocol/orchestration.ts`.
3. **Implement handler** in `packages/server/src/ws/Router.ts`.
4. **Add service logic** under `packages/server/src/<domain>/`.
5. **Expose to UI** by adding a typed wrapper to
   `packages/ui/src/rpc/wsRpcClient.ts`.

<!-- PAGE -->
---
slug: reference/cli
title: "CLI commands"
section: "Reference"
description: >
  Developer-facing scripts. Run from the repo root.
toc_hint:
  - "Develop"
  - "Build & package"
  - "Test"
  - "Lint & typecheck"
---

## Develop

```bash
bun run dev:server     # Local server (AI harness, Canvas sync, planner)
bun run dev:ui         # React UI in Vite + Electron shell
bun run dev            # Both, plus Electron main
```

## Build & package

```bash
bun run build          # Build all packages
bun run package        # Build a signed macOS .dmg via electron-builder
```

## Test

```bash
bun test --cwd packages/server         # Server tests (Bun runner)
bun --cwd packages/ui vitest run       # UI tests (Vitest)
```

## Lint & typecheck

```bash
bun run typecheck      # tsc --noEmit across all packages
bun run lint           # ESLint on UI
```
