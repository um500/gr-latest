# GR Premium Properties

## Overview
A premium real estate website for GR Premium Properties, showcasing properties in Dubai from top developers. Built with Next.js 16, Sanity CMS, Tailwind CSS 4, and Framer Motion.

## Project Architecture
- **Framework**: Next.js 16 (App Router with Turbopack)
- **CMS**: Sanity (headless CMS for properties, developers, blogs, etc.)
- **Styling**: Tailwind CSS 4 with PostCSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **UI**: Radix UI primitives, Lucide React icons, React Icons
- **Theming**: next-themes (light/dark mode)
- **Forms**: EmailJS for contact/enquiry forms

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
  sanity.client.ts    # Sanity client configuration
  sanity.queries.ts   # GROQ queries for Sanity
  sanity.image.ts     # Sanity image URL builder
  blog.ts             # Blog-related utilities
  communities.ts      # Communities utilities
  utils.ts            # General utilities
  whatsapp.ts         # WhatsApp integration
types/                # TypeScript type definitions
public/               # Static assets
sanity/               # Sanity studio configuration
```

## Environment Variables
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID (stored as secret)
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset name (stored as secret)
- `NEXT_PUBLIC_SANITY_API_VERSION` - Sanity API version (defaults to "2024-01-01")

**Note**: The env var values for project ID and dataset are currently swapped in the secrets (project ID secret holds the dataset value and vice versa). The code in `lib/sanity.client.ts` compensates for this by swapping the references.

## Development
- Dev server runs on port 5000 (`npm run dev`)
- Production build: `npm run build` then `npm run start`

## Recent Changes
- Configured Next.js to run on port 5000 with host 0.0.0.0 for Replit
- Added `allowedDevOrigins` for Replit proxy domains
- Swapped Sanity env var references in code to match user-entered secret values
