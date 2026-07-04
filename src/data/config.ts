import type { ComponentType } from "react";
import { Github, Mail } from "lucide-react";
import { FiLinkedin } from "react-icons/fi";

export interface Social {
  name: string;
  url: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/hassanah391",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hassanah391/",
    icon: FiLinkedin,
  },
  {
    name: "Email",
    url: "mailto:hassan.ahmed3577@gmail.com",
    icon: Mail,
  },
];

export const siteConfig = {
  name: "Hassan Teleb",
  title: "Full Stack Developer (.NET)",
  description:
    "Full-stack .NET developer building reliable APIs, dashboards, and practical business systems.",
};
