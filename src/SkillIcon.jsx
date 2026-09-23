import { Code } from "lucide-react";
import { FaAws, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiApachekafka,
  SiDocker,
  SiExpress,
  SiFfmpeg,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJsonwebtokens,
  SiMailgun,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiRabbitmq,
  SiReact,
  SiRedis,
  SiSocketdotio,
  SiStripe,
  SiTypeorm,
  SiTypescript,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const ICONS = {
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  react: { Icon: SiReact, color: "#61DAFB" },
  node: { Icon: SiNodedotjs, color: "#5FA04E" },
  nest: { Icon: SiNestjs, color: "#E0234E" },
  express: { Icon: SiExpress, color: "#E8E6E1" },
  docker: { Icon: SiDocker, color: "#2496ED" },
  git: { Icon: SiGit, color: "#F05032" },
  github: { Icon: SiGithub, color: "#E8E6E1" },
  rabbitmq: { Icon: SiRabbitmq, color: "#FF6600" },
  kafka: { Icon: SiApachekafka, color: "#E8E6E1" },
  postgres: { Icon: SiPostgresql, color: "#4169E1" },
  mongo: { Icon: SiMongodb, color: "#47A248" },
  redis: { Icon: SiRedis, color: "#FF4438" },
  typeorm: { Icon: SiTypeorm, color: "#FE0803" },
  mongoose: { Icon: SiMongoose, color: "#880000" },
  aws: { Icon: FaAws, color: "#FF9900" },
  azure: { Icon: VscAzure, color: "#0078D4" },
  stripe: { Icon: SiStripe, color: "#635BFF" },
  socketio: { Icon: SiSocketdotio, color: "#E8E6E1" },
  ffmpeg: { Icon: SiFfmpeg, color: "#007808" },
  mailgun: { Icon: SiMailgun, color: "#F06B66" },
  jwt: { Icon: SiJsonwebtokens, color: "#FB015B" },
};

const TECH_ALIASES = {
  "Node.js": "node",
  NestJS: "nest",
  TypeORM: "typeorm",
  RabbitMQ: "rabbitmq",
  PostgreSQL: "postgres",
  MongoDB: "mongo",
  AWS: "aws",
  "AWS S3": "aws",
  Stripe: "stripe",
  "Socket.IO": "socketio",
  "Express.js": "express",
  Express: "express",
  Docker: "docker",
  CloudFront: "aws",
  FFmpeg: "ffmpeg",
  Mailgun: "mailgun",
  JWT: "jwt",
  Microservices: "micro",
};

export function SocialIcon({ name }) {
  const Icon = name === "linkedin" ? FaLinkedin : FaGithub;
  return <Icon aria-hidden="true" />;
}

export function TechIcon({ name }) {
  return <SkillIcon name={TECH_ALIASES[name]} />;
}

export default function SkillIcon({ name }) {
  const entry = ICONS[name];
  if (!entry) return null;

  const { Icon, color } = entry;
  return <Icon color={color} aria-hidden="true" />;
}
