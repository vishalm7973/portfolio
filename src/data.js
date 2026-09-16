export const profile = {
  name: "Vishal Maurya",
  role: "Backend Engineer",
  location: "Ludhiana, Punjab, India",
  email: "vishalm7973@gmail.com",
  phone: "+91 7973274863",
  phoneHref: "tel:+917973274863",
  github: "https://github.com/vishalm7973",
  linkedin: "https://www.linkedin.com/in/vishalm7973",
  photo:
    "https://lh3.googleusercontent.com/d/1fIj-Y2W1BS3I_FcR8t2hjnNMFLNiY2eP=w1000",
  resume:
    "https://drive.google.com/file/d/1z0Rz7bEcbCQ9k9UDeDrEGH-uQ-3G5ely/view",
  summary:
    "Backend Engineer with 2.5+ years of experience building production microservices using Node.js, NestJS, TypeScript, and RabbitMQ. I design and ship REST APIs, asynchronous workflows, and data services across hiring infrastructure, travel platforms, and media delivery, owning systems from architecture through deployment.",
  focus: [
    "Node.js · NestJS · TypeScript",
    "Microservices & REST APIs",
    "PostgreSQL · MongoDB · Redis",
  ],
};

export const about = [
  "I work on the parts of a product that have to stay reliable under load: APIs, queues, data models, and the glue between services. Most of my recent work has been NestJS microservices with RabbitMQ, PostgreSQL, and TypeORM — including Stripe billing, AI evaluation pipelines, and real-time Socket.IO features.",
  "I care about clear API contracts, indexed queries, and deployments that look the same in development as they do in production. Docker, AWS S3, and Git are part of how I ship, not afterthoughts.",
];

export const skills = [
  {
    label: "Languages / Frameworks",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "NestJS", icon: "nest" },
      { name: "Express.js", icon: "express" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React.js", icon: "react" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "aws" },
      { name: "Azure (Blob)", icon: "azure" },
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
    ],
  },
  {
    label: "Messaging & Streaming",
    items: [

      { name: "RabbitMQ", icon: "rabbitmq" },
      { name: "Kafka", icon: "kafka" },
    ],
  },
  {
    label: "Databases / Caching / ORMs",
    items: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MongoDB", icon: "mongo" },
      { name: "Redis", icon: "redis" },
      { name: "TypeORM", icon: "typeorm" },
      { name: "Mongoose", icon: "mongoose" },
    ],
  },
];

