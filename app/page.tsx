"use client";

import { useState } from "react";

const tabs = [
  { label: "Welcome", eyebrow: "Start here", title: "Hello, world.", body: "You’ve got a fresh Next.js project up and running. Explore the tabs to see a little more of what it can do." },
  { label: "About", eyebrow: "A little context", title: "Built for momentum.", body: "This lightweight starter uses the App Router, React state, and a responsive layout that is easy to make your own." },
  { label: "Features", eyebrow: "What’s included", title: "Simple by design.", body: "Five interactive tabs, keyboard-friendly buttons, a polished visual system, and no extra dependencies beyond Next and React." },
  { label: "Explore", eyebrow: "Keep going", title: "Make it yours.", body: "Swap in your own content, connect an API, or turn each tab into a larger section of your product." },
  { label: "Contact", eyebrow: "Say hello", title: "Let’s build something.", body: "This final tab is ready for an email address, a signup form, or whatever next step matters to your visitors." },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <main className="page-shell">
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <section className="card" aria-label="Hello World app">
        <div className="brand"><span className="brand-mark">✦</span> HELLO WORLD <span className="brand-dot" /></div>
        <div className="intro"><p className="kicker">A tiny beginning</p><h1>Welcome to your<br /><em>next chapter.</em></h1><p className="subcopy">A clean, friendly starting point for whatever you’re building next.</p></div>
        <nav className="tabs" aria-label="Main navigation">
          {tabs.map((tab, index) => <button key={tab.label} className={index === activeTab ? "tab active" : "tab"} onClick={() => setActiveTab(index)} aria-selected={index === activeTab} role="tab">{tab.label}<span>{String(index + 1).padStart(2, "0")}</span></button>)}
        </nav>
        <article className="content" role="tabpanel"><p className="kicker">{active.eyebrow}</p><h2>{active.title}</h2><p>{active.body}</p><div className="progress"><span style={{ width: `${((activeTab + 1) / tabs.length) * 100}%` }} /></div><p className="step">0{activeTab + 1} <span>/ 05</span></p></article>
        <footer><span>© 2024 Your Project</span><span className="status"><i /> Ready to create</span></footer>
      </section>
    </main>
  );
}
