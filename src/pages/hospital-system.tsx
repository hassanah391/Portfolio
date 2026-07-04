import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";
import { Footer } from "@/components/Footer";

const screens = [
  {
    title: "Reception login",
    description: "Role-based entry point for the hospital reception workflow.",
    image: "/proof/hospital/login.png",
  },
  {
    title: "Priority queue management",
    description: "Dynamic patient queue with urgency levels and live waiting information.",
    image: "/proof/hospital/queue.jpeg",
  },
  {
    title: "Reports and analytics",
    description: "Appointment, attendance, no-show, and waiting-time reporting dashboard.",
    image: "/proof/hospital/analytics.png",
  },
];

export default function HospitalSystemPage() {
  return (
    <>
      <Head>
        <title>Hospital Management System | Hassan Ahmed Teleb</title>
        <meta
          name="description"
          content="Screens from Hassan Ahmed Teleb's Hospital Management System project."
        />
      </Head>

      <main className="section min-h-screen pb-24 pt-12 sm:pt-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-(--accent) transition-colors hover:text-(--accent-hover)"
          >
            <ArrowLeft size={18} />
            Back to projects
          </Link>
          <a
            href="https://github.com/FatmaAli111/HospitalReciptionestManagmentSystem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold transition-colors hover:border-violet-400/60 hover:text-violet-300"
          >
            <Github size={17} />
            GitHub Repo
          </a>
        </div>

        <header className="mx-auto mb-12 mt-14 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-(--accent)">
            Project proof
          </p>
          <h1 className="mt-3 text-4xl font-bold sm:text-6xl">
            Hospital <span className="text-gradient-shimmer">Management System</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-(--muted) sm:text-lg">
            Reception workflows for authentication, patient queueing, appointments,
            and operational reporting.
          </p>
        </header>

        <div className="mx-auto grid max-w-6xl gap-8">
          {screens.map((screen) => (
            <article
              key={screen.title}
              className="overflow-hidden rounded-3xl border border-(--card-border) bg-(--card)"
            >
              <Image
                src={screen.image}
                alt={`${screen.title} screen from the Hospital Management System`}
                width={1920}
                height={1080}
                className="h-auto w-full object-contain"
              />
              <div className="border-t border-white/10 p-5 sm:p-6">
                <h2 className="text-xl font-bold">{screen.title}</h2>
                <p className="mt-2 text-sm text-(--muted)">{screen.description}</p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
