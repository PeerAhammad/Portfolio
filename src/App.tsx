import { useEffect, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { ArrowUpRight, Download, Menu, X } from "lucide-react";
import { LINKS, featured, others, timeline, skills, interests, pubs } from "./data";
import Motif from "./components/Motif";
import "./App.css";

const rise = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 }, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as const } };
const nav = [["Work", "#work"], ["Research", "#research"], ["About", "#about"], ["Contact", "#contact"]];

export default function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#work">Skip to content</a>
      <header className="nav">
        <a href="#top" className="brand">Peer Ahammad<i>.</i></a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        <nav id="site-nav" aria-label="Primary" className={open ? "open" : ""}>
          {nav.map(([l, h]) => <a key={l} href={h} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="pill" href={LINKS.resume} target="_blank" rel="noreferrer">Resume <Download size={14} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap">
          <p className="mono status"><span className="dot" />Open to research &amp; engineering opportunities · 2026</p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            I study how learning systems <em>behave</em>, and build the ones that <span className="u">hold&nbsp;up.</span>
          </motion.h1>
          <div className="hero-foot">
            <p>AI/ML researcher and engineer. Switching state-space models, sequential detection, and the evaluation of reliable AI systems.</p>
            <div className="cta"><a className="btn" href="#work">See the work</a><a className="btn ghost" href={LINKS.resume} target="_blank" rel="noreferrer">Resume <Download size={15} /></a></div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true"><div>{Array(4).fill("Research × Engineering × Experimentation ✳ ").join("")}</div></div>

        <section className="wrap" id="work">
          <div className="head"><p className="mono">Selected work</p><h2>Four questions, <em>pursued.</em></h2></div>
          {featured.map((p, i) => (
            <motion.article key={p.name} {...rise} className={`spread ${i % 2 ? "flip" : ""}`}>
              <div className="art"><span className="big">{p.n}</span><Motif kind={p.motif} /></div>
              <div className="copy">
                <p className="mono">{p.kind}</p>
                <h3>{p.name}</h3>
                <dl>
                  <dt>Question</dt><dd>{p.q}</dd>
                  <dt>Approach</dt><dd>{p.a}</dd>
                  <dt>Evidence</dt><dd>{p.e}</dd>
                </dl>
                {p.stats.length > 0 && <ul className="stats">{p.stats.map(([v, l]) => <li key={l}><b>{v}</b><span>{l}</span></li>)}</ul>}
                <div className="foot"><span className="mono">{p.stack.join(" · ")}</span><span className="links">{p.links.map(([l, h]) => <a key={l} className="link" href={h} target="_blank" rel="noreferrer">{l} <ArrowUpRight size={15} /></a>)}</span></div>
              </div>
            </motion.article>
          ))}
          <div className="more"><p className="mono">Also built</p>
            {others.map(([n, name, kind, d, s, href]) => (
              <motion.a key={name} {...rise} className="row" href={href} target="_blank" rel="noreferrer">
                <span className="mono">{n}</span><h4>{name}</h4><span className="mono kind">{kind}</span><p>{d}<small>{s}</small></p><ArrowUpRight size={20} />
              </motion.a>))}
          </div>
        </section>

        <section className="research" id="research"><div className="wrap">
          <div className="head"><p className="mono">Research timeline</p><h2>Curiosity with <em>rigour.</em></h2></div>
          <ol className="tl">
            {timeline.map(t => (
              <motion.li key={t.title} {...rise} className={t.live ? "live" : ""}>
                <span className="when">{t.when}</span>
                <div><p className="mono">{t.tag}{t.live && " · ongoing"}</p><h3>{t.title}</h3><p>{t.body}</p>
                  {t.href && <a className="link" href={t.href} target="_blank" rel="noreferrer">{t.cta} <ArrowUpRight size={15} /></a>}</div>
              </motion.li>))}
          </ol>
          <p className="mono sub">Research interests</p>
          <ul className="chips">{interests.map(i => <li key={i}>{i}</li>)}</ul>
          <p className="mono sub">Publications &amp; manuscripts</p>
          <ul className="pubs">{pubs.map(([s, t, c, h, l]) => <li key={t}><span className="mono">{s}</span><h3>{t}</h3><p>{c}</p>{h && <a className="link" href={h} target="_blank" rel="noreferrer">{l} <ArrowUpRight size={15} /></a>}</li>)}</ul>
        </div></section>

        <section className="wrap about" id="about">
          <div className="head"><p className="mono">About</p><h2>Theory and <em>implementation.</em></h2></div>
          <div className="cols">
            <p>I'm a Computer Science undergraduate at VTU, Belagavi, and a co-author of an accepted NeurIPS 2026 poster. I work between ML research and engineering: implementing models, running the experiments, and building the applications around them.</p>
            <div>{skills.map(([g, s]) => <div className="sk" key={g}><b className="mono">{g}</b><p>{s}</p></div>)}</div>
          </div>
        </section>
      </main>

      <footer className="foot-main" id="contact"><div className="wrap">
        <p className="mono">Get in touch</p>
        <h2>Let's work on something <em>that matters.</em></h2>
        <div className="soc">
          <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16} /></a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16} /></a>
          <a href={LINKS.orcid} target="_blank" rel="noreferrer">ORCID <ArrowUpRight size={16} /></a>
          <a href={LINKS.resume} target="_blank" rel="noreferrer">Resume (PDF) <Download size={16} /></a>
        </div>
        <p className="mono sign">© 2026 Peer Ahammad · Belagavi, India</p>
      </div></footer>
    </MotionConfig>
  );
}
