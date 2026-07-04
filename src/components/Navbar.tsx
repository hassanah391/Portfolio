"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const navItems = [
  { id: "home", label: "Home" },
  { id: "approach", label: "Approach" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const router = useRouter();
  const [active, setActive] = useState("home");

  useEffect(() => {
    if (router.pathname !== "/") return;

    const onScroll = () => {
      const ids = navItems.map((item) => item.id);
      let current = ids[0];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 130) {
          current = ids[i];
          break;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [router.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6">
      <nav className="section">
        <div className="mx-auto flex h-14 max-w-fit items-center gap-0 rounded-full glass-strong px-2 shadow-xl shadow-black/10 sm:gap-1 sm:px-6">
          {navItems.map((item) => {
            const href = router.pathname === "/" ? `#${item.id}` : `/#${item.id}`;
            const isActive = router.pathname === "/" && active === item.id;
            return (
              <a
                key={item.id}
                href={href}
                className="relative rounded-full px-2.5 py-2.5 text-[11px] font-semibold min-[430px]:px-3 min-[430px]:text-xs sm:px-5 sm:text-sm"
                style={{ color: isActive ? "var(--foreground)" : "var(--muted)" }}
              >
                {isActive ? (
                  <motion.span
                    layoutId="template-nav-indicator"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "var(--accent)",
                      opacity: 0.1,
                      border: "1px solid var(--accent)",
                    }}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
