import "../styles/Skills.css";

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  // Frameworks primero
  { name: "React", level: 100 },
  { name: "Angular", level: 100 },
  { name: "Redux Toolkit", level: 90 },
  { name: "Vite", level: 100 },
  { name: "Tailwind CSS", level: 100 },
  { name: "Bootstrap", level: 100 },

  // Lenguajes base
  { name: "JavaScript", level: 100 },
  { name: "TypeScript", level: 100 },
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "DOM", level: 100 },

  // Preprocesadores y estilos
  { name: "CSS Modules", level: 80 },
  { name: "PostCSS", level: 80 },
  { name: "SCSS", level: 80 },

  // Herramientas de control de versiones
  { name: "Git", level: 100 },
  { name: "GitHub", level: 100 },
  { name: "Bitbucket", level: 100 },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="title-skills">
        <h1>
          <span className="s">S</span>kills
        </h1>
      </div>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-name">{skill.name}</div>
            <div className="progress-bar">
              <div
                className="progress-bar-inner"
                style={{ width: `${skill.level}%` }}
              >
                <span className="skill-percentage">{skill.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
