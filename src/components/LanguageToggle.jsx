import { useLanguage } from "../context/LanguageContext";
import "./LanguageToggle.css";

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label="Toggle language"
    >
      {language === "es" ? "ES" : "EN"}
    </button>
  );
}

export default LanguageToggle;
