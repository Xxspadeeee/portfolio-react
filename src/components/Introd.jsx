import React from "react";
import "../css/Introd.css";
function Introd() {
  return (
    <section className="introd-container">
      <div className="MyName">
        <h3>Hello!</h3>
        <h1>I'm Ramiel Rasonado a</h1>
        <h1>
          <span>Web Developer</span>
        </h1>
        <p>
          Welcome to my first project website and portfolio! Hi, I'm Ramiel
          Anthony G. Rasonado, a skilled and creative web developer with a
          passion for coding. Despite having just two years of experience, I am
          a fast learner and highly adaptive. I hold certifications in HTML and
          CSS, as well as database management, issued by Certiport.
        </p>
      </div>
      <div className="MyPic">
        <img src="akongface.png" />
      </div>
    </section>
  );
}

export default Introd;
