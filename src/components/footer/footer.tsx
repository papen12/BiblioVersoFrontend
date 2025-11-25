import type { FC } from 'react';
import "./footer.css";

import { 
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-section">
          <h3>Biblioverso</h3>
          <p>Tu biblioteca digital de confianza.</p>
          <p>Descubre, aprende y explora.</p>
        </div>
        <div className="footer-section">
          <h4>Recursos</h4>
          <a href="#">Catálogo</a>
          <a href="#">Novedades</a>
          <a href="#">Recomendaciones</a>
        </div>
        <div className="footer-section">
          <h4>Soporte</h4>
          <a href="#">Ayuda</a>
          <a href="#">Contacto</a>
          <a href="#">Preguntas Frecuentes</a>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#">Política de Privacidad</a>
          <a href="#">Términos y Condiciones</a>
        </div>
      </div>

      <div className="footer-social">
        <FaFacebookF />
        <FaInstagram />
        <FaTwitter />
        <FaRegEnvelope />
        <FaYoutube />
      </div>

      <div className="footer-copy">
        Copyright © BIBLIOVERSO
      </div>
    </footer>
  );
};

export default Footer;
