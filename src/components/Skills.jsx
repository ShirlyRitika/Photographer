import React from "react";
import profile from "../assets/hugeicons_face-id.png";
import gallery from "../assets/Vector.png";
import wedding from "../assets/hugeicons_wedding.png";
import tv from "../assets/game-icons_tv.png";
function Skills() {
  return (
    <section className="skills-section">
      <div className="line-heading">
        <span className="line"></span>
        <span className="line-text">My Skills</span>
      </div>

      <div className="skills-row">
        <div className="skill-item">
          <div className="skill-icon">
            <img src={profile} alt="" />
          </div>
          <h3 className="skill-title">Lorem ipsum</h3>
          <p className="skill-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>

        <div className="skill-item">
          <div className="skill-icon">
            <img src={gallery} alt="" />
          </div>
          <h3 className="skill-title">Lorem ipsum</h3>
          <p className="skill-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>

        <div className="skill-item">
          <div className="skill-icon">
            <img src={wedding} alt="" />
          </div>
          <h3 className="skill-title">Lorem ipsum</h3>
          <p className="skill-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>

        <div className="skill-item">
          <div className="skill-icon">
            <img src={tv} alt="" />
          </div>
          <h3 className="skill-title">Lorem ipsum</h3>
          <p className="skill-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
