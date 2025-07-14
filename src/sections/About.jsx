import girlalu from "../assets/girlalu.png";
import "./About.css";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="girl-working">
          <img src={girlalu} alt="Girl Working" className="girlalu"></img>
        </div>
        <div className="about-me">
          <div className="about">
            <h1>About me</h1>
          </div>
          <div className="greeting"></div>
          <span className="greeting-text    ">
            Hi there! I'm Mary -{" "}
            <b> Your Creative & Code-Driven Frontend Developer</b>
          </span>
          <div className="cta">
            <span className="cta-text">
              Are you looking for a frontend developer who blends creativity
              with clean, functional code? That’s where I come in! I specialize
              in crafting responsive, user-focused web interfaces that not only
              look great but also perform seamlessly. With a strong eye for
              design and a passion for turning concepts into interactive digital
              experiences
            </span>
          </div>

          <div className="why-me">
            <span>
                Why Mary?
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
