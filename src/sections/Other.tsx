"use client";

import { motion } from "framer-motion";
import { socials } from "@/data/config";

export function Other() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden pb-24 pt-0 sm:pb-32"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-(--card-border) bg-linear-to-br from-violet-500/15 via-(--card) to-fuchsia-500/10 p-7 text-center sm:p-12"
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
            Let&apos;s connect
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
            Open to full-stack .NET and{" "}
            <span className="text-gradient-shimmer">backend-focused roles.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-(--muted) sm:text-base">
            If you need someone who can work across APIs, data, permissions, and
            practical product workflows, I&apos;d be glad to talk.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-violet-400/50 hover:text-violet-200"
              >
                <social.icon size={17} />
                {social.name === "Email" ? "Email me" : social.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
