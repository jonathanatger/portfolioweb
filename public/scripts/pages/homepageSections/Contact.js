import React from "react";
import { Link } from "react-router-dom";
import TwitterImage from "../../../content/ico-twitter-250.png";
import WebImage from "../../../content/ico-web-100.png";
import GithubImage from "../../../content/ico-github-96.png";

const Curtain = function () {
  const pointRows = 10;
  const pointColumns = 10;

  const points = [];

  for (let i = 1; i < pointRows; i++) {
    for (let j = 1; j < pointColumns; j++) {
      let cssGridR = i.toString();
      let cssGridC = j.toString();

      points.push(
        <h3
          key={i.toString() + j.toString()}
          style={{
            gridRow: cssGridR,
            gridColumn: cssGridC,
          }}
        >
          .
        </h3>
      );
    }
  }

  return <div className="contact-points">{points}</div>;
};

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
      className="contact-info-mail"
    >
      {label}
    </Link>
  );
};
const cvLinkText = "EN SAVOIR PLUS >";
const mailLinkText = "ENVOYER UN MAIL >";

const ContactInfo = function () {
  return (
    <div className="contact-info">
      <div className="contact-info-intro">
        <h3 className="contact-info-text">
          D'abord auto-didacte, j'ai appris à développer autour de l'écosystème
          logiciel du monde de la construction. Par intérêt, j'ai continué dans
          le data-science et le machine learning, le développement sous Unity,
          et enfin sur le web avec une formation en ligne.
        </h3>
        <h3 className="contact-info-text">
          Précédemment chef de projet architecte et ingénieur .
        </h3>
        <Link to="/cv" className="contact-info-cv">
          {cvLinkText}
        </Link>
      </div>
      <div className="contact-info-links">
        <h2>Jonathan ATGER</h2>
        <div className="contact-info-logos">
          <img src={GithubImage} className="contact-image" alt="Github"></img>
          <img src={TwitterImage} className="contact-image" alt="Twitter"></img>
          <img src={WebImage} className="contact-image" alt="Webpage"></img>
        </div>
        <ButtonMailto
          label="ENVOYER UN MAIL >"
          mailto="mailto:jonathan.atger@gmail.com"
        />
      </div>
    </div>
  );
};

const Contact = function () {
  return (
    <div className="contact-main-container">
      <Curtain />
      <ContactInfo />
    </div>
  );
};

export default Contact;
