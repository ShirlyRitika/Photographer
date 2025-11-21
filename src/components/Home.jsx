import React from "react";
import heroImg from "../assets/Rectangle 34624577.png";
import secondHeroImg from "../assets/image 198.png";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <img src={heroImg} alt="photographer" className="hero-photo" />
        <img src={secondHeroImg} alt="side camera" className="hero-small-img" />
      </div>

      <div className="hero-right">
        <p className="hero-name-small">ALEX VOLKAV</p>

        <h1 className="hero-title">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </h1>

        <div className="hero-line"></div>

        <p className="hero-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
          tincidunt sed purus phasellus condimentum sed diam sem. Maecenas
          fermentum ac aliquet felis.
        </p>

        <p className="hero-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus
          phasellus Lorem ipsum dolor sit amet, consectetur
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
