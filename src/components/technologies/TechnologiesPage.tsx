import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaFigma, FaNodeJs, FaJava, FaPython } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiJquery, SiSpringboot,  SiMongodb, SiMysql, SiHibernate, SiExpress } from "react-icons/si";
import "./technologies.css";

const technologies = {
    backend: [
        { name: "Java", icon: <FaJava size={32} style={{ color: "#f89820" }} /> },
        { name: "Python", icon: <FaPython size={32} style={{ color: "#3776AB" }} /> },
        { name: "Express.js", icon: <SiExpress size={32} style={{ color: "#000" }} /> },
        { name: "SpringBoot", icon: <SiSpringboot size={32} style={{ color: "#6DB33F" }} /> },
        { name: "Node.js", icon: <FaNodeJs size={32} style={{ color: "#68A063" }} /> },
        { name: "MySQL", icon: <SiMysql size={32} style={{ color: "#00758F" }} /> },
        { name: "Hibernate", icon: <SiHibernate size={32} style={{ color: "#59666C" }} /> },
        // { name: "Firebase", icon: <SiFirebase size={32} style={{ color: "#FFCA28" }} /> },
        { name: "MongoDB", icon: <SiMongodb size={32} style={{ color: "#47A248" }} /> }
    ],
    frontend: [
        { name: "JavaScript", icon: <FaJs size={32} style={{ color: "#F7DF1E" }} /> },
        { name: "React", icon: <FaReact size={32} style={{ color: "#61DAFB" }} /> },
        { name: "HTML5", icon: <FaHtml5 size={32} style={{ color: "#E34F26" }} /> },
        { name: "TypeScript", icon: <SiTypescript size={32} style={{ color: "#3178C6" }} /> },
        { name: "Bootstrap", icon: <FaBootstrap size={32} style={{ color: "#7952B3" }} /> },
        { name: "TailwindCSS", icon: <SiTailwindcss size={32} style={{ color: "#38B2AC" }} /> },
        { name: "CSS3", icon: <FaCss3Alt size={32} style={{ color: "#1572B6" }} /> },
        // { name: "Git", icon: <FaGitAlt size={32} style={{ color: "#F05032" }} /> },
        { name: "Figma", icon: <FaFigma size={32} style={{ color: "#F24E1E" }} /> },
        { name: "jQuery", icon: <SiJquery size={32} style={{ color: "#0769AD" }} /> }
    ]
};

const TechnologyCard = ({ title, technologies }) => {
    return (
        <div className="technologies__content">
            <h3 className="technologies__title">{title} Technologies</h3>
            <div className="technologies__box">
                {technologies.map((tech, index) => (
                    <motion.div key={index} className="technologies__data" whileHover={{ scale: 1.1 }}>
                        {tech.icon}
                        <h3 className="technologies__name">{tech.name}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const TechnologiesPage = () => {
    return (
        <motion.section className="tech section" id="technologies" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <motion.h2 className="section__title" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                Technologies
            </motion.h2>
            <motion.span className="section__subtitle" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                My technical level
            </motion.span>
            <div className="technologies__container container grid">
                <TechnologyCard title="Backend" technologies={technologies.backend} />
                <TechnologyCard title="Frontend" technologies={technologies.frontend} />
            </div>
        </motion.section>
    );
};

export default TechnologiesPage;
