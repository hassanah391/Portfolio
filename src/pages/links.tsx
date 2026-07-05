"use client";

import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { socials } from "@/data/config";

export default function LinksPage() {
  return (
    <>
      <Head>
        <title>My Links | Hassan Ahmed Teleb</title>
        <meta
          name="description"
          content="Connect with Hassan Ahmed Teleb on GitHub, LinkedIn, or by email."
        />
      </Head>

      <Navbar />
      <main className="relative min-h-screen overflow-hidden pb-28 pt-32 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-40 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),transparent_58%)]" />
        </div>

        <div className="section">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-(--muted) transition-colors hover:text-(--foreground) sm:text-base"
          >
            <ArrowLeft size={20} />
            Back to home
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-14 mt-12 max-w-3xl text-center sm:mt-16"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-(--accent)">
              Connect with me
            </p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-7xl md:text-8xl">
              My <span className="text-gradient-shimmer">Links</span>
            </h1>
            <p className="mt-5 text-base text-(--muted) sm:text-xl">
              Find me across the web and social platforms.
            </p>
          </motion.header>

          <div className="mx-auto max-w-4xl space-y-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 + index * 0.08 }}
                whileHover={{ scale: 1.015, y: -2 }}
                className="group flex items-center justify-between rounded-3xl border border-(--card-border) bg-(--card)/90 p-5 shadow-lg shadow-black/10 backdrop-blur-sm transition-colors hover:border-blue-500/50 hover:bg-(--card-hover) sm:p-7"
              >
                <span className="flex items-center gap-5">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-blue-500 text-blue-400 sm:h-16 sm:w-16">
                    <social.icon size={30} />
                  </span>
                  <span className="text-2xl font-bold sm:text-4xl">{social.name}</span>
                </span>
                <ExternalLink
                  size={24}
                  className="text-(--muted) transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
