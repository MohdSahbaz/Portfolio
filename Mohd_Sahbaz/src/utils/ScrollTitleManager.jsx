// ScrollTitleManager.jsx
import { useEffect } from "react";

const sectionMeta = {
  home: {
    title: "Home | Mohd Sahbaz",
    description:
      "Welcome to the portfolio of Mohd Sahbaz, a passionate Fullstack MERN developer.",
  },
  about: {
    title: "About | Mohd Sahbaz",
    description:
      "Learn more about Mohd Sahbaz, a self-driven web developer skilled in the MERN stack.",
  },
  skills: {
    title: "Skills | Mohd Sahbaz",
    description:
      "Explore the technical skills of Mohd Sahbaz including React, Node.js, MongoDB and more.",
  },
  projects: {
    title: "Projects | Mohd Sahbaz",
    description:
      "Browse through fullstack development projects created by Mohd Sahbaz.",
  },
  "work-experience": {
    title: "Experience | Mohd Sahbaz",
    description:
      "Check out the professional work experience of Fullstack developer Mohd Sahbaz.",
  },
  contact: {
    title: "Contact | Mohd Sahbaz",
    description:
      "Get in touch with Mohd Sahbaz for freelance or full-time development opportunities.",
  },
};

const ScrollTitleManager = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const id = visible.target.id;
          const meta = sectionMeta[id];

          if (meta) {
            document.title = meta.title;

            // Update or create meta description
            let descTag = document.querySelector("meta[name='description']");
            if (!descTag) {
              descTag = document.createElement("meta");
              descTag.setAttribute("name", "description");
              document.head.appendChild(descTag);
            }
            descTag.setAttribute("content", meta.description);
          }
        }
      },
      { threshold: 0.5 }
    );

    Object.keys(sectionMeta).forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollTitleManager;
