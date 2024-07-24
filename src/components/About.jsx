import React from "react";
import "../css/About.css";

function About() {
  return (
    <section id="about" className="about-container">
      <div className="About-box">
        <h1>About me</h1>
        <p>
          Hello! I'm Ramiel Anthony G. Rasonado, a passionate and creative
          frontend developer with over 2 years of experience in crafting
          beautiful and functional web interfaces. I am a fast learner,
          adaptive, and constantly exploring new technologies to enhance my
          skills.
        </p>
        <p>
          I hold certifications in HTML, CSS, and database management from
          Certiport, and I am currently expanding my knowledge by diving into
          the MERN stack.
        </p>
        <p>
          My journey in web development started with a strong foundation in HTML
          and CSS, which allowed me to build aesthetically pleasing and
          user-friendly websites. Over time, I have honed my skills in
          JavaScript and other frontend technologies to create dynamic and
          interactive user experiences.
        </p>
        <p>
          One of my notable projects is 'La Granja', a platform designed to
          support local farmers in the Philippines. This project aims to empower
          farmers by providing them with a global reach, enabling them to upload
          and price their products accurately, and counteracting local buyers
          who exploit them by buying low and selling high.
        </p>
        <p>
          I am committed to continuous learning and growth in the field of web
          development, and I am excited about the opportunities to create
          innovative solutions that make a difference.
        </p>
        <p>
          Feel free to explore my portfolio to see some of my work. If you'd
          like to collaborate or have any questions, don't hesitate to get in
          touch!
        </p>
      </div>
      <div className="Skills-box">
        <h1>Skills</h1>
        <ul>
          <li>HTML</li>
          <li> CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Teamwork</li>
          <li>Attention to Details</li>
          <li>Communication</li>
          <li>Adaptability</li>
          <li>Creativity</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
