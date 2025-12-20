# Sneaker project

Sneaker project is a fully client-facing sneaker configurator built with the Next.js App Router. Authenticated designers can create, preview, and save sneaker colorways, while guests can still experiment with the tool and export high-quality PDFs of their work when authenticated.

# Vercel link to application

https://calle-sneaker.vercel.app/

## Tech Stack

| Layer                | Tools                                                       |
| -------------------- | ----------------------------------------------------------- |
| Framework & Language | Next.js 16 (App Router) • React 19 • TypeScript             |
| Styling & UI         | MUI v7 • Emotion • Roboto • Anonymous Pro                   |
| Data & Auth          | Prisma ORM • MongoDB Atlas • NextAuth.js • bcrypt (hashing) |
| Rendering & Export   | Custom canvas renderer • jsPDF                              |
| Tooling              | ESLint 9 • TypeScript 5 • Prisma CLI • tsx for seeding      |
| Validation           | Zod                                                         |

### Data model

Prisma models (`prisma/schema.prisma`) define `User`, `Design`, and `Sneaker`. `Design` documents store a JSON configuration for each colorable sneaker area and belong to a `User`. `Sneaker` only serves purpose for seeding.

## Application Flow & Key Components

### Authentication & Layout

- `src/app/providers.tsx` wires up MUI’s theme cache and wraps the app.
- `next-auth` handles sessions on both the server (`getServerSession`) and client, enabling user-aware rendering without manual token plumbing.

### Designer Workspace

- `src/app/designer/designer.tsx` is a server component that determines if the visitor is logged in and renders `DesignerClient` with that flag.
- `src/app/designer/designer.client.tsx` is the heart of the configurator:
  - Maintains the sneaker `config`, name, and active design area with React state.
  - Persists drafts to `localStorage`, letting builders resume unfinished work.
  - Uses the MUI `Stepper` and responsive mobile-friendly controls to swap between sneaker sections cross-platform.
  - Saves new or existing designs via the server actions in `src/app/profile/designs/actions.ts`, which call Prisma to create/update documents.
  - Surfaces “Log in” prompt via a MUI `Button` that links to `/auth/login` when the visitor is anonymous.
  - If anonymous, the user can still make a design but will have to sign up to save & export.

### SneakerPreview

- `src/app/designer/SneakerPreview.tsx` layers each mask defined in `src/app/designer/areas.ts` using CSS mask and blend properties.
- Each design area has both a mask and a shading image, giving the preview realistic depth and texture.

## Inspired page

- `src\app\inspired\page.tsx` Displays images from pexels with a handtailored search query. The user can browse the page for inspiration and has the ability to see the author of the images. The images are fetched via API.

### Profile & Saved Designs

- `src/app/profile/page.tsx` fetches the logged-in user’s designs server-side and renders `ProfileDesignList`.
- `src/app/profile/profileDesignList.tsx` displays cards with metadata, a `SneakerPreview`, and actions to edit, delete, or download the design as a PDF. Deleting uses the same server actions module, and the dialog state is fully client-managed.

### PDF Export Pipeline

- `src/app/profile/exportDesignPdf.ts` owns the entire export flow:
  - Normalizes any persisted JSON config to a complete `SneakerConfig` shape (ensuring default colors for missing areas).
  - Lazily loads mask/shading images and caches them in memory.
  - Renders a high-resolution canvas, including a radial-gradient backdrop to spotlight the sneaker.
  - Draws each colored area + shading into a temporary canvas before compositing onto the main buffer.
  - Encodes the canvas as JPEG (quality 0.85) to keep files small, embeds it into a jsPDF document, and appends metadata (design id, designer name & config).
- `ProfileDesignList` simply calls `exportDesignPdf(design)` when the user taps “Download PDF.”

## Development

# Install dependencies

npm install

# Run locally

npm run dev

# Type-check and lint

npm run lint

# Prisma helpers

npm run generate # regenerate client
npm run push # push schema changes
npm run seed # seed the database via prisma/seed.ts

### Environment variables

Create a `.env` file with at least:

