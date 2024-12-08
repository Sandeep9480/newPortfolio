import { useEffect, useState } from "react";
import {
  Copy,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageSquare,
  Twitter,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

export default function ContactSection() {
  const [copied, setCopied] = useState({ email: false, phone: false });

  const copyToClipboard = async (text, type) => {
    await navigator.clipboard.writeText(text);
    setCopied({ ...copied, [type]: true });
    setTimeout(() => setCopied({ ...copied, [type]: false }), 2000);
  };

  useEffect(() => {
    AOS.init({
      // Global animation duration
      once: false, // Trigger animation only once
    });
    AOS.refresh();
  }, []);

  return (
    <section className="contact-section">
      <h1
        className="contact-section__title"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Contact Details
      </h1>

      <div className="contact-section__content">
        {/* Image Section with fade-up */}
        <div
          className="contact-section__image-container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="./contact.jpg"
            alt="Profile"
            width={400}
            height={600}
            className="contact-section__profile-image"
          />
        </div>

        {/* Info Section with fade-up */}
        <div className="contact-section__info" data-aos="fade-up">
          {/* Social Buttons with fade-up */}
          <div className="contact-section__social-buttons">
            <a
              href="https://www.linkedin.com/in/sandeep-devadiga-41b757295/"
              className="contact-section__social-button linkedin"
              data-aos="fade-up"
            >
              <Linkedin /> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/sandeep_devadiga_1/"
              className="contact-section__social-button instagram"
              data-aos="fade-up"
            >
              <Instagram /> Instagram
            </a>
            <a
              href="https://github.com/Sandeep9480"
              className="contact-section__social-button github"
              data-aos="fade-up"
            >
              <Github /> Github
            </a>
            <a
              href="#"
              className="contact-section__social-button twitter"
              data-aos="fade-up"
            >
              <Twitter /> Twitter
            </a>
            <a
              href="mailto:sandeepmd2003@gmail.com"
              className="contact-section__social-button mail"
              data-aos="fade-up"
            >
              <Mail /> Mail
            </a>
            <a
              href="https://wa.me/+919480748702"
              className="contact-section__social-button whatsapp"
              data-aos="fade-up"
            >
              <MessageSquare /> WA
            </a>
          </div>

          {/* Contact Details with fade-up */}
          <div className="contact-section__details">
            <div className="contact-section__item" data-aos="fade-up">
              <Mail className="contact-section__icon" />
              <span>sandeepmd2003@gmail.com</span>
              <button
                className="contact-section__copy-button"
                onClick={() =>
                  copyToClipboard("sandeepmd2003@gmail.com", "email")
                }
              >
                <Copy />
                {copied.email && (
                  <span className="contact-section__copied-tooltip">
                    Copied!
                  </span>
                )}
              </button>
            </div>

            <div className="contact-section__item" data-aos="fade-up">
              <MessageSquare className="contact-section__icon" />
              <span>+91 9480748702</span>
              <button
                className="contact-section__copy-button"
                onClick={() => copyToClipboard("+919480748702", "phone")}
              >
                <Copy />
                {copied.phone && (
                  <span className="contact-section__copied-tooltip">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
