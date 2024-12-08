import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import "./styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Experience() {
  useEffect(() => {
    AOS.init({
      // Global animation duration
      once: false, // Trigger animation only once
    });
    AOS.refresh();
  }, []);
  return (
    <section className="experienceSection">
      <div className="experienceContainer">
        <h2
          className="experienceTitle"
          style={{ fontSize: "2rem", marginBottom: "2rem", fontWeight: "700" }}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          My Technical <span className="experienceHighlight">Experience</span>
        </h2>

        <div className="experienceContent">
          <div data-aos="fade-up" data-aos-duration="1000">
            <span className="experienceBadge">Internship</span>

            <div
              style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}
            >
              <h3 className="experienceCompany">
                Full Stack Intern at{" "}
                <a
                  href="#"
                  className="experienceCompanyLink"
                  style={{ textDecoration: "none" }}
                >
                  Unified Mentor
                </a>
              </h3>
              <img
                src="data:image/png;base64,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"
                alt=""
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                  background: "none",
                }}
              />
            </div>

            <p className="experienceDuration">Oct 2024 - Nov 2024 ( 2 mons )</p>

            <ul className="experienceDescription">
              <li>
                Specialized in Full Stack Development, focusing on React.js,
                Node.js, and Vue.js, by applying best practices to build
                responsive and efficient web applications.
              </li>
              <li>
                Implemented advanced features to enhance user experience and
                functionality, including dynamic interfaces, real-time updates,
                and intuitive navigation, while optimizing performance for fast
                load times and seamless interactions across various devices and
                platforms.
              </li>
              <li>
                Developed a responsive front-end with HTML, CSS, JavaScript, and
                React.js, and implemented the backend with Node.js, Express, and
                MongoDB.
              </li>
            </ul>
          </div>
          <hr />
          <div data-aos="fade-up" data-aos-duration="1000">
            <div
              style={{ display: "flex", gap: "1.2rem", alignItems: "center" }}
            >
              <h3 className="experienceCompany">
                Software Developer Intern at{" "}
                <a
                  href="#"
                  className="experienceCompanyLink"
                  style={{ textDecoration: "none" }}
                >
                  Chipsy IT Services Pvt Ltd
                </a>
              </h3>
              <img
                style={{
                  height: "50px",
                  width: "50px",
                  borderRadius: "50%",
                }}
                src="data:image/png;base64,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"
                alt=""
              />
            </div>

            <p className="experienceDuration">
              July 2024 - Aug 2024 ( 2 mons )
            </p>

            <ul className="experienceDescription">
              <li>
                Developed advanced JavaScript-based web applications, utilizing
                React.js and implementing best practices for creating responsive
                and efficient solutions.
              </li>
              <li>
                Designed a user-friendly platform with essential features,
                focusing on enhancing user experience and ensuring intuitive
                navigation.
              </li>
              <li>
                Built a responsive front-end using HTML, CSS, JavaScript, and
                React.js, ensuring seamless and visually appealing user
                experiences across various devices.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
