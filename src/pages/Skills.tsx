import "../styles/Skills.css";

interface Skill {
  name: string;
  level: number; // Porcentaje de habilidad (ej. 75)
}

const skills: Skill[] = [
  { name: "JavaScript", level: 50 },
  { name: "React", level: 80 },
  { name: "TypeScript", level: 70 },
  { name: "SQL", level: 20 },
  { name: "Algoritmos", level: 25 },
  { name: "NodeJs", level: 25 },
  { name: "DOM", level: 40 },
  { name: "CSS", level: 90 },
  { name: "HTML", level: 90 },
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
