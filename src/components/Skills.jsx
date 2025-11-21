import React from "react";
import profile from "../assets/hugeicons_face-id.png";
import gallery from "../assets/Vector.png";
import wedding from "../assets/hugeicons_wedding.png";
import tv from "../assets/game-icons_tv.png";
import styles from "../styles/Skills.module.css";

function Skills() {
  return (
    <section className={styles["skills-section"]}>
      <div className={styles["line-heading"]}>
        <span className={styles["line"]}></span>
        <span className={styles["line-text"]}>My Skills</span>
      </div>

      <div className={styles["skills-row"]}>
        <div className={styles["skill-item"]}>
          <div className={styles["skill-icon"]}>
            <img src={profile} alt="" />
          </div>
          <h3 className={styles["skill-title"]}>Lorem ipsum</h3>
          <p className={styles["skill-text"]}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>

        <div className={styles["skill-item"]}>
          <div className={styles["skill-icon"]}>
            <img src={gallery} alt="" />
          </div>
          <h3 className={styles["skill-title"]}>Lorem ipsum</h3>
          <p className={styles["skill-text"]}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>

        <div className={styles["skill-item"]}>
          <div className={styles["skill-icon"]}>
            <img src={wedding} alt="" />
          </div>
          <h3 className={styles["skill-title"]}>Lorem ipsum</h3>
          <p className={styles["skill-text"]}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>

        <div className={styles["skill-item"]}>
          <div className={styles["skill-icon"]}>
            <img src={tv} alt="" />
          </div>
          <h3 className={styles["skill-title"]}>Lorem ipsum</h3>
          <p className={styles["skill-text"]}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
