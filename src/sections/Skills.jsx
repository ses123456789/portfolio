import "./Skills.css";
import { useLanguage } from "../context/LanguageContext";

function Skills() {
   const { t } = useLanguage();
  return (
    <div className="skills">
      <h2>{t.skills.tecskill}</h2>

        <div className="skills-group">
            <h3>{t.skills.language}</h3>
             <div className="skills-grid">
             <Skill name="JavaScript" icon="javascript" />
             <Skill name="C++" icon="c++" />
             <Skill name="C#" icon="csharp" />
            <Skill name="Python" icon="python" />
            </div>
      </div>
      
      <div className="skills-group">
        <h3>Frontend</h3>
        <div className="skills-grid">
          <Skill name="HTML" icon="html" />
          <Skill name="CSS" icon="css" />
        
          <Skill name="React" icon="react" />
        </div>
      </div>

      <div className="skills-group">
        <h3>{t.skills.backend}</h3>
        <div className="skills-grid">
          <Skill name="Node.js" icon="node" />
          <Skill name="MySQL" icon="mysql" />
          <Skill name="MongoDB" icon="mongodb" />
          <Skill name="PostgreSQL" icon="postgresql" />
          <div className="skill-card">
            <span>Xano (Backend as a Service)</span>
          </div>
          
        </div>
      </div>

      <div className="skills-group">
        <h3>{t.skills.tools}</h3>
        <div className="skills-grid">
          <Skill name="Git" icon="git" />
          <Skill name="GitHub" icon="github" />
          <Skill name="Docker" icon="docker" />
          <Skill name="Figma" icon="figma" />
          <div className="skill-card">
            <span>FlutterFlow</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skill({ name, icon }) {
  return (
    <div className="skill-card">
      <img
        src={`/icons/${icon}.svg`}
        alt={name}
        className="skill-icon"
      />
      <span>{name}</span>
    </div>
  );
}

export default Skills;
