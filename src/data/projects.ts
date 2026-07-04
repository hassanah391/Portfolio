export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  github?: string;
  video?: string;
  linkedIn?: string;
  gallery?: string;
  featured?: boolean;
  projectType: string;
  deviceType: "desktop" | "mobile";
  bgColor?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "atlier",
    title: "Atlier",
    description:
      "Full-stack fashion platform for products, AI-generated templates, community content, and multi-role dashboards.",
    tags: ["ASP.NET Core", "Angular", "SQL Server", "AI"],
    highlights: [
      "30+ REST endpoints across user, printer, and admin workflows",
      "Role-based authorization, pagination, and soft-delete filtering",
      "ASP.NET Core integration with an external AI generation pipeline",
    ],
    github: "https://github.com/FatmaAli111/ITIGraduationProject",
    video: "/proof/atlier-demo.mp4",
    linkedIn:
      "https://www.linkedin.com/posts/hassanah391_softwareengineering-dotnet-angular-ugcPost-7477424318491160577--7z0/",
    featured: true,
    projectType: "Full-stack platform",
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-violet-500/90 to-fuchsia-500/90",
    // TODO: Replace with a real Atlier product screenshot.
    screenshots: ["/projects/atlier-placeholder.svg"],
  },
  {
    id: "smart-trip-cost-analyzer",
    title: "Smart Trip Cost Analyzer",
    description:
      "Travel cost system that combines routes, weather, fuel efficiency, and passenger splitting in one workflow.",
    tags: ["ASP.NET MVC", "EF Core", "Identity", "MailKit"],
    highlights: [
      "Live weather and route data used in cost calculations",
      "Fuel-efficiency tracking and passenger cost splitting",
      "Identity-based accounts with modular service and repository layers",
    ],
    github: "https://github.com/FatmaAli111/MVCProject.ITI",
    video: "/proof/smart-trip-demo.mp4",
    linkedIn:
      "https://www.linkedin.com/posts/hassanah391_glad-i-got-the-chance-to-work-with-such-a-ugcPost-7461689322338074624-j-Cw/",
    featured: true,
    projectType: "Travel cost system",
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-blue-500/90 to-cyan-500/90",
    // TODO: Replace with a real Smart Trip Cost Analyzer screenshot.
    screenshots: ["/projects/smart-trip-placeholder.svg"],
  },
  {
    id: "hospital-management-system",
    title: "Hospital Management System",
    description:
      "Desktop operations system for patient registration, appointments, queues, access control, and clinic reporting.",
    tags: ["Windows Forms", "Entity Framework", "SQL Server", "Guna UI"],
    highlights: [
      "Patient registration and appointment workflows",
      "Dynamic queueing with role-based user access",
      "N-tier architecture with interactive reporting dashboards",
    ],
    github: "https://github.com/FatmaAli111/HospitalReciptionestManagmentSystem",
    gallery: "/hospital-system",
    featured: true,
    projectType: "Desktop operations",
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-emerald-500/90 to-teal-500/90",
    // TODO: Replace with a real Hospital Management System screenshot.
    screenshots: ["/projects/hospital-placeholder.svg"],
  },
  {
    id: "files-manager",
    title: "Files Manager API",
    description:
      "Secure REST API for file uploads, permissions, sessions, metadata, and background processing.",
    tags: ["Node.js", "Express", "MongoDB", "Redis"],
    highlights: [
      "Authentication and permission-based file access",
      "File upload, retrieval, and metadata management",
      "Redis sessions and queued background processing",
    ],
    github: "https://github.com/hassanah391/files_manager",
    featured: true,
    projectType: "Backend API",
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-purple-500/90 to-pink-500/90",
    // TODO: Replace with a real Files Manager API screenshot or API docs capture.
    screenshots: ["/projects/files-manager-placeholder.svg"],
  },
];
