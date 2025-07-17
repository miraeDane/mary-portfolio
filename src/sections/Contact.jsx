import contact from "../assets/contact.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="grandparent-container">
        <div className="parent-container">
          <div className="entry-details">
            <h2>Would like to hear from you</h2>
            <input
              type="text"
              placeholder="Full Name"
              class="floating-input"
              required
            />
            <input
              type="text"
              placeholder="Email Address"
              class="floating-input"
              required
            />
            <input
              type="text"
              placeholder="Contact"
              class="floating-input"
              required
            />
            <input
              type="text"
              placeholder="Message"
              class="floating-message"
              required
            />

            <div className="submit-container">
              <button className="submit-btn" type="submit">
                Submit
              </button>
            </div>

            <div className="socials-container">
              <div className="socials-text">
                <h3>Connect with me</h3>
                <p>
                  I am always open to discussing new projects, creative ideas,
                  or opportunities to be part of your vision.
                </p>
              </div>

              <div className="socials">
                <a
                  href="https://www.facebook.com/marymae.rizaldo.1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={fb} alt="Facebook" />
                </a>
                <a
                  href="https://www.instagram.com/mimi_rizz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ig} alt="Instagram" />
                </a>
                <a href="mailto:rizaldomarymae8@gmail.com">
                  <img src={gmail} alt="Gmail" />
                </a>
                <a
                  href="https://www.linkedin.com/in/marymae-rizaldo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-pic">
            <img src={contact} alt="Contact" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
