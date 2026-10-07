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
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react";

export function Arrow() {
  return (
    <span className="action-arrow" aria-hidden="true">
      ↗
    </span>
  );
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
      whileInView={reduced ? {} : { y: [16, 0] }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        delay: reduced ? 0 : delay,
        duration: 0.55,
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
  const lightX = useMotionValue("50%");
  const lightY = useMotionValue("50%");
  const enabled = fine && !reduced;
  useEffect(() => {
    if (!enabled) {
      x.set(0);
      y.set(0);
    }
  }, [enabled, x, y]);
  const reset = () => {
    x.set(0);
    y.set(0);
  };
  const move = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!enabled || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    lightX.set(
      `${Math.max(0, Math.min(100, ((event.clientX - rect.left) / rect.width) * 100))}%`,
    );
    lightY.set(
      `${Math.max(0, Math.min(100, ((event.clientY - rect.top) / rect.height) * 100))}%`,
    );
    x.set(
      Math.max(
        -3,
        Math.min(3, (0.5 - (event.clientY - rect.top) / rect.height) * 6),
      ),
    );
    y.set(
      Math.max(
        -3,
        Math.min(3, ((event.clientX - rect.left) / rect.width - 0.5) * 6),
      ),
    );
  };
  return (
    <motion.div
      className="project-depth"
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerCancel={reset}
      style={
        {
          rotateX: enabled ? rotateX : 0,
          rotateY: enabled ? rotateY : 0,
          "--light-x": lightX,
          "--light-y": lightY,
        } as React.ComponentProps<typeof motion.div>["style"]
      }
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
  const [mobile, setMobile] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 700px)");
    const update = () => {
      setMobile(query.matches);
      if (!query.matches) setOpen(false);
    };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      )
        setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);
  return (
    <header ref={header} className={`site-header ${dark ? "on-dark" : ""}`}>
      <Link href="/" className="wordmark" aria-label="Liplan Lekipising home">
        liplan<span className="brand-dot">.</span>
      </Link>
      <button
        ref={toggle}
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        <span>Menu</span>
        <span className="menu-symbol" aria-hidden="true">
          +
        </span>
      </button>
      <nav
        id="site-nav"
        className={open ? "is-open" : ""}
        aria-label="Main navigation"
        aria-hidden={mobile && !open ? true : undefined}
      >
        <Link
          href="/#work"
          tabIndex={mobile && !open ? -1 : undefined}
          onClick={() => setOpen(false)}
        >
          Selected work
        </Link>
        <Link
          href="/#about"
          tabIndex={mobile && !open ? -1 : undefined}
          onClick={() => setOpen(false)}
        >
          About
        </Link>
        <Link
          href="/#contact"
          className="nav-contact"
          tabIndex={mobile && !open ? -1 : undefined}
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
