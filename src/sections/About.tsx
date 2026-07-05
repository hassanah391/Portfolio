"use client";

import { motion } from "framer-motion";

const buildPrinciples = [
  {
    number: "01",
    title: "Backend ownership",
    text: "I build ASP.NET Core APIs with authentication, permissions, validation, and maintainable data flow.",
  },
  {
    number: "02",
    title: "Full-stack delivery",
    text: "I connect Angular and Razor interfaces to APIs, dashboards, roles, and complete business workflows.",
  },
  {
    number: "03",
    title: "Proof-based projects",
    text: "My featured work is backed by source code, demo videos, and real application screens.",
  },
];

export function About() {
  return (
    <section
      id="approach"
      className="mx-auto max-w-6xl px-4 pb-32 pt-0"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="mb-10 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-(--accent) sm:text-sm">
          What I bring
        </p>
        <h2 className="mt-3 text-3xl font-bold sm:text-5xl md:text-6xl">
          Practical <span className="text-gradient-shimmer">Value</span>
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {buildPrinciples.map((principle, index) => (
          <motion.article
            key={principle.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-elevated) p-6 transition-colors hover:border-violet-400/40 hover:from-(--card-hover) hover:to-(--card-elevated)"
          >
            <span className="font-mono text-xs text-violet-300">{principle.number}</span>
            <h3 className="mt-4 text-xl font-bold">{principle.title}</h3>
            <p className="mt-3 text-sm leading-6 text-(--muted)">{principle.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
