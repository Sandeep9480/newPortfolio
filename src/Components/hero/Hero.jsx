import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import emailjs from "emailjs-com";
import Aos from "aos";
import "./styles.css";

export function Hero() {
  const typedRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  // Typing animation
  useEffect(() => {
    const options = {
      strings: ["I'm a Full Stack Developer."],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "sandeepmd2003@gmail.com",
    };

    emailjs
      .send(
        "service_123456",
        "template_abcdef",
        templateParams,
        "user_123abc456def"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setIsModalOpen(false);
        },
        (err) => {
          alert("Error sending message. Please try again.");
          console.error(err);
        }
      );
  };

  return (
    <section id="home" className="hero">
      {/* Social Media Links - Fixed */}
      <div className="socialLinks">
        <a
          href="https://github.com/Sandeep9480"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/sandeep-devadiga-41b757295/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="icon" />
        </a>
        <a
          href="https://leetcode.com/u/Sandeep9480/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className="icon" />
        </a>
      </div>

      {/* Main Content */}
      <div className="content">
        <div
          className="textContent"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h1 className="title">
            Hello, My name is <span className="name">Sandeep Devadiga</span>
          </h1>
          <div className="typedWrapper">
            <span ref={typedRef}></span>
          </div>
          <p className="freelance">
            Open for Freelancing Projects!{" "}
            <a href="/contact" className="contactLink">
              Contact Now..
            </a>
          </p>
          <a href="https://drive.google.com/file/d/180vjqIbsDx7ybZB6169wX0SdYRSS7OPg/view?usp=drive_link">
            <button className="resumeButton">Resume</button>
          </a>
        </div>

        {/* Profile Image */}
        <div
          className="imageContainer"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="imageWrapper">
            <img src="/hero.png" alt="Profile" className="profileImage" />
          </div>
        </div>
      </div>

      {/* Send Mail Button - Fixed */}
      <button className="sendMailButton" onClick={() => setIsModalOpen(true)}>
        <Mail /> Send Mail
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="contact-section__modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="contact-section__modal"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>Send Message</h2>
            <form className="contact-section__form" onSubmit={sendEmail}>
              <div className="contact-section__form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="contact-section__form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="contact-section__form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div className="contact-section__form-buttons">
                <button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
