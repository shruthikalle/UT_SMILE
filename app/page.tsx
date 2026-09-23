import Image from "next/image";
import EventCalendar from "@/components/EventCalendar";
import ScrollReveal from "@/components/ScrollReveal";
import SiteHeader from "@/components/SiteHeader";
import {
  Arrow,
  DoodleArrow,
  Flower,
  Heart,
  InstagramGlyph,
  Squiggle,
  Star,
  SwoopArrow,
} from "@/components/icons";
import { instagramHandle, links } from "@/lib/site";

// Re-render at most every 15 minutes so the calendar stays current.
export const revalidate = 900;

const officers = [
  ["Miya Walker", "President", "Neuroscience · Art History"],
  ["Shashank Shah", "VP & Brave the Shave Coordinator", "Biology · Pre-med"],
  ["Marina Carlos", "Treasurer", "Human Biology · Pre-med"],
  ["Chloe Pineda", "Volunteer Coordinator", "Nursing · Healthcare Innovation"],
  ["Oscar Shao", "Vice President", "Civil Engineering · Communication"],
];
const officerBorders = [
  "border-navy",
  "border-green",
  "border-red",
  "border-yellow",
  "border-navy",
];

const eventTypes = [
  {
    tag: "Get to know us",
    title: "General meetings",
    body: "Meet the crew, hear what’s coming up, and find your next way to get involved.",
    icon: <Heart className="h-7 w-7 text-red" />,
    tone: "bg-red-soft",
  },
  {
    tag: "Do a little good",
    title: "Volunteer together",
    body: "Hands-on opportunities to make a difference for children in our Austin community.",
    icon: <Flower className="h-7 w-7 text-green" />,
    tone: "bg-green-soft",
  },
  {
    tag: "Stay a little longer",
    title: "Socials & fundraising",
    body: "New friends, shared meals, and a good cause to rally around.",
    icon: <Star className="h-7 w-7 text-navy" />,
    tone: "bg-navy-soft",
  },
];

const opportunities = [
  {
    title: "Make room for play.",
    category: "Children & community",
    body: "Help kids learn, create, and just be kids. Our volunteering history includes Dell Children’s, the Thinkery, and Creative Action.",
    link: "Explore volunteering",
    image: "gallery-5",
    alt: "SMILE members holding up paintings they made together",
    border: "border-green",
  },
  {
    title: "Be in their corner.",
    category: "Mentoring & education",
    body: "A little encouragement can go a long way. Discover tutoring and mentoring opportunities with schools and community programs in Austin.",
    link: "Find your next opportunity",
    image: "gallery-4",
    alt: "A group of SMILE friends taking a selfie outdoors",
    border: "border-navy",
  },
];

const moments = [
  {
    image: "gallery-1",
    alt: "SMILE members sharing dessert under a big Austin sign",
    caption: "Good company comes with the territory.",
    tilt: "-rotate-2",
  },
  {
    image: "gallery-2",
    alt: "SMILE members crowded around a long table for dinner",
    caption: "Always room for one more at the table.",
    tilt: "rotate-1",
  },
  {
    image: "gallery-0",
    alt: "Three SMILE members smiling over burgers and pasta",
    caption: "From the SMILE photo archives.",
    tilt: "-rotate-1",
  },
];

const container = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8";
const eyebrow = "text-sm font-bold uppercase tracking-[0.14em] text-red-ink";
const sectionTitle =
  "font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl";

