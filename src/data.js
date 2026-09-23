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
    name: "EvilgeniusGames",
    image: "./projects/evilgenius.png",
    stack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Stripe",
      "Puppeteer",
      "AWS S3",
    ],
    description: "A real-time multiplayer Tabletop Role-Playing Game (TTRPG) platform where players take on interactive challenges, compete on live leaderboards, communicate through chat and audio/video, and make secure payments.",
    details: [
      "Dual-identity auth shared across REST and Socket.IO — Cognito for registered users, locally-issued guest JWTs with token-version revocation (no blocklist needed).",
      "On-demand playtime tracking using immutable timestamps instead of polling — eliminates drift, survives restarts, unit-tested with injected time.",
      "Haversine distance computed inside MongoDB aggregation pipeline for geospatial game discovery and 'sort by nearest' in a single DB round trip.",
      "Stripe Connect payouts with 70/30 revenue split, ledger-vs-Stripe balance reconciliation, and Redis-throttled background sync.",
      "Redis distributed lock (SET NX) on book purchases with automatic duplicate-charge refund via stripe.refunds.create().",
      "Puppeteer BrowserPool singleton for character sheet PDF generation — one Chromium instance reused across requests with idle-timeout and graceful shutdown.",
      "Socket.IO Redis adapter with production-safety startup guard, p-queue concurrency control for notifications, and deploy-time Redis cache warmup.",
    ],
    live: "https://evilgeniusgames.com/",
  },
  {
    name: "VeriHire",
    image: "./projects/verihire.png",
    stack: ["NestJS", "RabbitMQ", "PostgreSQL", "TypeORM", "Stripe"],
    description:
      "A SaaS-based AI hiring platform for conducting video and coding interviews, with automated candidate evaluation, AI-generated reports and scoring, asynchronous processing, and usage-based billing.",
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
    image: "./projects/locals-around.png",
    stack: ["Node.js", "NestJS", "MongoDB", "Socket.IO"],
    description:
      "A full-featured travel platform connecting travelers with local guides and experiences through trip booking, social discovery, real-time messaging, reviews, push notifications, and seamless multi-store payments.",
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
    image: "./projects/gndec-sports-meet.png",
    stack: ["Node.js", "MongoDB", "AWS S3", "Mailgun"],
    description:
      "A sports event management platform enabling player registration, QR-based attendance, media management, and automated notifications, successfully handling 1,000+ registrations in 48 hours.",
    details: [
      "Designed REST APIs for event management, player registration, and QR-based attendance.",
      "Handled 1,000+ registrations in 48 hours without downtime.",
      "Stored event media on AWS S3 and sent Mailgun notifications for registration and updates.",
    ],
    live: "https://athleticmeet.vercel.app/",
  },
  {
    name: "Neemo",
    stack: ["Express.js", "MongoDB", "AWS S3", "CloudFront"],
    description:
      "A fun video creation platform for kids to create personalized videos using ready-made templates, upload and share their creations, and watch videos through secure, scalable content delivery.",
    details: [
      "Built Express.js and MongoDB REST APIs for users, categories, templates, and admin, with JWT authentication.",
      "Engineered chunked AWS S3 uploads and CloudFront signed media delivery for large video files.",
      "Added FFmpeg thumbnail generation and automated video-template packaging.",
    ],
  },
];

export const education = {
  school: "Guru Nanak Dev Engineering College, Ludhiana",
  degree: "B.Tech, Information Technology",
  dates: "2019 — 2023",
  gpa: "8.5 / 10",
};
