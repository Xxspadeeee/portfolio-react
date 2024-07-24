import React from "react";
import "../css/Service.css";

function Service() {
  return (
    <section id="service" className="service">
      <div className="service-container">
        <h1>Service</h1>
        <ul>
          <li>Frontend Design</li>
          <li>Web Development</li>
          <li>Project Management</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
      <div className="cert-container">
        <ul>
          <li>
            <img src="cert1.png" alt="" />
          </li>
          <li>
            <img src="cert2.png" alt="" />
          </li>
          <li>
            <img src="cert3.png" alt="" />
          </li>
          <li>
            <img src="cert4.png" alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Service;
