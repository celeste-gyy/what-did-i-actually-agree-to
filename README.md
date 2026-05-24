# What Did I Actually Agree To?

## Project Overview

This project is a calm, interactive onboarding prototype that explores how consent flows can become more understandable without turning into a legal lesson or a fear-based privacy tool.

Most users click “Agree” without fully noticing how recommendation systems, AI training, personalization, and behavioral data may shape their digital experience. This prototype asks whether permission understanding can be improved through gentle interaction, progressive disclosure, and a quieter pacing model.

## Core Question

How can a consent experience help users understand what they are actually allowing—without becoming heavy, moralizing, or overly technical?

## Screenshots

Add final screenshots here once capture assets are prepared.

- Home / entry screen
- Permission exploration flow
- Final awareness view

## Live Demo

Current demo is local-only.

```bash
npm install
npm run dev
```

Open the app in your browser at `http://localhost:3000`.

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS
- Framer Motion

## Why This Project

This project sits at the intersection of interaction design, product thinking, and digital ethics. It treats consent not as a legal checkbox, but as a moment where users can begin to notice what a product is actually optimizing for.

The goal is not to scare users. It is to make the tradeoff between convenience, personalization, and data use easier to see.

## Interaction Design Direction

- Progressive disclosure instead of dense explanation
- Calm pacing and subtle motion
- A human-centered tone that stays grounded and non-judgmental
- Permission exploration framed as awareness, not education or enforcement
- A reflective ending that feels quiet, not like a task or scorecard

## Local Development

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Folder Structure

```text
app/
  page.tsx
  reflection/page.tsx
  permission/[slug]/page.tsx
  permission/[slug]/permission-explorer.tsx
lib/
  i18n.ts
  consent-storage.ts
```

## Future Exploration

- Add richer scenario-based examples for recommendation and inference behavior
- Refine the final awareness flow with slightly more breathing room
- Test the prototype with a more focused content hierarchy for portfolio presentation
