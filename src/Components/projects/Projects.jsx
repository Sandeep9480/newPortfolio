import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./styles.css";
import { Rocket, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Proconnect",
      image:
        "https://blog.walls.io/wp-content/uploads/2021/08/Ingolstadt-Social-Media-Newsroom-embed.png",
      description:
        "Created a responsive social media platform with features like connection requests, profile updates, post sharing, notifications, and privacy controls. Built a dynamic frontend with Next.js, a Node.js backend with MongoDB, and used Redux for state management. Users can register, post, connect, and update profiles seamlessly.",
      techStack: "NextJS, Redux,  NodeJs, Express, MongoDB",
      live: "https://proconnect123.netlify.app/",
      github: "https://github.com/Sandeep9480/Pro-Connect",
    },
    {
      title: "Wounderlust",
      image: "/airbnb.jpg",
      description:
        "Developed a responsive platform connecting guests with homeowners for short-term rentals and experiences like kayaking, village walks, and food tours. Users can create accounts to add listings, leave reviews, and access features. Designed for seamless interactions and cultural immersion across all devices.",
      techStack: "EJS (Embedded JavaScript), NodeJS, ExpressJS, MongoDB",
      live: "https://list-4.onrender.com/listings",
      github: "https://github.com/Sandeep9480/LIST",
    },
    {
      title: "Zerodha Clone",
      image: "https://zerodha.tech/static/images/product-mashup-2020-04.png",
      description:
        "Developed a trading platform inspired by Zerodha with an intuitive UI for seamless user engagement. Enabled real-time stock trading and portfolio tracking on a personalized dashboard. Optimized for performance and responsiveness, ensuring an enhanced user experience and accessibility across devices.",
      techStack: "ReactJS, NodeJS, ExpressJS, MongoDB, Mongoose",
      live: "https://66e16a1b478f38d488c188b8--majestic-platypus-99248c.netlify.app/",
      github: "https://github.com/Sandeep9480/Zherodha",
    },
    {
      title: "Instagram Clone",
      image: "./Desktop-1.png",
      description:
        "Developed a front-end project inspired by Instagram with features like profile updates and an explore section. Users can browse content and seamlessly access the Threads website via the platform, ensuring smooth navigation and an engaging user experience.",
      techStack: "EJS (Embedded JavaScript), NodeJS, ExpressJS, MongoDB",
      live: "https://instagram-6asd.onrender.com",
      github: "https://github.com/Sandeep9480/INSTAGRAM",
    },
    {
      title: "Blog Web Page",
      image: "./blog.png",
      description:
        "Developed a blogging platform with features to add, view, edit, and delete blogs. Integrated MongoDB for data persistence and authentication, ensuring secure user-specific blog management. Designed a responsive UI using Bootstrap for seamless use across devices, with local storage fallback for offline access.",
      techStack: "ReactJs, MongoDB, NodeJS, ExpressJS",
      live: "https://assignment9480.netlify.app/",
      github: "https://github.com/Sandeep9480/blog",
    },
    {
      title: "Task Management App",
      image: "./task.webp",
      description:
        "Developed a robust task management system with features like priority-based (1-5) tasks, start/end times, and statuses (pending/finished). Added filtering by priority/status, sorting by time, and an insightful dashboard showing total tasks, completion rates, pending time by priority, and average task completion time in hours.",
      techStack: "ReactJs, MongoDB, NodeJS, ExpressJS",
      link: "https://vocal-bunny-76f655.netlify.app",
      github: "https://github.com/Sandeep9480/taskManagementFrontend",
    },
  ];

  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({
      // Animation duration
      once: false, // Trigger animation every time it's in view
    });

    // Refresh AOS to ensure animations work when component re-renders
    AOS.refresh();
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <section className="portfolioSection">
      <h1 className="portfolioTitle" data-aos="fade-up">
        My Creative <span className="highlight">Portfolio</span> Section
      </h1>
      <div className="projectsGrid">
        {projects.map((project, index) => (
          <div key={index} className="projectCard" data-aos="fade-up">
            <div className="projectImage">
              <img
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="image"
              />
            </div>
            <div className="projectContent">
              <h2 className="projectTitle">{project.title}</h2>
              <p className="projectDescription">{project.description}</p>
              <div className="techStack">
                <span className="techLabel">Tech Stack:</span>{" "}
                {project.techStack}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <a href={project.live}>
                <Rocket size={40} style={{ marginBottom: "1.2rem" }} />
              </a>

              <a href={project.github}>
                <Github size={40} style={{ marginBottom: "1.2rem" }} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
