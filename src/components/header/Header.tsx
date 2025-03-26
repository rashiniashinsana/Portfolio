import React, { useState, useEffect } from 'react';
import "./header.css";

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [activeSection, setActiveSection] = useState('#');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY;

            sections.forEach(section => {
                if (scrollPos >= section.offsetTop - 50 && scrollPos < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.getAttribute('id'));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">Rashini</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list">
                        {[ 'about' ,'education', 'technologies', 'projects' ,'contact'].map((section) => (
                            <li className="nav__item" key={section}>
                                <a
                                    href={`#${section}`}
                                    className={`nav__link ${activeSection === section ? 'active' : ''}`}
                                >
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
                </div>

                <div className="nav__right">
                    <a href="#cv" className="btn-primary">Download CV</a>
                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>

            </nav>
        </header>
    );
};

export default Header;