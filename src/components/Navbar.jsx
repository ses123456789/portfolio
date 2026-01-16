import { useState } from "react";
import "./Navbar.css";
import Themetoggle from "./Themetoggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">SES</div>

      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#home">{t.nav.home}</a></li>
        <li><a href="#education">{t.nav.education}</a></li>
        <li><a href="#skills">{t.nav.skills}</a></li>
        <li><a href="#experience">{t.nav.experience}</a></li>
        <li><a href="#portfolio">{t.nav.portfolio}</a></li>
        <li><a href="#contact">{t.nav.contact}</a></li>

        <li className="nav-icons">
          <Themetoggle />
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
