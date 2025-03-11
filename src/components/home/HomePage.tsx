import { useState, useEffect } from "react";
import "./home.css";
import { motion } from "framer-motion";
import SocialBar from "./SocialBar";
import HomeData from "./HomeData";

const HomePage = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const opacity = scrollY < 300 ? 1 - scrollY / 300 : 0;
    const scale = scrollY < 100 ? 1 - scrollY / 1000 : 0.7;

    const [isAnimating, setIsAnimating] = useState(false);

    const toggleAnimation = () => {
        setIsAnimating((prev) => !prev);
    };

    return (
        <section className="home section" id="home">
            <div className="home__container container">
                <SocialBar />

                <motion.div
                    className="home__content"
                    initial={{ opacity: 0.8, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeOut", duration: 0.8 }}
                    style={{ transformOrigin: "center top" }}
                    whileHover={{ scale: 1.05 }}
                >
                    {/* Ensure an image or content is inside home__img */}
                    <motion.div
                        className={`home__img ${isAnimating ? "motion" : ""}`}
                        onClick={toggleAnimation}
                        animate={{ scale: isAnimating ? 1.2 : 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src="/src/assets/HomePageImage.png" alt="HomePage" />
                    </motion.div>

                    <HomeData />
                </motion.div>
            </div>
        </section>
    );
};

export default HomePage;
