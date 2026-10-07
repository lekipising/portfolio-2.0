import React from "react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent, ReactNode } from "react";

export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={false}
      whileInView={reduced ? {} : { y: [28, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        delay: reduced ? 0 : delay,
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
function useFinePointer() {
  const [fine, setFine] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return fine;
}

export function ProjectDepth({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const fine = useFinePointer();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 180, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 180, damping: 24 });
  const enabled = fine && !reduced;
  const reset = () => {
    x.set(0);
    y.set(0);
  };
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (!enabled || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(
      Math.max(
        -5,
        Math.min(5, (0.5 - (event.clientY - rect.top) / rect.height) * 10),
      ),
    );
    y.set(
      Math.max(
        -6,
        Math.min(6, ((event.clientX - rect.left) / rect.width - 0.5) * 12),
      ),
    );
  };
  return (
    <motion.div
      className="project-depth"
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={{ rotateX: enabled ? rotateX : 0, rotateY: enabled ? rotateY : 0 }}
    >
      {children}
    </motion.div>
  );
}

export function HeroAtmosphere() {
  const host = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const fine = useFinePointer();
  const { scrollYProgress } = useScroll({
    target: host,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 18]);
  return (
    <motion.div
      ref={host}
      className="hero-atmosphere"
      aria-hidden="true"
      style={{
        y: fine && !reduced ? y : 0,
        rotate: fine && !reduced ? rotate : 0,
      }}
    >
      <div className="hero-glow" />
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-orbit orbit-three" />
    </motion.div>
  );
}

export function Header({ dark = false }: { dark?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`site-header ${dark ? "on-dark" : ""}`}>
      <Link href="/" className="wordmark" aria-label="Liplan Lekipising home">
        liplan<span className="brand-dot">.</span>
      </Link>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        {open ? "Close −" : "Menu +"}
      </button>
      <nav
        id="site-nav"
        className={open ? "is-open" : ""}
        aria-label="Main navigation"
      >
        <Link href="/#work" onClick={() => setOpen(false)}>
          Selected work
        </Link>
        <Link href="/#about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link
          href="/#contact"
          className="nav-contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <Arrow />
        </Link>
      </nav>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <Link className="wordmark" href="/">
        liplan<span className="brand-dot">.</span>
      </Link>
      <p>Thoughtfully built. Always evolving.</p>
      <div>
        <a
          href="https://github.com/lekipising"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <Arrow />
        </a>
        <a
          href="https://www.linkedin.com/in/liplan0lekipising/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <Arrow />
        </a>
      </div>
      <span>© {new Date().getFullYear()} Liplan Lekipising</span>
    </footer>
  );
}
export function ProjectVisual({ slug }: { slug: string }) {
  if (slug === "timi")
    return (
      <div
        className="project-visual visual-timi"
        aria-label="Illustrative Timi conversation interface"
      >
        <div className="timi-window">
          <div className="mini-window-top">
            <span className="mini-logo">
              timi<span>✳</span>
            </span>
            <span className="tiny-pill">WhatsApp connected</span>
          </div>
          <div className="mini-chat-head">
            <span className="chat-avatar">N</span>
            <div>
              <strong>Nia’s studio</strong>
              <small>Customer conversation · Illustrative</small>
            </div>
            <span className="chat-online" />
          </div>
          <div className="bubble bubble-in">
            Hi! Is the olive tote available?
          </div>
          <div className="bubble bubble-out">
            Hey! Yes, it’s in stock 😊
            <br />
            Would you like the size details?
          </div>
          <div className="bubble bubble-in">Yes please, thanks!</div>
          <div className="chat-bottom">
            <span>Thoughtful replies. You’re in control.</span>
            <span>↗</span>
          </div>
        </div>
        <span className="floating-note">✳ Built for real conversations</span>
      </div>
    );
  if (slug === "yield")
    return (
      <div
        className="project-visual visual-yield"
        aria-label="Illustrative Yield comparison interface"
      >
        <div className="yield-window">
          <div className="mini-window-top">
            <span className="yield-logo">
              yield<span>↗</span>
            </span>
            <span className="tiny-pill">Compare with clarity</span>
          </div>
          <h3>
            Make your money
            <br />
            work harder.
          </h3>
          <p>Compare funds. Understand your returns.</p>
          <div className="yield-chart">
            {[24, 33, 29, 45, 49, 43, 57, 66, 61, 78, 85, 95].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="yield-labels">
            <span>Source-aware data</span>
            <span>Transparent calculations ↗</span>
          </div>
          <small className="illustrative-label">
            Illustrative interface · not investment performance
          </small>
        </div>
      </div>
    );
  if (slug === "gaiavie")
    return (
      <div
        className="project-visual visual-gaia"
        aria-label="Illustrative GaiaVie booking interface"
      >
        <div className="gaia-sun" />
        <div className="gaia-hill hill-one" />
        <div className="gaia-hill hill-two" />
        <div className="gaia-card">
          <span>GaiaVie</span>
          <h3>
            Somewhere
            <br />
            worth being.
          </h3>
          <div className="booking-strip">
            <span>Find your stay</span>
            <span>Explore ↗</span>
          </div>
          <small>Illustrative product composition</small>
        </div>
      </div>
    );
  return (
    <div
      className="project-visual visual-ssf"
      aria-label="Illustrative Sofie Saitet Foundation website"
    >
      <div className="ssf-window">
        <span className="ssf-logo">
          SSF
          <span>
            SOFIE SAITET
            <br />
            FOUNDATION
          </span>
        </span>
        <div className="ssf-art">
          <span />
          <span />
          <span />
        </div>
        <h3>
          More room to learn.
          <br />
          <em>More space to lead.</em>
        </h3>
        <div className="ssf-bottom">
          <span>Learning. Dignity. Voice.</span>
          <span>↗</span>
        </div>
      </div>
    </div>
  );
}
