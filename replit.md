# GR Premium Properties

## Overview
A premium real estate website for GR Premium Properties, showcasing properties in Dubai from top developers. Built with Next.js 16, Sanity CMS, Tailwind CSS 4, and Framer Motion. Includes multilingual support for 10 languages.

## Project Architecture
- **Framework**: Next.js 16 (App Router with Turbopack)
- **CMS**: Sanity (headless CMS for properties, developers, blogs, etc.)
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **UI**: Radix UI primitives, Lucide React icons, React Icons
- **Theming**: next-themes (light/dark mode)
- **Forms**: EmailJS for contact/enquiry forms
- **i18n**: Custom React Context + JSON translation files (no external library)

## Project Structure
```
app/                  # Next.js App Router pages
  about/              # About page
  blog/               # Blog listing and detail pages
  contact/            # Contact page
  developers/         # Developer listing and detail pages
  how-it-works/       # How it works page
  Media/              # Media gallery page
  properties/         # Property listing and detail pages
  announcement/       # Announcement pages
components/
  cards/              # Blog and Property card components
  forms/              # Enquiry form
  layout/             # Navbar, Footer, AnnouncementBar
  sections/           # Page sections (Hero, About, CTA, etc.)
  ui/                 # UI primitives (Button, Modal, etc.)
lib/
  language-context.tsx # Language provider & useTranslation hook
  sanity.client.ts    # Sanity client configuration
  sanity.queries.ts   # GROQ queries for Sanity
  sanity.image.ts     # Sanity image URL builder
  blog.ts             # Blog-related utilities
  communities.ts      # Communities utilities
  utils.ts            # General utilities
  whatsapp.ts         # WhatsApp integration
messages/             # Translation JSON files (en, hi, es, fr, de, zh, ar, pt, ru, ja)
types/                # TypeScript type definitions
public/               # Static assets
sanity/               # Sanity studio configuration
```

## Multilingual System
- **Approach**: React Context + JSON files, no routing changes, no external i18n library
- **Provider**: `lib/language-context.tsx` exports `LanguageProvider` and `useTranslation` hook
- **Languages**: English (en), Hindi (hi), Spanish (es), French (fr), German (de), Chinese (zh), Arabic (ar), Portuguese (pt), Russian (ru), Japanese (ja)
- **Translation files**: `messages/*.json` with flat key-value pairs (e.g., `"nav.home": "Home"`)
- **Usage**: Components call `const { t } = useTranslation()` then `t("key")` for translated text
- **Language selector**: Built into NavbarClient dropdown, wired to context

## Environment Variables
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID (stored as secret)
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset name (stored as secret)
- `NEXT_PUBLIC_SANITY_API_VERSION` - Sanity API version (defaults to "2024-01-01")

## Development
- Dev server runs on port 5000 (`npm run dev`)
- Production build: `npm run build` then `npm run start`

## Recent Changes
- Configured Next.js to run on port 5000 with host 0.0.0.0 for Replit
- Added `allowedDevOrigins` for Replit proxy domains
- Implemented complete multilingual system (10 languages, 187 translation keys each)
- Updated 12+ components to use useTranslation hook
- Fixed Sanity CMS credentials (project ID: zz0dttra, dataset: production)

## User Preferences
- Lightweight translation approach preferred (no next-intl, no routing changes)
- Preserve existing UI, layout, and structure when adding features
