"use client";
import { useState } from "react";

const groupMe = "https://web.groupme.com/join_group/60446275/gJLximqh";
const calendarId = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID;
const links = [
  ["Home + events", "home"],
  ["Opportunities", "opportunities"],
  ["Brave the Shave", "brave-the-shave"],
  ["Our people", "people"],
];
const officers = [
  ["Miya Walker", "President", "Neuroscience · Art History"],
  ["Shashank Shah", "VP & Brave the Shave Coordinator", "Biology · Pre-med"],
  ["Marina Carlos", "Treasurer", "Human Biology · Pre-med"],
  ["Chloe Pineda", "Volunteer Coordinator", "Nursing · Healthcare Innovation"],
  ["Oscar Shao", "Vice President", "Civil Engineering · Communication"],
];
function Smile() {
  return (
    <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="4" />
      <ellipse cx="35" cy="38" rx="4" ry="7" fill="currentColor" />
      <ellipse cx="65" cy="38" rx="4" ry="7" fill="currentColor" />
      <path
        d="M25 57Q50 87 75 57"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [peopleView, setPeopleView] = useState("gallery");
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="topbar">
        <span>STUDENTS MAKING IMPACTS THROUGH LOVE & EMPATHY</span>
        <span>AUSTIN, TEXAS · EST. 2008</span>
      </div>
      <header className="header">
        <a href="#home" className="logo" aria-label="UT SMILE home">
          <Smile />
          <span>UT SMILE.</span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close −" : "Menu +"}
        </button>
        <nav
          id="navigation"
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Main navigation"
        >
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="button small header-join" href="#join">
          Find your people <Arrow />
        </a>
      </header>
      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="tiny-star">✳</span> A LITTLE OF YOUR TIME. A LOT
              OF GOOD.
            </p>
            <h1>
              Good people.
              <br />
              Real impact.
              <br />
              <span>Big smiles.</span>
            </h1>
            <p className="hero-description">
              We’re a community of Longhorns helping kids be kids. A little
              service, a lot of heart, and friends who make showing up the best
              part of your week.
            </p>
            <div className="hero-actions">
              <a className="button" href="#join">
                Come make a difference <Arrow />
              </a>
              <a className="text-link" href="#events">
                See what’s happening ↓
              </a>
            </div>
            <div className="hero-foot">
              <span /> EVERY MAJOR. EVERY BACKGROUND. EVERYONE WELCOME.
            </div>
          </div>
          <div className="hero-art">
            <div className="photo-label">THE PEOPLE MAKE THE DIFFERENCE.</div>
            <img
              className="hero-photo"
              src="/images/gallery-3.jpg"
              alt="SMILE members gathered in front of a colorful mural"
              fetchPriority="high"
            />
            <div className="smile-sticker">
              <Smile />
              <span>
                DO GOOD.
                <br />
                FEEL GOOD.
              </span>
            </div>
            <div className="photo-caption">
              <span>SMALL MOMENTS. BIG CONNECTIONS.</span>
              <span>01 / SMILE ARCHIVES</span>
            </div>
          </div>
        </section>
        <div className="mission-strip">
          <span>SHOW UP.</span>
          <span aria-hidden="true">✳</span>
          <span>GIVE BACK.</span>
          <span aria-hidden="true">✳</span>
          <span>MAKE SOMEONE SMILE.</span>
          <span aria-hidden="true">✳</span>
        </div>
        <section className="about section-wrap">
          <p className="eyebrow">01 / MORE THAN A STUDENT ORG</p>
          <div>
            <h2>
              A big campus.
              <br />A close-knit community.
            </h2>
            <div className="about-columns">
              <p>
                Since 2008, SMILE has brought students at The University of
                Texas at Austin together around one simple idea: children
                deserve to experience childhood to the fullest.
              </p>
              <p>
                We turn that belief into action through volunteering,
                fundraising for pediatric cancer research, and building
                friendships along the way. You bring yourself. We’ll help you
                find your place.
              </p>
            </div>
          </div>
        </section>
        <section className="events section-wrap" id="events">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / SAVE SOME SPACE IN YOUR WEEK</p>
              <h2>
                See you at
                <br />
                <em>the next one.</em>
              </h2>
            </div>
            <p>
              Meetings, service days, and everything in between.
              <br />A good reason to close your laptop and show up.
            </p>
          </div>
          <div className="events-layout">
            <div>
              {[
                [
                  "GET TO KNOW US",
                  "General meetings",
                  "Meet the crew, hear what’s coming up, and find your next way to get involved.",
                ],
                [
                  "DO A LITTLE GOOD",
                  "Volunteer together",
                  "Hands-on opportunities to make a difference for children in our Austin community.",
                ],
                [
                  "STAY A LITTLE LONGER",
                  "Socials & fundraising",
                  "New friends, shared meals, and a good cause to rally around.",
                ],
              ].map(([tag, title, body], i) => (
                <div className="event-note" key={title}>
                  <span className="event-number">0{i + 1}</span>
                  <div>
                    <span className="tag">{tag}</span>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="calendar-panel">
              <div className="calendar-top">
                <span aria-hidden="true">▦</span>
                <strong>The SMILE calendar</strong>
                <span>AUSTIN · CT</span>
              </div>
              {calendarId ? (
                <>
                  <iframe
                    title="UT SMILE Google Calendar"
                    src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=America%2FChicago&mode=AGENDA&showTitle=0&showPrint=0&showCalendars=0`}
                    loading="lazy"
                  />
                  <a
                    className="text-link calendar-subscribe"
                    href={`https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(calendarId)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Add to Google Calendar <Arrow />
                  </a>
                </>
              ) : (
                <div className="calendar-empty">
                  <span className="calendar-illustration" aria-hidden="true">
                    See you
                    <br />
                    <em>soon.</em>
                    <span>↗</span>
                  </span>
                  <h3>Good things are on the way.</h3>
                  <p>
                    Our upcoming schedule will appear here.
                    <br />
                    Join GroupMe for the latest meeting and event details.
                  </p>
                  <a
                    className="text-link"
                    href={groupMe}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get updates on GroupMe <Arrow />
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
        <section id="opportunities" className="opportunities section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / PUT YOUR HEART INTO IT</p>
              <h2>
                Find your way
                <br />
                to give back.
              </h2>
            </div>
            <a
              className="text-link"
              href="https://forms.gle/ScNbVa4tf3TU8PWo6"
              target="_blank"
              rel="noreferrer"
            >
              Get opportunities in your inbox <Arrow />
            </a>
          </div>
          <div className="opportunity-grid">
            {[
              {
                title: "Make room for play.",
                category: "CHILDREN & COMMUNITY",
                body: "Help kids learn, create, and just be kids. Our volunteering history includes Dell Children’s, the Thinkery, and Creative Action.",
                link: "Explore volunteering",
                image: "gallery-5",
                alt: "SMILE members displaying their artwork",
              },
              {
                title: "Be in their corner.",
                category: "MENTORING & EDUCATION",
                body: "A little encouragement can go a long way. Discover tutoring and mentoring opportunities with schools and community programs in Austin.",
                link: "Find your next opportunity",
                image: "gallery-4",
                alt: "SMILE friends together outdoors",
              },
            ].map((o, i) => (
              <article className="opportunity" key={o.title}>
                <div className="opportunity-photo">
                  <img
                    src={`/images/${o.image}.jpg`}
                    alt={o.alt}
                    loading="lazy"
                  />
                  <span>0{i + 1}</span>
                </div>
                <p className="eyebrow">{o.category}</p>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <a
                  className="text-link"
                  href={groupMe}
                  target="_blank"
                  rel="noreferrer"
                >
                  {o.link} <Arrow />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="brave-the-shave" className="brave">
          <div className="section-wrap brave-inner">
            <div>
              <p className="eyebrow">04 / OUR SIGNATURE FUNDRAISER</p>
              <h2>
                A bold cut.
                <br />
                An even
                <br />
                <em>bigger cause.</em>
              </h2>
              <p>
                Brave the Shave brings our community together in solidarity with
                children fighting cancer. Shave your head, fundraise, or cheer
                someone on. Every role matters.
              </p>
              <a
                className="button light"
                href="https://www.stbaldricks.org/events/UTSMILE24"
                target="_blank"
                rel="noreferrer"
              >
                Explore our past fundraiser <Arrow />
              </a>
            </div>
            <div className="brave-poster">
              <div className="poster-top">
                <span>UT SMILE PRESENTS</span>
                <span>✳</span>
              </div>
              <span className="poster-title">
                BRAVE
                <br />
                THE
                <br />
                <span>SHAVE.</span>
              </span>
              <div className="poster-bottom">
                <span>
                  FOR THE KIDS.
                  <br />
                  FOR THE FUTURE.
                </span>
                <span aria-hidden="true">↗</span>
              </div>
              <p>
                Supporting pediatric cancer research
                <br />
                through St. Baldrick’s Foundation.
              </p>
            </div>
          </div>
        </section>
        <section id="people" className="people section-wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / THE HEART OF SMILE</p>
              <h2>Your kind of people.</h2>
            </div>
            <div
              className="view-switch"
              role="group"
              aria-label="Choose people content"
            >
              <button
                aria-pressed={peopleView === "gallery"}
                onClick={() => setPeopleView("gallery")}
              >
                The moments
              </button>
              <button
                aria-pressed={peopleView === "officers"}
                onClick={() => setPeopleView("officers")}
              >
                The officers
              </button>
            </div>
          </div>
          {peopleView === "gallery" ? (
            <div className="gallery">
              {[
                [
                  5,
                  "SMILE members sharing an evening of painting",
                  "A little creativity. A lot of heart.",
                ],
                [
                  1,
                  "Members enjoying a meal together in Austin",
                  "Good company comes with the territory.",
                ],
                [
                  0,
                  "Three SMILE members at a restaurant",
                  "From the SMILE photo archives.",
                ],
              ].map(([n, alt, caption]) => (
                <figure key={n}>
                  <img
                    src={`/images/gallery-${n}.jpg`}
                    alt={String(alt)}
                    loading="lazy"
                  />
                  <figcaption>{caption}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <>
              <p className="roster-note">
                From the original SMILE website · Current officer roster to be
                confirmed.
              </p>
              <div className="officer-grid">
                {officers.map(([name, role, detail], i) => (
                  <article key={name}>
                    <img
                      src={`/images/officers-${i}.jpg`}
                      alt={name}
                      loading="lazy"
                    />
                    <p className="eyebrow">{role}</p>
                    <h3>{name}</h3>
                    <p>{detail}</p>
                  </article>
                ))}
              </div>
            </>
          )}
        </section>
        <section id="join" className="join section-wrap">
          <div>
            <p className="eyebrow">THERE’S A PLACE FOR YOU HERE.</p>
            <h2>
              Make good happen.
              <br />
              <em>Come join us.</em>
            </h2>
            <p>
              No perfect résumé required. Just a little time and a lot of heart.
            </p>
          </div>
          <div className="join-actions">
            <a
              className="button"
              href="https://utexas.campuslabs.com/engage/organization/smile"
              target="_blank"
              rel="noreferrer"
            >
              Join SMILE on HornsLink <Arrow />
            </a>
            <a
              className="text-link"
              href={groupMe}
              target="_blank"
              rel="noreferrer"
            >
              Say hello on GroupMe <Arrow />
            </a>
            <a
              className="text-link"
              href="https://forms.gle/ScNbVa4tf3TU8PWo6"
              target="_blank"
              rel="noreferrer"
            >
              Sign up for our newsletter <Arrow />
            </a>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-top">
          <a className="logo" href="#home">
            <Smile />
            <span>UT SMILE.</span>
          </a>
          <p>
            Students Making Impacts
            <br />
            Through Love & Empathy
          </p>
          <a
            href="https://www.instagram.com/utsmile/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram <Arrow />
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} UT SMILE</span>
          <span>MADE OF LONGHORNS. POWERED BY HEART.</span>
          <span>AUSTIN, TEXAS</span>
        </div>
      </footer>
    </>
  );
}
