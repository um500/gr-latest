# GR Premium Properties

## Overview
A premium real estate website for GR Premium Properties, showcasing properties in Dubai from top developers. Built with Next.js 16, Sanity CMS, Tailwind CSS 4, and Framer Motion. Includes multilingual support for 4 languages (English, Hindi, Arabic, Russian).

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
- **Sanity Studio**: Embedded at `/studio` route via next-sanity

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
  studio/             # Embedded Sanity Studio
components/
  cards/              # Blog and Property card components
  forms/              # Enquiry form
  layout/             # Navbar, Footer, AnnouncementBar
  sections/           # Page sections (Hero, About, CTA, etc.)
  ui/                 # UI primitives (Button, Modal, T component)
lib/
  language-context.tsx # Language provider & useTranslation hook
  sanity.client.ts    # Sanity client configuration
  sanity.queries.ts   # GROQ queries for Sanity
  sanity.image.ts     # Sanity image URL builder
  blog.ts             # Blog-related utilities
  communities.ts      # Communities utilities
  utils.ts            # General utilities
  whatsapp.ts         # WhatsApp integration
messages/             # Translation JSON files (en, hi, ar, ru)
types/                # TypeScript type definitions
public/               # Static assets
sanity/               # Sanity studio schemas
sanity.config.ts      # Root Sanity config for embedded studio
```

## Multilingual System
- **Approach**: React Context + JSON files, no routing changes, no external i18n library
- **Provider**: `lib/language-context.tsx` exports `LanguageProvider` and `useTranslation` hook
- **Languages**: English (en, default), Hindi (hi), Arabic (ar), Russian (ru)
- **Translation files**: `messages/*.json` with flat key-value pairs (e.g., `"nav.home": "Home"`)
- **Usage**: Components call `const { t } = useTranslation()` then `t("key")` for translated text
- **Language selector**: Built into NavbarClient dropdown, wired to context
- **CMS Content**: Sanity schemas have `supportedLanguages` checkbox + localized fields (e.g., `title_hi`, `title_ar`, `title_ru`) with hidden logic; English fallback if translation missing
- **Pattern**: Server components fetch all localized data → Client components use `getLocalized()` helper to select by current language

## Sanity CMS Schemas (Multilingual)
All schemas with text fields include:
- `supportedLanguages` array field (checkboxes for hi, ar, ru)
- Localized fields grouped under "Translations" tab
- Hidden logic: translation fields only visible when language is selected
- Schemas: blog, developer, announcement, property, homepage, project, community, media

## Environment Variables
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID (stored as secret)
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset name (stored as secret)
- `NEXT_PUBLIC_SANITY_API_VERSION` - Sanity API version (defaults to "2024-01-01")

## Development
- Dev server runs on port 5000 (`npm run dev`)
- Production build: `npm run build` then `npm run start`
- Sanity Studio accessible at `/studio` (requires CORS origins in Sanity dashboard)

## CORS Setup Required
For Sanity Studio to work, add these CORS origins in Sanity dashboard (sanity.io/manage → API → CORS origins):
- `https://<your-replit-domain>.sisko.replit.dev` (with credentials)
- `http://localhost:5000` (with credentials)

## Recent Changes
- Restructured multilingual from 10 languages to 4 (en, hi, ar, ru)
- Added `supportedLanguages` checkbox selector to ALL Sanity schemas
- Added language-specific fields to property, homepage, project, community, media schemas
- Organized schema fields with groups (Content + Translations tabs)
- Embedded Sanity Studio at /studio route via next-sanity
- Cleaned up all references to removed languages (es, fr, de, zh, pt, ja)

## User Preferences
- Lightweight translation approach preferred (no next-intl, no routing changes)
- Preserve existing UI, layout, and structure when adding features
- Only 4 languages: English (default), Hindi, Arabic, Russian
