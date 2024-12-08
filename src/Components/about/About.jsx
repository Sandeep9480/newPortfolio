import { useEffect } from "react";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

export function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global duration for animations
      once: true, // Animation triggers only once
    });
  }, []);

  return (
    <section id="about" className="aboutSection">
      <div className="aboutContainer">
        {/* Title with fade-up animation */}
        <h2 className="aboutTitle" data-aos="fade-up" data-aos-duration="1000">
          All <span>About</span> Me
        </h2>

        <div className="aboutContent">
          {/* Image Section with fade-up animation */}
          <div
            className="aboutImageWrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200" // Added delay for image animation
          >
            <img
              src="https://img.freepik.com/premium-photo/cartoon-3d-character-developer-designer-working-laptop-web-app-development-deploy-frontend-backend-project-team-engineers-website_1029476-383487.jpg?ga=GA1.1.563122061.1731042928&semt=ais_hybrid"
              alt="Developer Illustration"
              className="aboutImage"
            />
          </div>

          {/* Information Section with fade-up animation */}
          <div
            className="aboutInfo"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400" // Added delay for info section animation
          >
            <ul>
              <li>
                Hello! My name is Sandeep Devadiga, and I’m an innovative
                Software Engineer with a passion for creating impactful
                solutions in the world of technology. I specialize in Full Stack
                Development, particularly in the financial technology domain.
                With strong communication skills, a keen eye for detail, and the
                ability to write clean, efficient code, I thrive in
                collaborative environments and love solving complex problems.
              </li>
              <li>
                As a Full Stack Web Developer, I excel at translating complex
                project requirements into scalable, user-friendly web
                applications. I have hands-on experience with JavaScript, Java,
                Python, and modern web technologies such as React, Node.js, and
                MongoDB, making me versatile in handling both frontend and
                backend tasks.
              </li>
              <li>
                Skilled in both frontend and backend technologies, specializing
                in the MERN stack (MongoDB, Express.js, React.js, Node.js), with
                experience in Next.js, Redux, RESTful APIs, Bootstrap, and
                Material UI. Passionate about building robust web applications
                using my technical expertise and problem-solving skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
