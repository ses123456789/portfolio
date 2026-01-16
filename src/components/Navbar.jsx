import "./Navbar.css";
import Themetoggle from "./Themetoggle.jsx";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { t } = useLanguage();
  return (
    <nav className="navbar">
      <h1 className="logo">Santiago Estrada Sotelo</h1>

      <ul className="nav-links">
        <li><a href="#home">{t.nav.home}</a></li>
        <li><a href="#education">{t.nav.education}</a></li>
        <li><a href="#skills">{t.nav.skills}</a></li>
        <li><a href="#projects">{t.nav.portfolio}</a></li>
        <li><a href="#experience">{t.nav.experience}</a></li>
        <li><a href="#contact">{t.nav.contact}</a></li>
      </ul>
      <div className="navbar-right">
  <Themetoggle />
   <LanguageToggle />
</div>
    </nav>
  );
}

export default Navbar;