```
DATABASE_URL="mongodb+srv://..."
NEXTAUTH_SECRET="your-strong-secret"
NEXTAUTH_URL="http://localhost:3000"
PEXELS_API_KEY="" //For fetching images to inspired page.
```

Any OAuth providers configured in NextAuth will require their own IDs/secrets.

## UI & UX Notes

- Layouts use `Container maxWidth="lg"` for consistent page width and a centered composition, regardless of screen size.
- The designer view adapts between desktop and mobile: stepper controls collapse into a horizontal scrollable list on small screens, and the SneakerPreview scales accordingly.
- Mask layering mimics the texture and depth of a real shoe by stacking a flat color fill underneath a shading pass. This approach is shared between the live preview and the PDF export pipeline to guarantee parity.

## Assets

Mask and shading images originate from: https://clipart-library.com/clip-art/transparent-nike-12.htm. Keep these files in `/public/masks/*` if you add new sneaker parts.

## Project critera (Academic purposes)

• Design och prototyping:
[] Implementera interaktivitet i prototypen för att demonstrera hur användaren
interagerar med produkten.

[x] Prototypen ska vara väldigt lik den färdiga produkten.
[x] Designen följer, utan undantag, WCAG 2.1-standarder för nivå A och AA.

# Applikationsutveckling:

[] Använd en state management-lösning som till exempel Redux eller Pinia för att
hantera global state i applikationen.
[x] Koden följer, utan undantag, WCAG 2.1-standarder för nivå A och AA.
[x] Testad i verktyget WebAIM WAVE utan fel på error- och varnings-nivåer.

# Optimering:

[x] Produkten ska vara optimerad och ha tillräckligt stora filfomrat,
återanvända kod och komponenter samt använda optimeringstekniker där det
behövs.
[x] Implementera CRUD-operationer, Create, Read, Update, Delete, med säker
hantering av användardata.

[x] Implementera en säker autentiseringslösning för databasen, till exempel OAuth,
JWT (JSON Web Tokens) eller Firebase Authentication, för att säkerställa att
endast behöriga användare kan få åtkomst till och hantera data. Detta skyddar
användardata genom att verifiera identiteten innan CRUD-operationer tillåts.

# För webbapp:

[x] Produkten ska vara fullt responsiv och anpassa sig dynamiskt till
olika skärmstorlekar och enheter, från mobiltelefoner till större skärmar.
Gränssnittet ska ge en optimal användarupplevelse oavsett enhet, med korrekt
layout och funktionalitet för både små och stora skärmar.

[x] Skriv en tydlig README som inte bara beskriver projektet och hur det körs, men
som också förklarar projektets tekniska val och hur olika funktioner
implementerats.

# Versionshantering:

[x] Arbeta med feature branches och gör pull requests innan du mergar till
baskoden för att säkerställa ordning och spårbarhet.
[x] Dokumentera varje steg i din commit-historik med tydliga och informativa
commit-meddelanden.

# Deploy:

[x] Automatiserat flöde för bygge och deploy av applikationen, där byggprocessen
automatiskt triggar publicering till en produktionsmiljö utan manuell
inblandning, vilket säkerställer effektivitet och kontinuerlig leverans.

[x] Slutrapport, genomför en djupgående analys i slutrapporten, 3-6 A4 sidor:
I rapporten, gå igenom varje steg i din arbetsprocess och reflektera över de
utmaningar du stött på. Beskriv hur du överkommit tekniska och
designrelaterade hinder och vad du lärt dig.
Inkludera detaljer om de verktyg och tekniker du använt, och varför du valt dessa
över andra alternativ, till exempel varför du valde React istället för Vue.

[x] Förklara och motivera dina beslut inom UX/UI-design och tillgänglighet, och hur
dessa har förbättrat användarupplevelsen.

[x] Helhetsupplevelsen: Applikationen ska, utöver att uppfylla G-kraven, erbjuda en
professionell och optimerad användarupplevelse med minimala laddningstider, tydlig
återkoppling vid alla användarinteraktioner samt vara testad för enhetlig funktion och
design på flera enheter och webbläsare.
