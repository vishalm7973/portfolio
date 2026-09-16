import { FaAws, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiApachekafka,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiRedis,
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
};

export function SocialIcon({ name }) {
  const Icon = name === "linkedin" ? FaLinkedin : FaGithub;
  return <Icon aria-hidden="true" />;
}

export default function SkillIcon({ name }) {
  const entry = ICONS[name];
  if (!entry) return null;

  const { Icon, color } = entry;
  return <Icon color={color} aria-hidden="true" />;
}
