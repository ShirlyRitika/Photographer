import React from "react";
import insta from "../assets/skill-icons_instagram.png";
import fb from "../assets/logos_facebook.png";
import thread from "../assets/streamline-logos_thread-logo-logo-solid.png";
import camera from "../assets/Vector (1).png";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-logo-block">
        <div className="footer-logo-circle">
          <img src={camera} alt="logo icon" className="footer-logo-img" />
        </div>

        <div className="footer-logo-texts">
          <div className="footer-logo-text">PHOTOGRAPHY</div>
          <span className="line"></span>
          <div className="footer-logo-sub">ALEX VOLKOV</div>
        </div>
      </div>

      <div className="footer-contact-container">
        <span className="footer-line"></span>
        <span className="footer-contact-title">Contact us</span>
        <span className="footer-line"></span>
      </div>

      <div className="footer-social-row">
        <img src={insta} alt="instagram" />
        <img src={fb} alt="facebook" />
        <img src={thread} alt="thread" />
      </div>

      <div className="footer-message-block">
        <h2 className="short-msg-heading">Short message</h2>

        <p className="short-msg-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
          tincidunt sed posuere rhoncus, quis quam, condimentum sed diam sem.
          Maecenas fermentum ac aliquet felis.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
