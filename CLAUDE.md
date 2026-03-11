# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev                # Start dev server (builds registry first)
pnpm build              # Production build (builds registry first)
pnpm lint               # Lint with oxlint
pnpm lint:fix           # Lint and auto-fix
pnpm lint:registry      # Lint only registry/ (stricter: --deny-warnings)
pnpm registry:build     # Build registry JSON: build-registry.ts → shadcn build → build-llms.ts
```

Formatter is `oxfmt` (runs via lint-staged on commit). No prettier/eslint — this project uses oxlint + oxfmt.

## Architecture

This is both a **shadcn registry host** (serves component JSON at `/r/*.json`) and a **docs site** (Next.js App Router with MDX).

### Registry layer model

```
Pre-configured maps (registry:component)  — registry/shadcnmaps/maps/*.tsx
    ↓ imports
Core UI primitives (registry:ui)          — registry/shadcnmaps/map*.tsx, types.ts
    ↓ imports
Map data modules (registry:file)          — registry/shadcnmaps/map-data/*.ts
```

All registry source lives under `registry/shadcnmaps/`. The `shadcn build` step reads `registry.json` and outputs `public/r/*.json`.

### Import conventions

- Cross-registry-item imports: `@/registry/shadcnmaps/...` (shadcn CLI rewrites to `@/components/shadcnmaps/...` at install)
- Within a single registry item: relative `./` paths
- Path alias: `@/*` maps to repo root

### Adding a new map

1. Convert JSMaps data: `tsx scripts/convert-map.ts {mapName}` (source: `~/github/JSMaps`)
2. Create map data file in `registry/shadcnmaps/map-data/{name}.ts`
3. Create map component in `registry/shadcnmaps/maps/{name}.tsx`
4. Add entries to `registry.json` (data item + component item with `registryDependencies`)
5. Run `pnpm registry:build` to generate `public/r/*.json`

### Styling

Map colors use CSS variables (`--map-region`, `--map-region-hover`, etc.) registered as Tailwind 4 theme colors via `@theme` in `app/globals.css`. Components use `fill-map-region`, `hover:fill-map-region-hover`, etc.

### Docs

MDX pages in `app/(docs)/`. Navigation defined in `lib/navigation.ts`. LLM-readable docs auto-generated to `public/llms*.txt` and `public/llms/*.md` via `scripts/build-llms.ts` (runs as part of `registry:build` and on MDX commit via lint-staged).

## UI components

Always use [shadcn/ui](https://ui.shadcn.com/) components for the docs site UI. When you need a new component, use the `/shadcn` skill to add it (e.g. `/shadcn add button`). Do not build custom UI primitives (buttons, cards, dialogs, inputs, etc.) when a shadcn equivalent exists.

## Lessons learned

- The installed shadcn Select component uses Base UI (`@base-ui/react/select`), not Radix — `onValueChange` has signature `(value: string | null, eventDetails) => void`, so handlers must accept `string | null`.
- Run `pnpm lint` after every file change to catch type errors early.
- The shadcn Combobox uses Base UI (`@base-ui/react/combobox`). For string item values, the input displays the raw `value` prop by default — use `itemToStringLabel` on the Root to map values to display labels (also fixes filtering).
- Run `pnpm vitest run` after any change to registry components
