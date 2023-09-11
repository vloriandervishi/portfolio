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
        {/* <p id="abtmep">
          {" "}
          Cracking dad jokes by day, coding and crashing computers by night -
          welcome to the world of a proud dad and software maven! As a father to
          an amazing child, I've mastered the art of patience (every parent's
          secret weapon). Professionally, I'm a software engineer, though my
          roots in maintenance engineering keep me humble and handy around the
          house. An MTSU alum, I've woven a rich tapestry of binary codes,
          late-night debugging, and proudly holding the "Father of the Year"
          mug.#End.{" "}
        </p> */}
      </div>
    </main>
  );
}

export default About;
