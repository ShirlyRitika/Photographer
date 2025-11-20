import React from "react";
import heroImg from "../assets/Rectangle 34624577.png";
import person from "../assets/image 198.png";
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <img src={heroImg} alt="photographer" className="hero-photo" />
        <img src="{person}" alt="image" />
      </div>

      <div className="hero-right">
        <p className="hero-name-small">ALEX VOLKAV </p>
        <h1 className="hero-title">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit.
        </h1>
        <h1> ------------------ </h1>
        <p className="hero-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
          tincidunt sed posuere rhoncus, quis quam. Habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </p>

        <p className="hero-desc">
          Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros nec
          sem tempus, ut volutpat dolor consequat.
        </p>

        <div className="hero-buttons">
          <button className="btn primary-btn">About me</button>
          <button className="btn outline-btn">Contact me</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
