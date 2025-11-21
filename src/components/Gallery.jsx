import React from "react";
import g1 from "../assets/Rectangle 34624582.png";
import g2 from "../assets/Rectangle 34624583.png";
import g3 from "../assets/Rectangle 34624584.png";
import g4 from "../assets/Rectangle 34624585.png";
import styles from "../styles/Gallery.module.css";

function Gallery() {
  return (
    <section className={styles["gallery-section"]}>
      <div className={styles["line-heading"]}>
        <span className={styles["line"]}></span>
        <span className={styles["line-text"]}>My Gallery</span>
      </div>

      <div className={styles["gallery-slider"]}>
        <div className={styles["gallery-row"]}>
          <img src={g1} alt="gallery 1" />
          <img src={g2} alt="gallery 2" />
          <img src={g3} alt="gallery 3" />
          <img src={g4} alt="gallery 4" />
        </div>
      </div>

      <p className={styles["gallery-caption"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt
        sed purus phasellus
        <br />
        condimentum sed diam sem. Maecenas fermentum ac aliquet felis.
      </p>
    </section>
  );
}

export default Gallery;
