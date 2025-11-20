import React from "react";
import insta from "../assets/skill-icons_instagram.png";
import fb from "../assets/logos_facebook.png";
import thread from "../assets/streamline-logos_thread-logo-logo-solid.png";
function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-logo-block">
        <div className="footer-logo-circle">📷</div>
        <div>
          <div className="footer-logo-text">PHOTOGRAPHY</div>
          <div className="footer-logo-sub">ALEX VOLKOV</div>
        </div>
      </div>

      <div className="footer-contact-title">--------Contact us------</div>
      <br />
      <div className="footer-social-row">
        <div className="social-circle">
          <img src={insta} alt="" />
        </div>
        <div className="social-circle">
          <img src={fb} alt="" />
        </div>
        <div className="social-circle">
          <img src={thread} alt="" />
        </div>
      </div>
      <br />
      <div className="footer-message-block">
        <h2 className="short-msg-heading">Short message</h2>
        <br />
        <br />
        <p className="short-msg-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc,
          tincidunt sed posuere rhoncus, quis quam, condimentum <br /> sed diam
          sem. Maecenas fermentum ac aliquet felis.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
