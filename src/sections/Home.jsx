import "./Home.css";
import { useLanguage } from "../context/LanguageContext";
function Home() {
    const { t } = useLanguage();
  return (
    <div className="home">
      <img
        src="/Foto CV.jpeg"
        alt="Santiago Estrada"
        className="profile-pic"
      />

      <h2>Santiago Estrada Sotelo</h2>
      <h3>{t.home.role}</h3>

      <p>
    {t.home.about}
      </p>
    </div>
  );
}

export default Home;
