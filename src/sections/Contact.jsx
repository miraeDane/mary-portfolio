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

           <div className="socials-container">
        <div className="socials-text">
          <h3>Connect with me</h3>
          <p>
            I am always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="socials"> 
          <img src={fb} alt="" />
          <img src={ig} alt="" />
          <img src={gmail} alt="" />
          <img src={linkedin} alt="" />
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
