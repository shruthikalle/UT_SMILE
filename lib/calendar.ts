// Reads upcoming events from SMILE's public Google Calendar using the Google
// Calendar API (v3 events.list). Runs on the server only, so the API key is
// never sent to the browser.

const TIME_ZONE = "America/Chicago";
const LOOKAHEAD_DAYS = 365;
const DAY_MS = 24 * 60 * 60 * 1000;

export const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;

type GoogleEventTime = { date?: string; dateTime?: string };
type GoogleEvent = {
  id: string;
  status?: string;
  summary?: string;
  location?: string;
  htmlLink?: string;
  recurringEventId?: string;
  start: GoogleEventTime;
  end: GoogleEventTime;
};

export type SmileEvent = {
  id: string;
  title: string;
  location?: string;
  url?: string;
  repeats: boolean;
  isoDate: string;
  month: string;
  day: string;
  weekday: string;
  when: string;
};

export type CalendarResult =
  | { status: "unconfigured" }
  | { status: "error" }
  | { status: "ok"; events: SmileEvent[] };

export async function getUpcomingEvents(): Promise<CalendarResult> {
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  if (!calendarId || !apiKey) return { status: "unconfigured" };

  const now = Date.now();
  const params = new URLSearchParams({
    key: apiKey,
    timeMin: new Date(now).toISOString(),
    timeMax: new Date(now + LOOKAHEAD_DAYS * DAY_MS).toISOString(),
    singleEvents: "true",
    orderBy: "startTime",
    maxResults: "250",
    fields:
      "items(id,status,summary,location,htmlLink,recurringEventId,start,end)",
  });
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId)}/events?${params}`;

  try {
    const res = await fetch(url, { next: { revalidate: 900 } });
    if (!res.ok) {
      console.error(`Google Calendar request failed with ${res.status}`);
      return { status: "error" };
    }
    const data: { items?: GoogleEvent[] } = await res.json();
    // Recurring events (like a weekly GM) come back as one item per
    // occurrence. Keep only the next occurrence so they don't crowd out
    // everything else.
    const seriesSeen = new Set<string>();
    const events = (data.items ?? []).filter((event) => {
      if (event.status === "cancelled") return false;
      if (!event.recurringEventId) return true;
      if (seriesSeen.has(event.recurringEventId)) return false;
      seriesSeen.add(event.recurringEventId);
      return true;
    });
    return { status: "ok", events: events.map(toSmileEvent) };
  } catch (error) {
    console.error("Google Calendar request failed", error);
    return { status: "error" };
  }
}

// All-day events only have a calendar date. Pin them to noon UTC and format in
// UTC so the day never shifts; timed events are formatted in Austin time.
function parseTime(time: GoogleEventTime) {
  if (time.date) {
    return { date: new Date(`${time.date}T12:00:00Z`), timeZone: "UTC" };
  }
  return { date: new Date(time.dateTime ?? ""), timeZone: TIME_ZONE };
}

function format(
  date: Date,
  timeZone: string,
  options: Intl.DateTimeFormatOptions,
) {
  return new Intl.DateTimeFormat("en-US", { timeZone, ...options }).format(
    date,
  );
}

function describeWhen(event: GoogleEvent) {
  const start = parseTime(event.start);
  const end = parseTime(event.end);

  if (event.start.date) {
    // Google's all-day end date is exclusive.
    const lastDay = new Date(end.date.getTime() - DAY_MS);
    if (lastDay.getTime() <= start.date.getTime()) return "All day";
    return `All day, through ${format(lastDay, "UTC", { weekday: "short", month: "short", day: "numeric" })}`;
  }

  const sameDay =
    format(start.date, TIME_ZONE, { dateStyle: "short" }) ===
    format(end.date, TIME_ZONE, { dateStyle: "short" });
  // Austin's UTC offset is always whole hours, so UTC minutes match local ones.
  const onTheHour =
    start.date.getUTCMinutes() === 0 && end.date.getUTCMinutes() === 0;
  const range = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    hour: "numeric",
    ...(onTheHour ? {} : { minute: "2-digit" }),
    ...(sameDay ? {} : { month: "short", day: "numeric" }),
  });
  return range.formatRange(start.date, end.date);
}

function toSmileEvent(event: GoogleEvent): SmileEvent {
  const { date, timeZone } = parseTime(event.start);
  return {
    id: event.id,
    title: event.summary?.trim() || "SMILE event",
    location: event.location?.trim() || undefined,
    url: event.htmlLink,
    repeats: Boolean(event.recurringEventId),
    isoDate: event.start.date ?? event.start.dateTime ?? "",
    month: format(date, timeZone, { month: "short" }),
    day: format(date, timeZone, { day: "numeric" }),
    weekday: format(date, timeZone, { weekday: "short" }),
    when: describeWhen(event),
  };
}
