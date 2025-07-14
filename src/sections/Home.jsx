import picc from "../assets/pacck.png";
import "./Home.css"; 


function Home() {
  return (
    <>
      <div className="profile">
        <div className="intro-name">
          <div className="line-left"></div>
          <h1>
            Hi, I am Mary Mae Diane <span className="typewriter"> Rizaldo</span>
          </h1>
        </div>
        <div className="pic">
          <img src={picc} alt="Profile Picture" className="picc" />
        </div>
      </div>
      <div className="role">
        <div className="position">
          <p>
            I am a <b>Frontend Developer</b>
          </p>
        </div>
        <div className="description">
          <p>
            I enjoy turning ideas into interactive interfaces that not only look
            good but also perform well across devices.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
