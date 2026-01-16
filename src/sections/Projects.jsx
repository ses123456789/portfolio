import "./Projects.css";
import { useLanguage } from "../context/LanguageContext";

function Projects() {
  const { t } = useLanguage();
  return (
    <div className="portfolio">
      <h2>{t.projects.head}</h2>

      {/* Proyecto 1 */}
      <Project
        title="Pokedex App"
        description={t.projects.p1desc}
        features={t.projects.p1feat}
        tech="React Native · Expo · PokeAPI · React Navigation"
        github="https://github.com/ses123456789/Pokedex"
      />

      {/* Proyecto 2 */}
      <Project
        title={t.projects.p2name}
        description={t.projects.p2desc}
        features={t.projects.p2feat}
        tech="Python · FastAPI · PostgreSQL · Docker · Alembic"
        github="https://github.com/ses123456789/fastapi-jwt"
      />

      {/* Proyecto 3 */}
      <Project
        title={t.projects.p3name}
        description={t.projects.p3desc}
        features={t.projects.p3feat}
        tech="Node.js · Express.js · Sequelize · Docker · PostgreSQL · MySQL"
        github="https://github.com/ses123456789/online-store-backend"
      />
    </div>
  );
}

function Project({ title, description, features, tech, github }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p className="description">{description}</p>

      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <p className="tech">{tech}</p>

      <div className="project-links">
        <a href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;
