# UT SMILE

Run `npm install` and `npm run dev`; open http://localhost:3000.
Run `npm run build` for a production build.

## Google Calendar

The "SMILE calendar" on the home page lists upcoming events in date order using
the Google Calendar API. To connect it:

1. In Google Calendar, open SMILE's calendar settings. Under Access permissions,
   turn on "Make available to public". Under Integrate calendar, copy the
   Calendar ID.
2. In the [Google Cloud Console](https://console.cloud.google.com/), enable the
   Google Calendar API, then create an API key (APIs & Services → Credentials).
   Restrict the key to the Google Calendar API.
3. Create `.env.local` in the project root using `.env.example`, set
   `NEXT_PUBLIC_GOOGLE_CALENDAR_ID` and `GOOGLE_CALENDAR_API_KEY`, and restart
   the app. Add the same two variables to your hosting provider.

The list covers the next 12 months and refreshes every 15 minutes. Recurring
events show only their next occurrence. The API key is only used on the server.
Until both values are set, the calendar directs visitors to GroupMe.

## Content

Copy, photos, and the officer roster live in `app/page.tsx`; links, the
Instagram handle, and navigation live in `lib/site.ts`. Styling uses Tailwind.
Brand colors and fonts follow the SMILE Social Media Branding Guide and are set
in `tailwind.config.ts` and `app/layout.tsx`. The logo is
`public/images/smile-logo.png`.
Photos in `public/images/` come from the original public UT SMILE Google Site.
Confirm current officers, membership links, and the fundraiser before publication.
The inherited officer roster and 2024 fundraiser are labeled as historical.
