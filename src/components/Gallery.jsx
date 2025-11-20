import React from "react";
import g1 from "../assets/Rectangle 34624582.png";
import g2 from "../assets/Rectangle 34624583.png";
import g3 from "../assets/Rectangle 34624584.png";
import g4 from "../assets/Rectangle 34624585.png";

function Gallery() {
  return (
    <section className="gallery-section">
      <h2 className="section-heading">-----------My Gallery</h2>

      <div className="gallery-row">
        <img src={g1} alt="gallery 1" />
        <img src={g2} alt="gallery 2" />
        <img src={g3} alt="gallery 3" />
        <img src={g4} alt="gallery 4" />
      </div>

      <p className="gallery-caption">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, tincidunt
        sed purus phasellus condimentum
        <br />
        sed diam sem. Maecenas fermentum ac aliquet felis.
      </p>
    </section>
  );
}

export default Gallery;
