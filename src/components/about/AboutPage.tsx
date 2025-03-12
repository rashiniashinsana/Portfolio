import React from "react";
import "./about.css";

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">Who I Am</span>

            <div className="about__container container">
                <div className="about__image-section">
                    <div className="about__image">
                        <img src="/src/assets/MyAboutImage.jpg" alt="My Image" />
                    </div>
                </div>

                <div className="about__content-section">
                    <div className="about__content">
                        <p>
                            Hi! I'm a passionate and motivated web developer eager to dive into the tech world and explore new technologies.
                            While my interest started with full-stack development, my true passion lies in UI/UX design,
                            where I can create intuitive and visually appealing user experiences.
                            I'm excited to start my career, gain hands-on experience, and contribute to projects that push the boundaries of design and functionality.
                            I'm driven by the opportunity to learn, adapt, and grow within a dynamic team environment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
