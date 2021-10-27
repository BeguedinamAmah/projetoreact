import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
        Junte-se à nossa assinatura exclusiva para receber as últimas notícias e tendências
        </p>
        <p className="footer-subscription-text">
        Você pode cancelar sua inscrição a qualquer momento.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Se inscrever</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Sobre nós</h2>
            <Link to="/sign-up">Como funciona</Link>
            <Link to="/">Testemunhos</Link>
            <Link to="/">Carreiras</Link>
            <Link to="/">Investidores</Link>
            <Link to="/">Termos de serviço</Link>
          </div>
          <div className="footer-link-items">
            <h2>Fala Conosco</h2>
            <Link to="/">Contato</Link>
            <Link to="/">uporte</Link>
            <Link to="/">Destinos</Link>
            <Link to="/">Patrocínios</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Enviar Vídeo</Link>
            <Link to="/">Embaixadores</Link>
            <Link to="/">Agência</Link>
            <Link to="/">Influenciador</Link>
          </div>
          <div className="footer-link-items">
            <h2>Mídia social</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">GitHub</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <MdFingerprint className="navbar-icon" />
              
            </Link>
          </div>
          <small className="website-rights">DAIMOND BANK © 2020</small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={
                "/"
              }
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
