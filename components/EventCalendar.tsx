import { Arrow, CalendarGlyph, ClockGlyph, PinGlyph } from "@/components/icons";
import { calendarId, getUpcomingEvents } from "@/lib/calendar";
import { links } from "@/lib/site";

const emptyMessages = {
  ok: "Nothing on the calendar just yet. New events show up here as soon as they’re planned.",
  unconfigured: "Our event calendar is almost ready.",
  error: "Our event calendar is taking a quick break.",
};

export default async function EventCalendar() {
  const result = await getUpcomingEvents();

  return (
    <div className="overflow-hidden rounded-3xl border-2 border-navy bg-white shadow-sticker">
      <div className="flex items-center gap-3 bg-navy px-5 py-4 text-cream">
        <CalendarGlyph className="h-6 w-6 text-yellow" />
        <h3 className="font-display text-xl font-extrabold">
          The SMILE calendar
        </h3>
        <span className="ml-auto hidden text-xs font-semibold uppercase tracking-widest text-navy-soft sm:inline">
          Austin time
        </span>
      </div>

      {result.status === "ok" && result.events.length > 0 ? (
        <ol className="divide-y-2 divide-navy/10">
          {result.events.map((event) => (
            <li key={event.id} className="flex gap-4 px-5 py-4 sm:gap-5">
              <time
                dateTime={event.isoDate}
                className="flex w-16 shrink-0 flex-col items-center rounded-2xl border-2 border-navy bg-yellow-soft py-2 leading-none"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-red-ink">
                  {event.month}
                </span>
                <span className="mt-1 font-display text-3xl font-extrabold">
                  {event.day}
                </span>
                <span className="mt-1 text-xs font-semibold text-muted">
                  {event.weekday}
                </span>
              </time>
              <div className="min-w-0 self-center">
                <h4 className="font-display text-lg font-bold leading-snug">
                  {event.url ? (
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-yellow decoration-[3px] underline-offset-4 transition-colors hover:decoration-red"
                    >
                      {event.title}
                    </a>
                  ) : (
                    event.title
                  )}
                </h4>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted">
                  <ClockGlyph className="h-4 w-4 shrink-0" />
                  {event.when}
                  {event.repeats && (
                    <span className="ml-1 rounded-full bg-green-soft px-2 py-0.5 text-xs font-bold text-green">
                      Repeats
                    </span>
                  )}
                </p>
                {event.location && (
                  <p className="mt-1 flex items-start gap-1.5 break-words text-sm text-muted">
                    <PinGlyph className="mt-0.5 h-4 w-4 shrink-0" />
                    {event.location}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <div className="px-6 py-10 text-center">
          <p className="font-hand text-4xl font-bold text-red-ink">
            {result.status === "ok" ? "Stay tuned!" : "See you soon!"}
          </p>
          <p className="mx-auto mt-3 max-w-sm font-display text-xl font-bold">
            {emptyMessages[result.status]}
          </p>
          <p className="mx-auto mt-2 max-w-sm text-muted">
            Join GroupMe for the latest meeting and event details.
          </p>
        </div>
      )}

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t-2 border-navy/10 bg-cream px-5 py-4 text-sm font-bold">
        {calendarId && (
          <a
            href={`https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(calendarId)}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5"
          >
            Add to Google Calendar
            <Arrow
              direction="external"
              className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        )}
        <a
          href={links.groupMe}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5"
        >
          Get updates on GroupMe
          <Arrow
            direction="external"
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
    </div>
  );
}
