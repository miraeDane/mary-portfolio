import why from "../assets/why.png";
import "./Why.css";

function Why() {
  return (
    <>
      <div className="why-container">
        <div className="why-mary">
          <h1>Why Mary?</h1>
          <ul>
            <li>
              <span>Creative + Technical Balance</span> - I combine design
              sensitivity with solid frontend coding skills to deliver
              interfaces that are both visually appealing and functionally
              sound.
            </li>

            <li>
              <span>User-Centered Approach</span> - I focus on creating smooth,
              intuitive user experiences—whether it's a landing page, dashboard,
              or web app, usability always comes first.
            </li>
            <li>
              <span>Responsive & Cross-Browser Expertise</span> - I build
              responsive layouts that work flawlessly on all screen sizes and
              ensure consistent performance across major browsers.
            </li>
            <li>
              <span>Reliable Communication & Collaboration</span> - I'm
              proactive, and easy to work with—whether in solo projects or
              cross-functional teams, I keep things moving smoothly.
            </li>
            <li>
              <span>Growth-Minded & Continuously Learning</span> - I stay
              updated with the latest trends, tools, and best practices so I can
              bring fresh, modern solutions to every project.
            </li>
          </ul>
        </div>
        <div className="why-pic">
            <img src={why} alt="Why Mary" className="why-image" />
        </div>
      </div>
    </>
  );
}

export default Why;
