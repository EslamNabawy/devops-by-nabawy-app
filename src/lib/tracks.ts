import {
  Box,
  Boxes,
  Cloud,
  Container,
  GitBranch,
  Server,
  Terminal,
  Waypoints,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Track = {
  slug: string;
  title: string;
  description: string;
  chapters: number;
  hours: string;
  level: string;
  milestones: number;
  kind: "guide" | "lab";
  icon: LucideIcon;
  status: string;
};

export const tracks: Track[] = [
  {
    slug: "devops",
    title: "DevOps Engineering",
    description: "Culture, delivery flow, observability, and reliable systems.",
    chapters: 14,
    hours: "18h",
    level: "Foundation",
    milestones: 5,
    kind: "guide",
    icon: GitBranch,
    status: "PDF GUIDEBOOK",
  },
  {
    slug: "kubernetes",
    title: "Kubernetes Orchestration",
    description:
      "Deploy, scale, and operate production workloads with confidence.",
    chapters: 16,
    hours: "24h",
    level: "Intermediate",
    milestones: 6,
    kind: "guide",
    icon: Waypoints,
    status: "PDF GUIDEBOOK",
  },
  {
    slug: "docker",
    title: "Docker & Containers",
    description: "Build lean images and compose dependable development stacks.",
    chapters: 11,
    hours: "14h",
    level: "Foundation",
    milestones: 4,
    kind: "guide",
    icon: Container,
    status: "PDF GUIDEBOOK",
  },
  {
    slug: "aws",
    title: "AWS Cloud Architecture",
    description: "Design secure, resilient systems with core AWS services.",
    chapters: 18,
    hours: "28h",
    level: "Advanced",
    milestones: 7,
    kind: "guide",
    icon: Cloud,
    status: "PDF GUIDEBOOK",
  },
  {
    slug: "ansible",
    title: "Ansible Automation",
    description: "Turn repetitive operations into clear, reusable playbooks.",
    chapters: 10,
    hours: "12h",
    level: "Intermediate",
    milestones: 4,
    kind: "guide",
    icon: Wrench,
    status: "PDF GUIDEBOOK",
  },
  {
    slug: "aiops",
    title: "AIOps & Telemetry",
    description: "Connect metrics, logs, traces, and intelligent operations.",
    chapters: 12,
    hours: "16h",
    level: "Advanced",
    milestones: 5,
    kind: "guide",
    icon: Boxes,
    status: "PDF GUIDEBOOK",
  },
  {
    slug: "terraform",
    title: "Terraform IaC",
    description: "Provision repeatable cloud infrastructure with HCL.",
    chapters: 12,
    hours: "20h",
    level: "Intermediate",
    milestones: 3,
    kind: "lab",
    icon: Box,
    status: "SANDBOX READY",
  },
  {
    slug: "cicd",
    title: "CI/CD Automation",
    description: "Build pipelines that test, secure, and ship continuously.",
    chapters: 9,
    hours: "15h",
    level: "Intermediate",
    milestones: 4,
    kind: "lab",
    icon: GitBranch,
    status: "TERMINAL SIMULATOR",
  },
  {
    slug: "linux",
    title: "Linux Primitives",
    description: "Master processes, filesystems, permissions, and networking.",
    chapters: 13,
    hours: "16h",
    level: "Foundation",
    milestones: 5,
    kind: "lab",
    icon: Terminal,
    status: "INTERACTIVE SANDBOX",
  },
];

export const searchItems = [
  ...tracks.map((track) => ({
    title: track.title,
    subtitle: `${track.status} · ${track.chapters} chapters`,
    href:
      track.slug === "terraform"
        ? "/tracks/terraform"
        : `/tracks/${track.slug}`,
  })),
  {
    title: "terraform init",
    subtitle: "Command · Initialize a working directory",
    href: "/tracks/terraform",
  },
  {
    title: "terraform plan",
    subtitle: "Command · Preview infrastructure changes",
    href: "/tracks/terraform",
  },
  {
    title: "Kubernetes ingress",
    subtitle: "Module · Kubernetes Orchestration",
    href: "/tracks/kubernetes",
  },
  {
    title: "Docker volumes",
    subtitle: "Module · Docker & Containers",
    href: "/tracks/docker",
  },
  {
    title: "Ansible roles",
    subtitle: "Module · Ansible Automation",
    href: "/tracks/ansible",
  },
  {
    title: "S3 remote backend",
    subtitle: "Lab · Terraform IaC",
    href: "/tracks/terraform",
  },
];
