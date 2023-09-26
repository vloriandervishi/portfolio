import React from "react";
import picture from "../../assets/images/Self-pic.png";
function About() {
  return (
    <main>
      <h2 className="page-section" id="about"></h2>
      <div align="middle">
        {" "}
        <div>
          <img class="dbt" src={picture}></img>
        </div>
        <h1 id="name">Software Developer</h1>
        <p id="abtmep">
          {" "}
          I have always had a passion for software engineering and the
          innovative solutions it can bring to people's lives. This passion led
          me to develop a diverse skill set that I can easily apply to software
          engineering. During my tenure as a maintenance engineer, I gained
          valuable experience that I can transfer to software engineering. I
          developed the ability to troubleshoot complex systems, collaborate
          effectively in a team, and pay close attention to detail. These
          capabilities are equally important in software engineering, where
          identifying and resolving software issues, working in a team, and
          ensuring precision in every aspect of a program are essential for
          achieving success. Furthermore, I have gained experience in using
          cutting-edge technologies such as Javascript, Node.js, and Express.js
          to solve complex problems and create innovative solutions. I am also
          proficient in HTML and CSS, which enables me to create visually
          appealing and user-friendly interfaces. Additionally, I have
          experience in using Python, a versatile programming language that can
          be used for various purposes, such as data analysis and machine
          learning. Overall, my love for software engineering and my diverse
          skill set enable me to approach problems from various angles and
          develop creative solutions that meet the needs of users.
        </p>
      </div>
    </main>
  );
}

export default About;
