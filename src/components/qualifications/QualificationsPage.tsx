import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index:number) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="education">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My academic journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={
                            toggleState === 1
                                ? "qualification__button qualification__active button--flex active-tab"
                                : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                </div>
            </div>

            <div className="qualification__sections">
                <AnimatePresence mode="wait">
                    {toggleState === 1 && (
                        <motion.div
                            key="education"
                            className="qualification__content qualification__content-active"
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">BSc (Hons) Computer Science</h3>
                                    <span className="qualification__subtitle">University of Bedforshire</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2025 - Present
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">Higher Diploma</h3>
                                    <span className="qualification__subtitle">Institute of Software Engineering</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2023 - 2025
                                    </div>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Web Designing Certificate</h3>
                                    <span className="qualification__subtitle">University of Kelaniya</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> Present
                                    </div>
                                </div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>
                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                                <div>
                                    <h3 className="qualification__title">High School</h3>
                                    <span className="qualification__subtitle">Southlands College, Galle</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2008 - 2021
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Qualification;
