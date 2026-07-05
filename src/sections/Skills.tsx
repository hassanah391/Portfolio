"use client";

import { motion } from "framer-motion";
import { Database } from "lucide-react";
import {
  SiAngular,
  SiDotnet,
  SiGit,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiRedis,
  SiTypescript,
} from "react-icons/si";

export function Skills() {
  const beltChunk = [...Array(4)].flatMap(() => [
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node", icon: SiNodedotjs, color: "#339933" },
    { name: "SQL Server", icon: Database, color: "#CC2927" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ]);

  const skillGroups = [
    {
      title: "Backend",
      items: ["ASP.NET Core", "REST APIs", "Entity Framework Core", "SQL Server"],
    },
    {
      title: "Frontend",
      items: ["Angular", "TypeScript", "Bootstrap", "Razor Pages"],
    },
    {
      title: "Database & caching",
      items: ["SQL Server", "MongoDB", "Redis"],
    },
    {
      title: "Engineering",
      items: ["Clean Architecture", "SOLID", "Git", "Testing", "Postman"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden pt-0 pb-28"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="section">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-(--accent) sm:text-base">
            Core capabilities
          </span>
          <h2 className="mt-2 px-2 text-3xl font-bold tracking-tight text-pretty sm:text-5xl md:text-6xl">
            Skills <span className="text-gradient-shimmer">Overview</span>
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-elevated) p-5"
            >
              <h3 className="text-base font-semibold">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2 text-sm text-(--muted)">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-(--card-border) bg-(--card)/85 py-3">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex w-max items-center gap-8 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 24,
              }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center gap-8 px-4">
                  {beltChunk.map((item, index) => (
                    <div key={`${copy}-${item.name}-${index}`} className="flex items-center gap-2">
                      <item.icon style={{ color: item.color }} size={16} />
                      <span className="text-xs uppercase tracking-wider text-(--muted)">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
