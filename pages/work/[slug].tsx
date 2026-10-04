import React from "react";
import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { work, Work } from "../../data/work";
import {
  Header,
  Footer,
  Arrow,
  ProjectVisual,
  Reveal,
} from "../../components/portfolio/shared";
export default function CaseStudy({
  project,
  next,
}: {
  project: Work;
  next: { name: string; slug: string };
}) {
  return (
    <>
      <Head>
        <title>{project.name} | Liplan Lekipising</title>
        <meta name="description" content={project.summary} />
        <link
          rel="canonical"
          href={`https://lekipising.com/work/${project.slug}`}
        />
        <meta
          property="og:title"
          content={`${project.name} | The decisions behind the product`}
        />
        <meta property="og:description" content={project.summary} />
        <meta
          property="og:url"
          content={`https://lekipising.com/work/${project.slug}`}
        />
      </Head>
      <a href="#case-main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="case-main" className="case-main">
        <div className="case-heading section-pad">
          <Link href="/#work" className="back-link">
            ← Selected work
          </Link>
          <h1>{project.headline}</h1>
          <div className="case-heading-bottom">
            <span>{project.name}</span>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-ink"
            >
              Visit the live site <Arrow />
            </a>
          </div>
        </div>
        <div className="case-visual">
          <ProjectVisual slug={project.slug} />
          <p>
            Illustrative preview. Visit the live site to explore the product.
          </p>
        </div>
        <div className="case-body">
          <aside className="case-facts">
            <div>
              <h2 className="case-fact-title">My role</h2>
              <p>
                Solo engineering
                <br />
                End-to-end delivery
              </p>
            </div>
            <div>
              <h2 className="case-fact-title">Stack</h2>
              <ul>
                {project.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="case-fact-title">On this page</h2>
              <a href="#context">The context</a>
              <a href="#decisions">Key decisions</a>
              <a href="#engineering">Under the surface</a>
              <a href="#reflection">The takeaway</a>
            </div>
          </aside>
          <article>
            <section id="context">
              <h2>The problem.</h2>
              <p className="case-intro">{project.intro}</p>
            </section>
            <section id="decisions">
              <h2>Key decisions.</h2>
              {project.decisions.map((decision) => (
                <Reveal className="decision" key={decision.title}>
                  <div>
                    <h3>{decision.title}</h3>
                    <p>{decision.text}</p>
                  </div>
                </Reveal>
              ))}
            </section>
            <section id="engineering">
              <h2>How it works.</h2>
              <ul className="engineering-list">
                {project.engineering.map((item) => (
                  <li key={item}>
                    <span aria-hidden="true">↗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section id="reflection" className="reflection">
              <p>{project.reflection}</p>
            </section>
          </article>
        </div>
        <section className="case-next section-pad">
          <Link
            href={`/work/${next.slug}`}
            aria-label={`Next project: ${next.name}`}
          >
            {next.name}
            <Arrow />
          </Link>
          <div className="case-contact">
            <p>Have a similar challenge?</p>
            <Link href="/#contact">
              Let’s talk about it <Arrow />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export const getStaticPaths: GetStaticPaths = async () => ({
  paths: work.map((project) => ({ params: { slug: project.slug } })),
  fallback: false,
});
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const index = work.findIndex((project) => project.slug === params?.slug);
  if (index < 0) return { notFound: true };
  const next = work[(index + 1) % work.length];
  return {
    props: { project: work[index], next: { name: next.name, slug: next.slug } },
  };
};
