import  { useEffect, useState } from 'react';
import { projectsData } from './ProjectData.tsx';
import { projectsNav } from './ProjectData.tsx';
import WorkItems from './ProjectItems.tsx';

function ProjectsPage() {
    const [item, setItem] = useState({ name: 'web app' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) =>
                project.category.toLowerCase() === item.name
            );
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    return (
        <div id="projects">
            <div className="work__filters">
                {projectsNav.map((navItem, index) => (
                    <span
                        onClick={(e) => handleClick(e, index)}
                        className={`${active === index ? 'active-work' : ''} work__item`}
                        key={index}
                    >
                        {navItem.name}
                    </span>
                ))}
            </div>

            <div className="work__container container grid">
                {projects.map((project) => (
                    <WorkItems item={project} key={project.id} />
                ))}
            </div>
        </div>
    );
}

export default ProjectsPage;
