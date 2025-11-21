import React from "react";
import heroImg from "../assets/Rectangle 34624577.png";
import secondHeroImg from "../assets/image 198.png";
import styles from "../styles/Home.module.css";

function Hero() {
  return (
    <section className={styles["hero-section"]}>
      <div className={styles["hero-left"]}>
        <img
          src={heroImg}
          alt="photographer"
          className={styles["hero-photo"]}
        />
        <img
          src={secondHeroImg}
          alt="side camera"
          className={styles["hero-small-img"]}
        />
      </div>

      <div className={styles["hero-right"]}>
        <p className={styles["hero-name-small"]}>ALEX VOLKAV</p>

        <h1 className={styles["hero-title"]}>
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </h1>

        <div className={styles["hero-line"]}></div>

        <p className={styles["hero-desc"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Nunc,
          tincidunt sed <br /> purus phasellus condimentum sed <br /> diam sem.
          Maecenas fermentum ac aliquet felis.
        </p>

        <p className={styles["hero-desc"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. <br /> Nunc, tincidunt
          sed purus phasellus Lorem ipsum dolor <br /> sit amet, consectetur
        </p>

        <div className={styles["hero-buttons"]}>
          <button className={`${styles.btn} ${styles["primary-btn"]}`}>
            About me
          </button>
          <button className={`${styles.btn} ${styles["outline-btn"]}`}>
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
