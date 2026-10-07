import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import {
  Arrow,
  Footer,
  Header,
  ProjectVisual,
  ProjectDepth,
  HeroAtmosphere,
  Reveal,
} from "../components/portfolio/shared";
import Contact from "../components/portfolio/contact";
import { work } from "../data/work";
const Sculpture = dynamic(() => import("../components/portfolio/sculpture"), {
  ssr: false,
});
export default function Home() {
  return (
    <>
      <Head>
        <title>Liplan Lekipising | Senior Software Engineer</title>
        <meta
          name="description"
          content="Thoughtful products. Deep engineering. Liplan Lekipising builds SaaS and business platforms with product judgment, considered UX, and ownership from idea to production."
        />
        <link rel="canonical" href="https://lekipising.com" />
        <meta
          property="og:title"
          content="Liplan Lekipising | Thoughtful products. Deep engineering."
        />
        <meta
          property="og:description"
          content="Senior software engineer. Independent products, client platforms, and the decisions behind them."
        />
        <meta property="og:url" content="https://lekipising.com" />
      </Head>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <main id="main">
        <div className="hero-shell">
          <Header dark />
          <section className="hero">
            <div className="hero-copy">
              <h1>
                Thoughtful
                <br />
                products.
                <br />
                <span className="hero-outline">Deep</span> engineering
                <span className="headline-period">.</span>
              </h1>
              <p>
                I’m Liplan Lekipising, a senior software engineer based in
                Kenya. I build products, lead engineering teams, and take
                ownership from the first decision to production.
              </p>
              <div className="hero-actions">
                <a href="#work" className="button button-lime">
                  Explore my work <Arrow />
                </a>
                <a href="#contact" className="text-link">
                  Start a conversation <Arrow />
                </a>
              </div>
            </div>
            <div className="hero-art">
              <HeroAtmosphere />
              <Sculpture />
            </div>
          </section>
        </div>
        <div className="expertise-strip">
          <span>From first decisions to production.</span>
          <div>
            <span>Product strategy</span>
            <i>✳</i>
            <span>Full-stack engineering</span>
            <i>✳</i>
            <span>Thoughtful UX</span>
            <i>✳</i>
            <span>Technical leadership</span>
          </div>
        </div>
        <section id="work" className="work-section section-pad">
          <Reveal>
            <div className="section-heading">
              <div>
                <h2>
                  Selected work.
                  <br />
                  <em>Built from idea to production.</em>
                </h2>
              </div>
              <p>
                Independent products and client platforms.
                <br />
                Designed, built, and delivered solo.
              </p>
            </div>
          </Reveal>
          <div className="work-grid">
            {work.map((project, index) => (
              <Reveal
                key={project.slug}
                className="work-item"
                delay={(index % 2) * 0.12}
              >
                <Link href={`/work/${project.slug}`} className="project-link">
                  <ProjectDepth>
                    <ProjectVisual slug={project.slug} />
                  </ProjectDepth>
                  <div className="project-title">
                    <h3>{project.name}</h3>
                    <span className="round-arrow">
                      <Arrow />
                    </span>
                  </div>
                  <p className="project-category">{project.category}</p>
                  <p className="project-summary">{project.summary}</p>
                  <span className="case-link">
                    Explore the case study <Arrow />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="approach" className="approach-section section-pad">
          <Reveal>
            <div className="section-heading">
              <div>
                <h2>
                  Understand the problem.
                  <br />
                  <em>Own the outcome.</em>
                </h2>
              </div>
            </div>
          </Reveal>
          <div className="principles">
            {[
              [
                "01",
                "Choose the right problem.",
                "I work with product, design, and customers to understand what needs to change. Then I decide what to build, what to simplify, and what to leave out.",
              ],
              [
                "02",
                "Care about the experience.",
                "I care about the details that make software easier to use: clear navigation, helpful feedback, and workflows that make sense to the person using them.",
              ],
              [
                "03",
                "Own what happens next.",
                "I plan for failed requests, changing integrations, and the work of running a product. I build in SEO foundations and review performance week by week.",
              ],
            ].map(([n, title, text]) => (
              <Reveal key={n} className="principle">
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </section>
        <section id="about" className="about-section section-pad">
          <Reveal className="about-grid">
            <div>
              <h2>
                Hands-on engineer.
                <br />
                <em>
                  Product-minded
                  <br />
                  by nature.
                </em>
              </h2>
              <div className="about-signature">
                Liplan Lekipising
                <span>Based in Kenya. Working across the stack.</span>
              </div>
            </div>
            <div className="about-copy">
              <p className="large-copy">
                I like the work between “we have an idea” and “people depend on
                this.”
              </p>
              <p>
                I’m a senior software engineer with experience across SaaS,
                agricultural fintech, learning platforms, and client products. I
                build across the stack, work closely with product and design,
                and help teams turn complex requirements into clear decisions.
              </p>
              <p>
                My leadership stays close to the work: writing code, reviewing
                changes, mentoring engineers, and clearing roadblocks. I also
                build and operate my own products, Timi and Yield.
              </p>
              <div className="toolbox">
                <p>
                  TypeScript · React · Next.js · Node.js · NestJS
                  <br />
                  PostgreSQL · Prisma · Redis · Railway · Cloudflare
                </p>
                <span className="toolbox-note">
                  Railway for hosting and databases. Cloudflare for DNS,
                  security, and edge performance.
                </span>
              </div>
            </div>
          </Reveal>
          <div className="experience-list">
            <h3 className="experience-title">Experience</h3>
            <div className="experience-rows">
              {[
                [
                  "Hello Tractor",
                  "Lead Software Engineer, Web",
                  "Jul 2024 to Present",
                ],
                [
                  "Knack Inc",
                  "Senior Software Engineer & Team Lead",
                  "Apr 2022 to Apr 2024",
                ],
                [
                  "Savannah Informatics",
                  "Software Engineer",
                  "Jun 2022 to Sep 2022",
                ],
                ["Fress Inc", "Frontend Developer", "Jul 2021 to Apr 2022"],
              ].map(([name, role, date]) => (
                <div className="experience-row" key={name}>
                  <div>
                    <h3>{name}</h3>
                    <p>{role}</p>
                  </div>
                  <span>{date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
