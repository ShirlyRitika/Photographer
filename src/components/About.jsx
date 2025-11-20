import React from "react";
import aboutTop from "../assets/Rectangle 34624579.png";
import aboutLeft from "../assets/Rectangle 34624580.png";
import aboutBottom from "../assets/Rectangle 34624581.png";
const About = () => {
  return (
    <section className="about-section">
      <div className="about-left">
        <h2 className="section-heading">---------- About me</h2>
        <h2 className="section-heding-lorem">
          Lorem ipsum dolor sit amet <br />
          consectetur adipiscing elit.{" "}
        </h2>
        <h2>-----------------------</h2>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
          tincidunt sed purus phasellus condimentum sed diam sem. Maecenas
          fermentum ac aliquet felis. Eu sagittis, purus auctor curabitur.
          Pellentesque in quis rhoncus vel sed n Lorem ipsum dolor sit amet,
          consectetur adipiscing Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc, tincidunt sed purus phasellus Lorem ipsum dolor
          sit amet, consectetur Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc, tincidunt sed purus phasellus condimentum sed
          diam sem. Maecenas fermentum ac aliquet felis. Eu sagittis, purus
          auctor curabitur. Pellentesque in quis rhoncus vel sed n
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus
          phasellus Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nunc, tincidunt sed purus
          phasellus condimentum sed diam sem. Maecenas fermentum ac aliquet
          felis. Eu sagittis, purus auctor curabitur. Pellentesque in quis
          rhoncus vel sed
        </p>
      </div>
      <div className="about-right">
        <div className="about-main-img">
          <img src={aboutTop} alt="camera on field" />
        </div>

        <div className="about-side-images">
          <img src={aboutLeft} alt="studio lights" />
          <img src={aboutBottom} alt="camera close up" />
        </div>
      </div>
    </section>
  );
};

export default About;
