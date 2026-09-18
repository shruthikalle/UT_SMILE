# UT SMILE

Run `npm install` and `npm run dev`; open http://localhost:3000.
Run `npm run build` for a production build.

## Google Calendar

Create `/Users/srishruthikalle/Documents/Coding Projects/UT_SMILE/.env.local`
using `.env.example`. Set `NEXT_PUBLIC_GOOGLE_CALENDAR_ID` to SMILE's public
calendar ID (Google Calendar Settings → Integrate calendar), allow public event
viewing, and restart the app. The home page displays its live agenda and a
subscription link. Until configured, it directs visitors to GroupMe.

## Content

Copy and the officer roster live in `app/page.tsx`; styles in `app/globals.css`.
Photos in `public/images/` come from the original public UT SMILE Google Site.
Confirm current officers, membership links, and the fundraiser before publication.
The inherited officer roster and 2024 fundraiser are labeled as historical.
