import React from "react";
import aboutTop from "../assets/Rectangle 34624579.png";
import aboutLeft from "../assets/Rectangle 34624580.png";
import aboutBottom from "../assets/Rectangle 34624581.png";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <section className={styles["about-section"]}>
      <div className={styles["about-left"]}>
        <div className={styles["line-heading"]}>
          <span className={styles["line"]}></span>
          <span className={styles["line-text"]}>About me</span>
        </div>

        <h2 className={styles["aboutHeading"]}>
          Lorem ipsum dolor sit amet <br />
          consectetur adipiscing elit.
        </h2>

        <div className={styles["hero-line"]}></div>

        <p className={styles["about-text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
          tincidunt sed <br />
          purus phasellus condimentum sed diam sem. Maecenas fermentum ac
          aliquet <br /> felis. Eu sagittis, purus auctor curabitur.
          Pellentesque in quis rhoncus vel sed n <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
          sit amet, <br /> consectetur adipiscing elit. Nunc, tincidunt sed
          purus phasellus Lorem ipsum <br /> dolor sit amet, consectetur Lorem
          ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc,
          tincidunt sed purus phasellus condimentum sed diam sem. <br />{" "}
          Maecenas fermentum ac aliquet felis. Eu sagittis, purus auctor
          curabitur. <br /> Pellentesque in quis rhoncus vel sed n
        </p>

        <p className={styles["about-text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
          sit amet, <br /> consectetur adipiscing elit. <br /> Nunc, tincidunt
          sed purus phasellus Lorem ipsum <br /> dolor sit amet, consectetur
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nunc,
          tincidunt sed purus phasellus condimentum sed diam sem. <br />{" "}
          Maecenas fermentum ac aliquet felis. Eu sagittis, purus auctor
          curabitur. <br /> Pellentesque in quis rhoncus vel sed
        </p>
      </div>

      <div className={styles["about-right"]}>
        <div className={styles["about-main-img"]}>
          <img src={aboutTop} alt="camera on field" />
        </div>

        <div className={styles["about-side-images"]}>
          <img src={aboutLeft} alt="studio lights" />
          <img src={aboutBottom} alt="camera close up" />
        </div>
      </div>
    </section>
  );
};

export default About;
