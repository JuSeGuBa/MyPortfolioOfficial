import "../styles/Skills.css";
import { useEffect, useRef, useState, useMemo } from "react";

interface Skill {
  name: string;
  level: number;
  baseColor: string;
  hoverColor: string;
}

const SKILLS: Skill[] = [
  { name: "Next.js", level: 100, baseColor: "#080808", hoverColor: "#09B57B" },
  { name: "React", level: 100, baseColor: "#1848a0", hoverColor: "#006fb9" },
  { name: "Angular", level: 100, baseColor: "#dd1b16", hoverColor: "#f44336" },
  { name: "Vue", level: 100, baseColor: "#42b883", hoverColor: "#42b883" },
  {
    name: "Redux Toolkit",
    level: 90,
    baseColor: "#764abc",
    hoverColor: "#a87dd6",
  },
  { name: "Vite", level: 100, baseColor: "#ffc600", hoverColor: "#ffde73" },
  {
    name: "Tailwind CSS",
    level: 100,
    baseColor: "#06b6d4",
    hoverColor: "#0ea5e9",
  },
  {
    name: "Bootstrap",
    level: 100,
    baseColor: "#7952b3",
    hoverColor: "#9d70d1",
  },
  {
    name: "JavaScript",
    level: 100,
    baseColor: "#efd81c",
    hoverColor: "#f0db4f",
  },
  {
    name: "TypeScript",
    level: 100,
    baseColor: "#3178c6",
    hoverColor: "#4c9be0",
  },
  { name: "HTML", level: 100, baseColor: "#e34c26", hoverColor: "#ff6b4a" },
  { name: "CSS", level: 100, baseColor: "#264de4", hoverColor: "#5596f6" },
  { name: "DOM", level: 100, baseColor: "#303030", hoverColor: "#555" },
  {
    name: "CSS Modules",
    level: 80,
    baseColor: "#43853d",
    hoverColor: "#6fc46f",
  },
  { name: "PostCSS", level: 80, baseColor: "#dd3735", hoverColor: "#f0625d" },
  { name: "SCSS", level: 80, baseColor: "#bf4080", hoverColor: "#e071a8" },
  { name: "Git", level: 100, baseColor: "#f05133", hoverColor: "#ff735c" },
  { name: "GitHub", level: 100, baseColor: "#000000", hoverColor: "#333" },
  {
    name: "Bitbucket",
    level: 100,
    baseColor: "#0052cc",
    hoverColor: "#287eff",
  },
];

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const skills = useMemo(() => SKILLS, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-section" ref={containerRef}>
      <div className="title-skills">
        <h1>
          <span className="s">S</span>kills
        </h1>
      </div>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={skill.name} className="skill">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-level-label">{skill.level}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-inner"
                style={{
                  width: animate ? `${skill.level}%` : "0%",
                  transitionDelay: `${index * 80}ms`,
                  background: `linear-gradient(90deg, ${skill.baseColor}, ${skill.hoverColor})`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
