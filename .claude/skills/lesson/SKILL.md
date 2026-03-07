---
name: lesson
description: Record a lesson learned into the CLAUDE.md "Lessons learned" section. Use when the user says "remember this", "add a lesson", "update CLAUDE.md with what we learned", or invokes /lesson. Args are the lesson text; if omitted, derive it from recent conversation context.
tools: Read, Edit
---

# Lesson Recorder

Add a concise lesson learned to `CLAUDE.md` so it persists across sessions.

## Steps

1. **Determine the lesson** — use `$ARGS` if provided; otherwise infer from the most recent problem solved or pattern discovered in the conversation.

2. **Read CLAUDE.md** to find the `## Lessons learned` section.

3. **Write a single bullet point** that captures the lesson. Keep it:
   - One sentence, actionable, specific to this project
   - No filler ("remember to...", "always...", "make sure...") — just the fact
   - Focused on non-obvious patterns, gotchas, or decisions that will recur

4. **Edit CLAUDE.md** — append the bullet inside `## Lessons learned`. If the section only has the placeholder comment `<!-- Update this section... -->`, replace that comment with the bullet. Otherwise append after the last existing bullet.

5. **Confirm** by showing the user exactly what was added.

## Format

Each lesson is a single markdown bullet:

```markdown
- `pnpm lint` must be run after every file change; lint errors from Base UI type signatures (e.g. `string | null` for Select `onValueChange`) require handler updates, not cast workarounds.
```

## What makes a good lesson

- Captures something that tripped up the session that code review or docs wouldn't catch
- Specific enough to act on (names the file, tool, or pattern)
- Short enough to scan at a glance

## What to skip

- Things already documented in CLAUDE.md
- One-off fixes unlikely to recur
- Generic best practices (no shadcn components → use shadcn is already there)
