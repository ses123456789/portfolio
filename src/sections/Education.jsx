import "./Education.css";
import { useLanguage } from "../context/LanguageContext";

function Education() {

     const { t } = useLanguage();
    const logos = {
    platzi: "/logos/platzi.png", 
    ef: "/logos/ef.png",
    cursa: "/logos/cursa.png",
    sololearn: "/logos/sololearn.png"
  };

  return (
    <div className="education">
      <h2>{t.education.head}</h2>

      {/* universidad */}
      <div className="education-block featured">
  
       
         <div className="university-info">
        <h3>{t.education.degree}</h3>
        <p className="institution">Universidad Santo Tomás</p>
        <p className="date">2024</p>
        <a href="diploma de grado.pdf" className="btn">{t.education.diploma}</a>
    </div>
  
     {/* Columna derecha */}
      <div className="university-logo-container">
      <img src="/logos/ust.png" alt="Universidad Santo Tomás" className="university-logo" />
      </div>
  
    </div>

      {/* Cursos / certificaciones */}
      <h3 className="subtitle">{t.education.courses}</h3>

      <div className="education-grid">

         <div className="education-card">
            <img 
              src={logos.platzi} 
              alt="Platzi" 
              className="course-logo"
            />
          <h4>Curso de N8N</h4>
          <p>Platzi</p>
          <a
            href="https://platzi.com/p/sestradasptelo12/curso/12028-course/diploma/detalle/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.education.certifications}
          </a>
        </div>
         <div className="education-card">
          <img 
              src={logos.ef} 
              alt="EF" 
              className="course-logo"
            />
          <h4>EF SET English certificate</h4>
          <p>EF</p>
          <a
            href="https://cert.efset.org/en/U8F13E"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.education.certifications}
          </a>
        </div>

         <div className="education-card">
          <img 
              src={logos.platzi} 
              alt="Platzi" 
              className="course-logo"
            />
          <h4>Curso de Backend con Node.js: Base de Datos con PostgreSQL</h4>
          <p>Platzi</p>
          <a
            href="https://platzi.com/p/sestradasptelo12/curso/2507-course/diploma/detalle/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.education.certifications}
          </a>
        </div>

         <div className="education-card">
          <img 
              src={logos.platzi} 
              alt="Platzi" 
              className="course-logo"
            />
          <h4>Curso de Backend con Node.js: API REST con Express.js</h4>
          <p>Platzi</p>
          <a
            href="https://platzi.com/p/sestradasptelo12/curso/2485-course/diploma/detalle/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.education.certifications}
          </a>
        </div>

         <div className="education-card">
          <img 
              src={logos.platzi} 
              alt="Platzi" 
              className="course-logo"
            />
          <h4>Curso de Kotlin desde Cero</h4>
          <p>Platzi</p>
          <a
            href="https://platzi.com/p/sestradasptelo12/curso/2245-course/diploma/detalle/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.education.certifications}
          </a>
        </div>

         <div className="education-card">
          <img 
              src={logos.platzi} 
              alt="Platzi" 
              className="course-logo"
            />
          <h4>Curso de React Native: Formularios, Almacenamiento y Deploy</h4>
          <p>Platzi</p>
          <a
            href="https://platzi.com/p/sestradasptelo12/curso/2558-course/diploma/detalle/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.education.certifications}
          </a>
        </div>

         <div className="education-card">
          <img 
              src={logos.platzi} 
              alt="Platzi" 
              className="course-logo"
            />
          <h4>Curso de React Native: Manejo de Listas y Consumo de APIs</h4>
          <p>Platzi</p>
          <a
            href="https://platzi.com/p/sestradasptelo12/curso/2557-course/diploma/detalle/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.education.certifications}
          </a>
        </div>
        <div className="education-card">
          <img 
              src={logos.platzi} 
              alt="Platzi" 
              className="course-logo"
            />
          <h4>Taller Práctico de JavaScript: ¡Crea tu Primer Videojuego</h4>
          <p>Platzi</p>
          <a
            href="https://platzi.com/p/sestradasptelo12/curso/3573-course/diploma/detalle/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.education.certifications}
          </a>
        </div>

        <div className="education-card">
          <img 
              src={logos.cursa} 
              alt="Cursa" 
              className="course-logo"
            />
          <h4>Aprende React desde 0</h4>
          <p>Cursa</p>
          <a
            href="https://cursa.app/es/mi-certificado/cert514c857a65125a3c7714be9d4817b687"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.education.certifications}
          </a>
        </div>

        <div className="education-card">
          <img 
              src={logos.platzi} 
              alt="Platzi" 
              className="course-logo"
            />
          <h4>Curso Profesional de Git y GitHub</h4>
          <p>Platzi</p>
          <a
            href="https://platzi.com/p/sestradasptelo12/curso/1557-course/diploma/detalle/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.education.certifications}
          </a>
        </div>
        <div className="education-card">
          <img 
              src={logos.sololearn} 
              alt="Sololearn" 
              className="course-logo"
            />
          <h4>Promt Engineering</h4>
          <p>Sololearn</p>
          <a
            href="https://www.sololearn.com/es/certificates/CC-ORVZSYK9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.education.certifications}
          </a>
        </div>

        

         <div className="education-card">
          <img 
              src={logos.sololearn} 
              alt="Sololearn" 
              className="course-logo"
            />
          <h4>Python Developer</h4>
          <p>Sololearn</p>
          <a
            href="https://www.sololearn.com/es/certificates/CC-IOHFBLOR"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            {t.education.certifications}
          </a>
        </div>

         

      </div>
    </div>
  );
}

export default Education;
