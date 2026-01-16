import "./Experience.css";
import { useLanguage } from "../context/LanguageContext";

function Experience() {
  const { t } = useLanguage();

  return (
    <div className="experience">
      <h2>{t.experience.name}</h2>

      {/* Aldama */}
      <div className="experience-card">
        <div className="company-logo-container">
        <img
            src="/logos/aldama.png" 
            alt="Aldama Software"
            className="company-logo"
        />
        </div>
        <div className="experience-header">
          <h3>Full Stack Developer</h3>
          <span className="company">Aldama Software S.A.S</span>
          <span className="date">{t.experience.alddate}</span>   
        </div>

    
        <ul>
          {t.experience.alddesc.map((item, index) => (
          <li key={index}>{item}</li>
            ))}
        </ul>
      </div>

      {/* AOS */}
      <div className="experience-card">
        
        <div className="company-logo-container">
        <img
            src="/logos/aos.jpg" 
            alt="A.O.S SAS"
            className="company-logo"
        />
        </div>
        <div className="experience-header">
          <h3>Software Developer Intern</h3>
          <span className="company">A.O.S S.A.S</span>
          <span className="date">{t.experience.aosdate}</span>
        </div>

        <ul>
      {t.experience.aosdesc.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Experience;
