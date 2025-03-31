import { useState, useEffect } from "react";

const sections = ["hero", "about", "projects", "certifications", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const height = element.offsetHeight;

          if (scrollY >= top && scrollY < top + height) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70 backdrop-blur-md text-white shadow-md">
      <ul className="flex justify-center gap-6 py-4">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={`transition font-medium ${
                active === section ? "text-blue-400 underline" : "hover:text-blue-300"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
