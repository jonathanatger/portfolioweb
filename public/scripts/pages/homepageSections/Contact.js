import React from "react";

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
          key={i.toString()}
          style={{
            "grid-row": cssGridR,
            "grid-column": cssGridC,
          }}
        >
          .
        </h3>
      );
    }
  }

  return <div className="contact-points">{points}</div>;
};

const ContactInfo = function () {
  return (
    <div className="contact-info">
      <div>
        <h3 className="contact-info-text">
          Je suis un coureur de fond de l'espace, avec un background en
          architecture et ingéniérie, et une appétence pour le chocolat au lait.
          Vous pouvez me contacter au numéro 3612 Papy Chulo
        </h3>
      </div>
      <div>
        <h1>Contact Info</h1>
        <h1>Contact Info</h1>
        <h1>Contact Info</h1>
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
