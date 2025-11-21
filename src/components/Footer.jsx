import React from "react";
import insta from "../assets/skill-icons_instagram.png";
import fb from "../assets/logos_facebook.png";
import thread from "../assets/streamline-logos_thread-logo-logo-solid.png";
import camera from "../assets/Vector (1).png";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer-section"]}>
      <div className={styles["footer-logo-block"]}>
        <div className={styles["footer-logo-circle"]}>
          <img
            src={camera}
            alt="logo icon"
            className={styles["footer-logo-img"]}
          />
        </div>

        <div className={styles["footer-logo-texts"]}>
          <div className={styles["footer-logo-text"]}>PHOTOGRAPHY</div>
          <span className={styles["line"]}></span>
          <div className={styles["footer-logo-sub"]}>ALEX VOLKOV</div>
        </div>
      </div>

      <div className={styles["footer-contact-container"]}>
        <span className={styles["footer-line"]}></span>
        <span className={styles["footer-contact-title"]}>Contact us</span>
        <span className={styles["footer-line"]}></span>
      </div>

      <div className={styles["footer-social-row"]}>
        <img src={insta} alt="instagram" />
        <img src={fb} alt="facebook" />
        <img src={thread} alt="thread" />
      </div>

      <div className={styles["footer-message-block"]}>
        <h2 className={styles["short-msg-heading"]}>Short message</h2>

        <p className={styles["short-msg-text"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
          tincidunt sed posuere rhoncus, quis quam, condimentum sed diam sem.
          Maecenas fermentum ac aliquet felis.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