function ExternalLink({
  href,
  children,
  className = "",
  underline = "decoration-yellow",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  underline?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex items-center gap-1.5 font-bold underline decoration-[3px] underline-offset-[6px] transition-colors hover:decoration-red ${underline} ${className}`}
    >
      {children}
      <Arrow
        direction="external"
        className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full bg-yellow px-5 py-3 font-bold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>

      <div className="bg-navy text-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-2 px-4 py-3 text-center sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
          <p className="hidden max-w-[17rem] text-balance text-left text-xs font-semibold uppercase tracking-widest lg:block">
            Students Making Impacts Through Love &amp; Empathy
          </p>
          <p className="font-display text-xl font-extrabold uppercase tracking-wide text-yellow sm:text-2xl lg:text-3xl">
            First GM coming soon!!!
          </p>
          <p className="hidden text-right text-xs font-semibold uppercase tracking-widest lg:block">
            Austin, Texas · Est. 2008
          </p>
        </div>
      </div>

      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section id="home" className="overflow-hidden">
          <div
            className={`${container} grid items-center gap-14 pb-20 pt-10 sm:pt-14 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-20`}
          >
            <div>
              <p className={`${eyebrow} flex items-center gap-2`}>
                <Heart className="h-4 w-4 shrink-0 text-red" />
                <span>
                  A little of your time. <br className="sm:hidden" />A lot of
                  good.
                </span>
              </p>
              <h1 className="mt-5 font-display text-[3.25rem] font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-[4.75rem]">
                Good people.
                <br />
                Real impact.
                <br />
                <span className="relative inline-block text-red">
                  Big smiles.
                  <Squiggle className="absolute -bottom-3 left-0 h-4 w-full text-yellow" />
                </span>
              </h1>
              <p className="mt-9 max-w-xl text-lg leading-relaxed sm:text-xl">
                Childhood cancer awareness + pre-med opportunities.{" "}
                <strong className="font-bold text-green">
                  Clinical Volunteering + shadowing coming soon!
                </strong>
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a
                  href="#join"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-navy bg-red px-6 py-3.5 font-bold text-white shadow-sticker transition hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#1B3676]"
                >
                  Come make a difference
                  <Arrow className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#events"
                  className="group inline-flex items-center gap-1.5 font-bold underline decoration-yellow decoration-[3px] underline-offset-[6px] hover:decoration-red"
                >
                  See what’s happening
                  <Arrow
                    direction="down"
                    className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                  />
                </a>
              </div>
              <p className="mt-10 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-muted">
                <Flower className="h-5 w-5 text-green" />
                Every major. Every background. Everyone welcome.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rotate-2 rounded-[2rem] bg-yellow sm:translate-x-5 sm:translate-y-5"
              />
              <div className="group relative -rotate-1 overflow-hidden rounded-[2rem] border-4 border-navy transition-transform duration-500 hover:rotate-0">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/gallery-3.jpg"
                    alt="SMILE members posing together in front of a colorful mural"
                    fill
                    priority
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <p className="absolute -top-12 right-3 flex items-start font-hand text-3xl font-bold text-navy sm:right-8">
                <SwoopArrow className="mt-3 h-11 w-12 text-red" />
                that’s us!
              </p>
              <div className="absolute -bottom-9 -left-2 rounded-full border-4 border-navy bg-cream p-1.5 shadow-sticker transition-transform duration-300 hover:-rotate-6 sm:-bottom-12 sm:-left-8">
                <Image
                  src="/images/smile-logo.png"
                  alt="UT SMILE logo"
                  width={480}
                  height={470}
                  sizes="144px"
                  className="h-24 w-24 sm:h-32 sm:w-32"
                />
              </div>
              <Star className="absolute -right-3 bottom-10 h-10 w-10 rotate-12 text-red sm:-right-6" />
            </div>
          </div>
        </section>

        {/* Mission strip */}
        <div className="border-y-2 border-navy bg-yellow">
          <ul
            className={`${container} flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 font-display text-lg font-extrabold uppercase tracking-wide sm:text-2xl`}
          >
            <li>Show up.</li>
            <li aria-hidden="true">
              <Heart className="h-6 w-6 text-red" />
            </li>
            <li>Give back.</li>
            <li aria-hidden="true">
              <Star className="h-6 w-6 text-navy" />
            </li>
            <li>Make someone smile.</li>
            <li aria-hidden="true">
              <Flower className="h-6 w-6 text-green" center="#F9FBE7" />
            </li>
          </ul>
        </div>

        {/* Mission */}
        <section
          aria-labelledby="mission-title"
          className={`${container} grid gap-8 py-20 sm:py-24 lg:grid-cols-12 lg:gap-12`}
          data-reveal
        >
          <div className="lg:col-span-5">
            <p className={eyebrow}>More than a student org</p>
            <h2 id="mission-title" className={`${sectionTitle} mt-4`}>
              A big campus. A close-knit community.
            </h2>
          </div>
          <div className="grid gap-6 text-lg leading-relaxed text-muted sm:grid-cols-2 lg:col-span-7 lg:pt-10">
            <p>
              Since 2008, SMILE has brought students at The University of Texas
              at Austin together around one simple idea: children deserve to
              experience childhood to the fullest.
            </p>
            <p>
              We turn that belief into action through volunteering, fundraising
              for pediatric cancer research, and building friendships along the
              way. You bring yourself. We’ll help you find your place.
            </p>
          </div>
        </section>

        {/* Events */}
        <section
          id="events"
          aria-labelledby="events-title"
          className="border-t-2 border-navy/10 bg-white/60"
        >
          <div className={`${container} py-20 sm:py-24`}>
            <div
              className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
              data-reveal
            >
              <div>
                <p className={eyebrow}>Save some space in your week</p>
                <h2 id="events-title" className={`${sectionTitle} mt-4`}>
                  See you at the{" "}
                  <span className="relative inline-block">
                    next one.
                    <Squiggle className="absolute -bottom-2 left-0 h-3 w-full text-yellow" />
                  </span>
                </h2>
              </div>
              <p className="max-w-sm text-lg text-muted">
                Meetings, service days, and everything in between. A good reason
                to close your laptop and show up.
              </p>
            </div>

            {/* Mobile order: calendar, Instagram, then event types. On desktop
                the calendar moves to the right-hand column. */}
            <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-12">
              <div
                className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1"
                data-reveal
              >
                <EventCalendar />
              </div>

              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label={`Follow the Instagram ${instagramHandle}`}
                className="group block self-start rounded-3xl border-2 border-navy bg-yellow p-6 shadow-sticker transition hover:-translate-y-1 hover:shadow-[7px_7px_0_0_#1B3676] sm:p-7 lg:col-span-5 lg:col-start-1 lg:row-start-2"
                data-reveal
              >
                <span className="block font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-4xl">
                  Follow the Instagram
                </span>
                <span className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">
                  <span
                    aria-hidden="true"
                    className="flex gap-1 text-red transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    <DoodleArrow className="h-8 w-10" />
                    <DoodleArrow className="h-8 w-10" />
                    <DoodleArrow className="h-8 w-10" />
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-navy py-2.5 pl-3.5 pr-5 text-xl font-bold text-cream">
                    <InstagramGlyph className="h-7 w-7 text-yellow" />
                    {instagramHandle}
                  </span>
                </span>
              </a>

              <ul className="grid gap-4 self-start lg:col-span-5 lg:col-start-1 lg:row-start-1">
                {eventTypes.map((type) => (
                  <li
                    key={type.title}
                    className={`flex gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-0.5 ${type.tone}`}
                    data-reveal
                  >
                    <span className="mt-0.5 shrink-0">{type.icon}</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">
                        {type.tag}
                      </p>
                      <h3 className="mt-1 font-display text-xl font-extrabold">
                        {type.title}
                      </h3>
                      <p className="mt-1 text-muted">{type.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section
          id="opportunities"
          aria-labelledby="opportunities-title"
          className={`${container} py-20 sm:py-24`}
        >
          <div
            className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
            data-reveal
          >
            <div>
              <p className={eyebrow}>Put your heart into it</p>
              <h2 id="opportunities-title" className={`${sectionTitle} mt-4`}>
                Find your way to give back.
              </h2>
            </div>
            <ExternalLink href={links.newsletter}>
              Get opportunities in your inbox
            </ExternalLink>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {opportunities.map((o) => (
              <article key={o.title} className="group" data-reveal>
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-3xl border-4 ${o.border}`}
                >
                  <Image
                    src={`/images/${o.image}.jpg`}
                    alt={o.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <p className={`${eyebrow} mt-6`}>{o.category}</p>
                <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight">
                  {o.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">
                  {o.body}
                </p>
                <ExternalLink href={links.groupMe} className="mt-5">
                  {o.link}
                </ExternalLink>
              </article>
            ))}
          </div>
        </section>

        {/* Brave the Shave */}
        <section
          id="brave-the-shave"
          aria-labelledby="brave-title"
          className="bg-green text-white"
        >
          <div
            className={`${container} grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-2`}
          >
            <div data-reveal>
              <p className="text-sm font-bold uppercase tracking-[0.14em]">
                Our signature fundraiser
              </p>
              <h2 id="brave-title" className={`${sectionTitle} mt-4`}>
                A bold cut.
                <br />
                An even <span className="text-yellow">bigger cause.</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed">
                Brave the Shave brings our community together in solidarity with
                children fighting cancer. Shave your head, fundraise, or cheer
                someone on. Every role matters.
              </p>
              <a
                href={links.pastFundraiser}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full border-2 border-navy bg-cream px-6 py-3.5 font-bold text-navy shadow-sticker transition hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#1B3676]"
              >
                Explore our past fundraiser
                <Arrow
                  direction="external"
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div
              className="mx-auto w-full max-w-md rotate-2 rounded-3xl border-4 border-navy bg-cream p-7 text-navy shadow-[10px_10px_0_0_#1B3676] transition-transform duration-500 hover:rotate-0 sm:p-9"
              data-reveal
            >
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em]">
                <span>UT SMILE presents</span>
                <Star className="h-6 w-6 text-red" />
              </div>
              <p className="mt-6 font-display text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-7xl">
                Brave
                <br />
                the
                <br />
                <span className="text-green">Shave.</span>
              </p>
              <div className="mt-6 flex items-end justify-between gap-4 border-t-2 border-navy pt-4">
                <p className="text-sm font-bold uppercase tracking-[0.12em]">
                  For the kids.
                  <br />
                  For the future.
                </p>
                <Heart className="h-8 w-8 shrink-0 text-red" />
              </div>
              <p className="mt-4 text-sm text-muted">
                Supporting pediatric cancer research through St. Baldrick’s
                Foundation.
              </p>
            </div>
          </div>
        </section>

        {/* Our People */}
        <section
          id="people"
          aria-labelledby="people-title"
          className={`${container} py-20 sm:py-24`}
        >
          <div data-reveal>
            <p className={eyebrow}>The heart of SMILE</p>
            <h2 id="people-title" className={`${sectionTitle} mt-4`}>
              Your kind of people.
            </h2>
          </div>

          <h3 className="mt-14 flex items-center gap-3 font-display text-3xl font-extrabold">
            <Star className="h-7 w-7 text-yellow" />
            Fun Moments
          </h3>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {moments.map((m) => (
              <li key={m.image} data-reveal>
                <figure
                  className={`rounded-2xl border-2 border-navy bg-white p-3 pb-4 shadow-sticker transition-transform duration-300 hover:rotate-0 ${m.tilt}`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={`/images/${m.image}.jpg`}
                      alt={m.alt}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 px-1 font-hand text-2xl font-bold leading-tight">
                    {m.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-20 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <h3 className="flex items-center gap-3 font-display text-3xl font-extrabold">
              <Heart className="h-7 w-7 text-red" />
              The Officers
            </h3>
            <p className="text-sm text-muted">
              From the original SMILE website. Current roster to be confirmed.
            </p>
          </div>
          <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {officers.map(([name, role, detail], i) => (
              <li key={name} className="group" data-reveal>
                <div
                  className={`relative aspect-square overflow-hidden rounded-3xl border-4 ${officerBorders[i]}`}
                >
                  <Image
                    src={`/images/officers-${i}.jpg`}
                    alt={`${name}, ${role}`}
                    fill
                    sizes="(min-width: 1024px) 210px, (min-width: 768px) 33vw, 50vw"
                    className="object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="mt-4 font-display text-xl font-extrabold leading-tight">
                  {name}
                </h4>
                <p className="mt-1 text-sm font-bold text-red-ink">{role}</p>
                <p className="mt-1 text-sm text-muted">{detail}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Join */}
        <section
          id="join"
          aria-labelledby="join-title"
          className={`${container} pb-24`}
        >
          <div
            className="relative grid gap-10 overflow-hidden rounded-[2rem] border-2 border-navy bg-yellow p-8 shadow-[10px_10px_0_0_#1B3676] sm:p-12 lg:grid-cols-2 lg:items-center"
            data-reveal
          >
            <div>
              <p className="font-hand text-3xl font-bold">
                There’s a place for you here.
              </p>
              <h2 id="join-title" className={`${sectionTitle} mt-3`}>
                Make good happen.
                <br />
                Come join us.
              </h2>
              <p className="mt-5 max-w-md text-lg">
                No perfect résumé required. Just a little time and a lot of
                heart.
              </p>
            </div>
            <div className="flex flex-col items-start gap-5 lg:items-end">
              <a
                href={links.hornsLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-navy bg-red px-6 py-3.5 text-lg font-bold text-white shadow-sticker transition hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#1B3676]"
              >
                Join SMILE on HornsLink
                <Arrow
                  direction="external"
                  className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <ExternalLink href={links.groupMe} underline="decoration-navy">
                Say hello on GroupMe
              </ExternalLink>
              <ExternalLink href={links.newsletter} underline="decoration-navy">
                Sign up for our newsletter
              </ExternalLink>
              <ExternalLink href={links.instagram} underline="decoration-navy">
                Follow {instagramHandle} on Instagram
              </ExternalLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy text-cream">
        <div
          className={`${container} flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between`}
        >
          <a href="#home" className="flex items-center gap-4">
            <span className="rounded-full bg-cream p-1">
              <Image
                src="/images/smile-logo.png"
                alt=""
                width={480}
                height={470}
                sizes="64px"
                className="h-16 w-16"
              />
            </span>
            <span>
              <span className="block font-display text-2xl font-extrabold">
                UT SMILE
              </span>
              <span className="block text-sm">
                Students Making Impacts Through Love &amp; Empathy
              </span>
            </span>
          </a>
          <div className="flex flex-wrap gap-x-8 gap-y-3 font-bold">
            <a
              href={links.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-yellow"
            >
              <InstagramGlyph className="h-5 w-5" />
              {instagramHandle}
            </a>
            <a
              href={links.groupMe}
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow"
            >
              GroupMe
            </a>
            <a
              href="#home"
              className="inline-flex items-center gap-1.5 hover:text-yellow"
            >
              Back to top
              <Arrow direction="up" className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="border-t border-cream/20">
          <div
            className={`${container} flex flex-col gap-2 py-5 text-xs font-semibold uppercase tracking-widest sm:flex-row sm:justify-between`}
          >
            <span>© {new Date().getFullYear()} UT SMILE</span>
            <span>Made of Longhorns. Powered by heart.</span>
            <span>Austin, Texas</span>
          </div>
        </div>
      </footer>

      <ScrollReveal />
    </>
  );
}
