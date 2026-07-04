import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";

const certificates = [
  {
    title: "ALX Software Engineering",
    detail: "12-month Software Engineering programme with a Back-end specialization · July 2025",
    image: "/certificates/alx-software-engineering.jpg",
  },
  {
    title: "Database Fundamentals",
    detail: "MaharaTech / Information Technology Institute · February 2026",
    image: "/certificates/database-fundamentals.jpg",
  },
];

export default function AchievementsPage() {
  return (
    <>
      <Head>
        <title>Achievements | Hassan Ahmed Teleb</title>
        <meta
          name="description"
          content="Software engineering and database certifications earned by Hassan Ahmed Teleb."
        />
      </Head>

      <main className="section min-h-screen pb-24 pt-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-(--accent) transition-colors hover:text-(--accent-hover)"
        >
          <ArrowLeft size={18} />
          Back to portfolio
        </Link>

        <header className="mx-auto mb-12 mt-14 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-(--accent)">
            Certifications
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
            Learning backed by <span className="text-gradient-shimmer">practice</span>
          </h1>
          <p className="mt-5 text-base text-(--muted) sm:text-lg">
            Formal milestones from my backend-focused software engineering journey.
          </p>
        </header>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {certificates.map((certificate) => (
            <article
              key={certificate.title}
              className="overflow-hidden rounded-3xl border border-(--card-border) bg-(--card)"
            >
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate awarded to Hassan Ahmed Teleb`}
                  width={1280}
                  height={720}
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="flex items-start justify-between gap-4 p-6">
                  <div>
                    <h2 className="text-xl font-bold">{certificate.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-(--muted)">
                      {certificate.detail}
                    </p>
                  </div>
                  <ExternalLink className="mt-1 shrink-0 text-(--accent)" size={20} />
                </div>
              </a>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
