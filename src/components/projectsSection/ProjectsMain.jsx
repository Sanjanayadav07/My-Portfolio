import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Food Delivery",
    year: "April2025",
    align: "right",
    image: "../../public/images/web3.png",
    link: "#",
  },
  {
    name: "iCoder",
    year: "Sept2024",
    align: "left",
    image: "../../public/images/web2.png",
    link: "https://sanjanayadav07.github.io/iCoderBootstrap/",
  },
  {
    name: "Ai Assistent",
    year: "Jan2024",
    align: "right",
    image: "../../public/images/web.png",
    link: "https://github.com/Sanjanayadav07/Web-Development/tree/main/Ai%20Assistance",
  },
  {
    name: "Netflix Clone",
    year: "Oct2024",
    align: "left",
    image: "../../public/images/web4.png",
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
