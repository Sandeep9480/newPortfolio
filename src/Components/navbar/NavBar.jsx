import { Settings } from "lucide-react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
import Aos from "aos";

export function NavBar() {
  const [isModal, setIsModal] = useState(false); // For controlling modal visibility (for small screens)
  const [notModal, setNotModal] = useState(true); // For large screens (show the full nav)
  const [showNav, setShowNav] = useState(false); // For controlling the visibility of the mobile navigation menu
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 600) {
        setIsModal(true); // Show hamburger icon (modal) for small screens
        setNotModal(false); // Hide full nav for small screens
      } else {
        setIsModal(false); // Hide hamburger icon (modal) for larger screens
        setNotModal(true); // Show full nav for larger screens
      }
    };
    checkScreen(); // Initial check on mount
    window.addEventListener("resize", checkScreen); // Listen for screen resizing
    return () => {
      window.removeEventListener("resize", checkScreen); // Cleanup event listener
    };
  }, []); // Runs only once on mount

  const toggleNav = () => {
    setShowNav(!showNav); // Toggle the visibility of the mobile navigation menu
  };

  return (
    <header
      className="container m-1 ml-0.5 fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {notModal && (
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="text-4xl font-bold header">
                <span className="text-red-500">San</span>deep
              </span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-3 font-Arimo">
              <Link to="/" className="hover:text-foreground/80 p-2 rounded-lg">
                HOME
              </Link>
              <Link
                to="/about"
                className="hover:text-foreground/80 p-2 rounded-lg"
              >
                ABOUT
              </Link>
              <Link
                to="/skills"
                className="hover:text-foreground/80 p-2 rounded-lg"
              >
                SKILLS
              </Link>
              <Link
                to="/experience"
                className="hover:text-foreground/80 p-2 rounded-lg"
              >
                WORK
              </Link>
              <Link
                to="/projects"
                className="hover:text-foreground/80 p-2 rounded-lg"
              >
                PROJECTS
              </Link>
              <Link
                to="/contact"
                className="hover:text-foreground/80 p-2 rounded-lg"
              >
                CONTACT
              </Link>
              <a
                href="https://drive.google.com/file/d/180vjqIbsDx7ybZB6169wX0SdYRSS7OPg/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground/80 p-2 rounded-lg"
              >
                RESUME
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Hamburger Icon (for small screens) */}
      {isModal && (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="mr-4 flex">
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="text-4xl font-bold header">
                <span className="text-red-500">San</span>deep
              </span>
            </Link>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
            onClick={toggleNav} // On click, toggle the nav menu
            style={{ height: "2.5rem", width: "2.5rem ", cursor: "pointer" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      )}

      {/* Mobile Navigation Menu (if showNav is true) */}
      {showNav && (
        <div className="absolute top-14 left-0 w-full ">
          <nav
            className="flex flex-col items-center space-y-4 font-Arimo mobileNav"
            style={{
              background: "rgba(26, 26, 26, 0.83)",
              gap: "0rem",
              paddingBlock: "7rem",
              height: "100vh",
            }}
            onClick={() => {
              setShowNav(false);
            }}
          >
            <Link to="/" className="hover:text-foreground/80 p-2 rounded-lg">
              HOME
            </Link>
            <Link
              to="/about"
              className="hover:text-foreground/80 p-2 rounded-lg"
            >
              ABOUT
            </Link>
            <Link
              to="/skills"
              className="hover:text-foreground/80 p-2 rounded-lg"
            >
              SKILLS
            </Link>
            <Link
              to="/experience"
              className="hover:text-foreground/80 p-2 rounded-lg"
            >
              WORK
            </Link>
            <Link
              to="/projects"
              className="hover:text-foreground/80 p-2 rounded-lg"
            >
              PROJECTS
            </Link>
            <Link
              to="/contact"
              className="hover:text-foreground/80 p-2 rounded-lg"
            >
              CONTACT
            </Link>
            <Link to="#" className="hover:text-foreground/80 p-2 rounded-lg">
              RESUME
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
