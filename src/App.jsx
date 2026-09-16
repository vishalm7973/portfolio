import { useEffect, useState } from "react";
import {
  Award,
  Briefcase,
  Building2,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import {
  about,
  education,
  experience,
  profile,
  projects,
  skills,
} from "./data";
import SkillIcon, { SocialIcon } from "./SkillIcon";

const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selected, setSelected] = useState(null);
  useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, selected]);

  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>

      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="logo" href="#top">
          VM
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      {menuOpen && (
        <div
          className="nav-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      <nav
        id="mobile-nav"
        className={`nav-mobile ${menuOpen ? "is-open" : ""}`}
        aria-label="Mobile"
      >
        {NAV.map((item) => (
          <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          Resume
        </a>
        <a href={`mailto:${profile.email}`} onClick={closeMenu}>
          Email
        </a>
      </nav>

      <main id="content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow reveal-hero" style={{ "--d": "0ms" }}>
              {profile.role}
            </p>
            <h1 className="hero-name">
              <span className="reveal-hero" style={{ "--d": "80ms" }}>
                Vishal
              </span>{" "}
              <span className="reveal-hero" style={{ "--d": "160ms" }}>
                Maurya
              </span>
            </h1>
            <p className="hero-lede reveal-hero" style={{ "--d": "240ms" }}>
              {profile.summary}
            </p>
            <ul className="hero-meta reveal-hero" style={{ "--d": "320ms" }}>
              <li>
                <MapPin aria-hidden="true" />
                <span>{profile.location}</span>
              </li>
              <li>
                <Briefcase aria-hidden="true" />
                <span>2.5+ years</span>
              </li>
              <li>
                <Layers aria-hidden="true" />
                <span>Node.js · NestJS · Microservices</span>
              </li>
            </ul>
            <div className="hero-actions reveal-hero" style={{ "--d": "400ms" }}>
              <a
                className="btn btn-primary"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <a className="btn btn-ghost" href="#about">
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-photo reveal-hero" style={{ "--d": "200ms" }}>
            <img src={profile.photo} alt="Portrait of Vishal Maurya" />
          </div>
        </section>

        <section id="about" className="section" data-reveal>
          <div className="section-label">
            <span>01</span> About
          </div>
          <div className="about-grid">
            <div className="about-copy">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="about-contact">
                <a href={`mailto:${profile.email}`}>
                  <Mail aria-hidden="true" />
                  <span>{profile.email}</span>
                </a>
                <a href={profile.phoneHref}>
                  <Phone aria-hidden="true" />
                  <span>{profile.phone}</span>
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <SocialIcon name="github" />
                  <span>GitHub</span>
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <SocialIcon name="linkedin" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <aside className="skill-card education-card">
              <h3>Education</h3>
              <ul>
                <li>
                  <span className="edu-head">
                    <GraduationCap aria-hidden="true" />
                    <span className="edu-label">Degree</span>
                  </span>
                  <span className="edu-value">{education.degree}</span>
                </li>
                <li>
                  <span className="edu-head">
                    <Building2 aria-hidden="true" />
                    <span className="edu-label">College</span>
                  </span>
                  <span className="edu-value">{education.school}</span>
                </li>
                <li>
                  <span className="edu-head">
                    <CalendarDays aria-hidden="true" />
                    <span className="edu-label">Duration</span>
                  </span>
                  <span className="edu-value">{education.dates}</span>
                </li>
                <li>
                  <span className="edu-head">
                    <Award aria-hidden="true" />
                    <span className="edu-label">GPA</span>
                  </span>
                  <span className="edu-value">{education.gpa}</span>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="skills" className="section" data-reveal>
          <div className="section-label">
            <span>02</span> Skills
          </div>
          <div className="skill-cards">
            {skills.map((group) => (
              <article className="skill-card" key={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <SkillIcon name={item.icon} />
                      <span>{item.name}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section" data-reveal>
          <div className="section-label">
            <span>03</span> Experience
          </div>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company} className="timeline-item">
                <div className="timeline-meta">
                  <h3>{job.company}</h3>
                  <p>{job.period}</p>
                </div>
                <div className="timeline-body">
                  {job.roles.map((role) => (
                    <article key={role.title} className="role">
                      <header>
                        <h4>{role.title}</h4>
                        <p>{role.dates}</p>
                      </header>
                      <ul>
                        {role.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="work" className="section" data-reveal>
          <div className="section-label">
            <span>04</span> Key Projects
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <button
                type="button"
                className="project-card"
                key={project.name}
                onClick={() => setSelected(project)}
                aria-label={`Open ${project.name} details`}
              >
                <div className="project-thumb">
                  {project.image ? (
                    <img src={project.image} alt="" />
                  ) : (
                    <span className="project-thumb-fallback">
                      {project.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  )}
                </div>
                <div className="project-copy">
                  <div className="project-head">
                    <h3>{project.name}</h3>
                    <span>{project.kind}</span>
                  </div>
                  <p>{project.description}</p>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Vishal Maurya</p>
        <div className="socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <SocialIcon name="github" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <SocialIcon name="linkedin" />
          </a>
        </div>
      </footer>

      {selected && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="project-modal-close"
              type="button"
              onClick={() => setSelected(null)}
            >
              <span className="sr-only">Close project details</span>
              <X aria-hidden="true" />
            </button>
            {selected.image && (
              <img
                className="project-modal-image"
                src={selected.image}
                alt={`${selected.name} screenshot`}
              />
            )}
            <div className="project-modal-body">
              <p className="project-modal-kind">{selected.kind}</p>
              <h3 id="project-modal-title">{selected.name}</h3>
              <p className="project-modal-lede">{selected.description}</p>
              <ul className="project-modal-details">
                {selected.details.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="stack">
                {selected.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {(selected.live || selected.github) && (
                <div className="project-modal-actions">
                  {selected.live && (
                    <a
                      className="btn btn-primary"
                      href={selected.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink aria-hidden="true" />
                      Live site
                    </a>
                  )}
                  {selected.github && (
                    <a
                      className="btn btn-ghost"
                      href={selected.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <SocialIcon name="github" />
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
