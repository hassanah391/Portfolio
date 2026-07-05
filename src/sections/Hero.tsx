import { socials } from "@/data/config";

export function Hero() {
  return (
    <section
      id="home"
      className="section relative flex min-h-[100svh] items-center pb-32 pt-24 sm:pt-32 lg:min-h-[112vh]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-20 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute right-0 bottom-6 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      </div>

      <div className="w-full max-w-5xl">
        <p className="text-xs uppercase tracking-[0.25em] text-violet-300 sm:text-sm">
          FULL STACK DEVELOPER · ASP.NET CORE
        </p>
        <p className="mt-5 text-2xl font-bold tracking-tight text-(--foreground) sm:text-3xl">
          Hassan Teleb
        </p>
        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Full-stack .NET Developer
          <br />
          <span className="text-gradient-shimmer">Backend-focused. Product-minded.</span>
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-(--muted) sm:text-lg">
          I build ASP.NET Core APIs, Angular dashboards, authentication flows,
          role-based systems, and data-driven business apps—with demos, code, and
          LinkedIn proof for each featured project.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-violet-500 px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-violet-400"
          >
            View Projects
          </a>
          <a
            href="#projects"
            className="rounded-full border border-violet-400/40 px-5 py-2.5 text-sm font-semibold text-violet-200 transition-colors hover:border-violet-300 hover:text-white"
          >
            Watch Demos
          </a>
          {socials.filter((social) => social.name !== "Email").map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/40"
            >
              <social.icon size={16} />
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
