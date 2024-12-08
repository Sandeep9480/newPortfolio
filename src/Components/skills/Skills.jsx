import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./styles.css";

export function Skills() {
  const skills = [
    { name: "Java", icon: "/java.svg" },
    { name: "JavaScript", icon: "/java-script.png" },
    { name: "React", icon: "/atom.png" },
    { name: "Node Js", icon: "/NodeJS.svg" },
    { name: "Next JS", icon: "/NextJS.png" },
    { name: "Express JS", icon: "/express.svg" },
    { name: "MongoDB", icon: "/mongodb.svg" },
    { name: "MySql", icon: "/mysql.png" },
    { name: "Mongoose", icon: "/mongoose.png" },
    { name: "Redux", icon: "/Redux.svg" },
    { name: "Html", icon: "/html.png" },
    { name: "CSS", icon: "/css-3.png" },
    { name: "BootStrap", icon: "/BOOTSTRAPT-icon.svg" },
    { name: "Tailwind CSS", icon: "/TAILWIND_CSS-icon.svg" },
    { name: "Git", icon: "/git.svg" },
    { name: "Postman", icon: "/css-3.png" },
    { name: "Docker", icon: "/social.png" },
  ];

  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({
      once: false, // Trigger animation every time it's in view
    });

    // Refresh AOS to ensure animations work when component re-renders
    AOS.refresh();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <section className="skillsSection">
      <div className="container">
        <h2
          className="text-3xl font-bold text-center mb-12"
          style={{ fontSize: "2rem", marginBottom: "2rem" }}
          data-aos="fade-up" // AOS animation for title
        >
          My <span className="text-red-600">Technical</span> Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-7 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="grids flex flex-col items-center"
              data-aos="fade-up" // AOS animation for each skill icon
              data-aos-delay={`${index * 30}`} // Delay each skill's animation
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <p className="text-xl">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
