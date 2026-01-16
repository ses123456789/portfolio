import "./Contact.css";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { t, language } = useLanguage();

  const cvFile =
    language === "es"
      ? "/Cv santiago estrada.pdf"
      : "/CV Santiago Estrada (EN).pdf";
  return (
    <div className="contact">
      <h2>{t.contact.head}</h2>
      <p className="subtitle">{t.contact.subtitle}</p>

      <div className="contact-info">
        <p>
          <strong>Email:</strong> sestradasptelo12@gmail.com
        </p>
      </div>

      <div className="contact-icons">
  <a
    href="https://www.linkedin.com/in/dev-santiago-estrada-sotelo/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <img src="/icons/linkedin.svg" alt="LinkedIn" />
  </a>

  <a
    href="https://github.com/ses123456789"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub"
  >
    <img src="/icons/github.svg" alt="GitHub"  className="github-icon" />
  </a>

  <a
    href="https://wa.me/573227794538"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <img src="/icons/whatsapp.svg" alt="WhatsApp" />
  </a>
</div>

      <a
        href={cvFile}
        download
        className="download-cv"
      >
       {t.contact.download}
      </a>
    </div>
  );
}

export default Contact;