export const experience = [
  {
    company: "Digimantra Labs",
    initials: "DL",
    tagline: "IT services",
    location: "Onsite / India",
    period: "Jan 2024 — Aug 2026",
    roles: [
      {
        title: "Web Developer (Backend Engineer)",
        dates: "Jan 2025 — Aug 2026",
        stack: [
          "Node.js",
          "NestJS",
          "TypeORM",
          "RabbitMQ",
          "PostgreSQL",
          "MongoDB",
          "AWS",
          "Stripe",
          "Socket.IO",
        ],
        points: [
          "Owned backend architecture for VeriHire, an AI hiring platform — 4 NestJS microservices with RabbitMQ, PostgreSQL, and TypeORM, exposing 130+ REST APIs for AI-powered hiring workflows.",
          "Optimized async processing with RabbitMQ, indexed PostgreSQL queries, batched AI evaluations, and 5-job concurrent workers with retries and stuck-job recovery.",
          "Implemented Stripe SaaS billing across 5 subscription plans with usage quotas and webhooks.",
          "Built Locals Around, a travel and local-guide platform in Node.js and NestJS, covering profiles, trip booking, reviews, social features, and admin workflows.",
          "Optimized read-heavy MongoDB work with aggregation pipelines, Mongoose .lean() queries, and targeted indexes; added Socket.IO, social auth, FCM notifications, and multi-platform billing (Stripe, Apple, Google Play).",
        ],
      },
      {
        title: "Associate Web Developer (Backend Engineer)",
        dates: "Jan 2024 — Dec 2024",
        stack: ["Node.js", "Express.js", "MongoDB", "AWS S3", "CloudFront", "FFmpeg"],
        points: [
          "Built Neemo, a video template platform: Express.js + MongoDB REST APIs for users, categories, templates, and admin, with JWT authentication.",
          "Engineered chunked AWS S3 uploads, CloudFront signed media delivery, FFmpeg thumbnail generation, and automated video-template packaging for large-file uploads.",
        ],
      },
    ],
  },
  {
    company: "XenonStack Pvt Ltd",
    initials: "XS",
    tagline: "Cloud & Product Engineering Services",
    location: "Onsite / India",
    period: "Jul 2023 — Oct 2023",
    roles: [
      {
        title: "Associate Software Engineer Trainee",
        dates: "Jul 2023 — Oct 2023",
        stack: ["Node.js", "Docker", "REST APIs", "JWT", "Microservices"],
        points: [
          "Built production-grade REST APIs with JWT authentication and authorization across services.",
          "Containerized services with Docker to standardize deployment across development and production.",
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: "VeriHire",
    kind: "Production",
    image: "./projects/verihire.png",
    stack: ["NestJS", "RabbitMQ", "PostgreSQL", "TypeORM", "Stripe"],
    description:
      "AI hiring platform backend. Four NestJS microservices, 130+ REST APIs, async evaluation workers, and SaaS billing with usage quotas.",
    details: [
      "Owned backend architecture for an AI hiring platform — 4 NestJS microservices with RabbitMQ, PostgreSQL, and TypeORM.",
      "Exposed 130+ REST APIs covering AI-powered hiring workflows from evaluation through billing.",
      "Optimized async processing with RabbitMQ, indexed PostgreSQL queries, batched AI evaluations, and 5-job concurrent workers with retries and stuck-job recovery.",
      "Implemented Stripe SaaS billing across 5 subscription plans with usage quotas and webhooks.",
    ],
    live: "https://verihire.ai/",
  },
  {
    name: "Locals Around",
    kind: "Production",
    image: "./projects/locals-around.png",
    stack: ["Node.js", "NestJS", "MongoDB", "Socket.IO"],
    description:
      "Travel and local-guide platform: user profiles, trip booking, reviews, social features, real-time messaging, FCM, and multi-store billing.",
    details: [
      "Built the backend for a travel and local-guide platform covering profiles, trip booking, reviews, social features, and admin workflows.",
      "Optimized read-heavy MongoDB work with aggregation pipelines, Mongoose .lean() queries, and targeted indexes.",
      "Added Socket.IO messaging, social auth, and FCM notifications.",
      "Implemented multi-platform billing across Stripe, Apple, and Google Play.",
    ],
    live: "https://localsaround.com/",
  },
  {
    name: "GNDEC Sports Meet",
    kind: "Event system",
    image: "./projects/gndec-sports-meet.png",
    stack: ["Node.js", "MongoDB", "AWS S3", "Mailgun"],
    description:
      "REST APIs for event management, player registration, and QR attendance. Handled 1,000+ registrations in 48 hours, with S3 media and Mailgun notifications.",
    details: [
      "Designed REST APIs for event management, player registration, and QR-based attendance.",
      "Handled 1,000+ registrations in 48 hours without downtime.",
      "Stored event media on AWS S3 and sent Mailgun notifications for registration and updates.",
    ],
    live: "https://athleticmeet.vercel.app/",
  },
  {
    name: "Neemo",
    kind: "Production",
    stack: ["Express.js", "MongoDB", "AWS S3", "CloudFront"],
    description:
      "Video template platform with JWT-secured APIs, chunked S3 uploads, CloudFront signed delivery, and FFmpeg thumbnail generation.",
    details: [
      "Built Express.js and MongoDB REST APIs for users, categories, templates, and admin, with JWT authentication.",
      "Engineered chunked AWS S3 uploads and CloudFront signed media delivery for large video files.",
      "Added FFmpeg thumbnail generation and automated video-template packaging.",
    ],
  },
  {
    name: "Event Ticket API",
    kind: "Open source",
    stack: ["Node.js", "Express", "MongoDB", "JWT"],
    description:
      "Event and ticket management REST API with JWT authentication — a compact example of the same API and data patterns I use in production work.",
    details: [
      "Built a compact event and ticket management REST API with JWT authentication.",
      "Modeled the same API contracts and data patterns used in production work.",
    ],
    github: "https://github.com/vishalm7973/event-ticket-api",
  },
];

export const education = {
  school: "Guru Nanak Dev Engineering College, Ludhiana",
  degree: "B.Tech, Information Technology",
  dates: "2019 — 2023",
  gpa: "8.5 / 10",
};
