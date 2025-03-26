import { useRef } from "react";
import hoverSoundFile from "../../assets/effects/multi-pop-.mp3";
import "./social.css";

const Social = () => {
    const hoverSound = useRef(new Audio(hoverSoundFile));

    const playSound = () => {
        if (hoverSound.current) {
            hoverSound.current.currentTime = 0;
            hoverSound.current.play().catch((error) => {
                console.error("Error playing sound:", error);
            });
        }
    };

    return (
        <div className="home__social">
            <div className="group relative">
                <a
                    href="https://github.com/rashiniashinsana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home_github-icon"
                    onMouseEnter={playSound}
                >
                    <i className="uil uil-github-alt"></i>
                </a>
                <span className="tooltip-content">GitHub</span>
            </div>

            <div className="group relative">
                <a
                    href="https://www.linkedin.com/in/rashini-vithanage-346b072a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home__likedin-icon"
                    onMouseEnter={playSound}
                >
                    <i className="uil uil-linkedin"></i>
                </a>
                <span className="tooltip-content">LinkedIn</span>
            </div>

            <div className="group relative">
                <a
                    href="https://discord.com/users/your-discord-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home__discord-icon"
                    onMouseEnter={playSound}
                >
                    <i className="uil uil-discord"></i>
                </a>
                <span className="tooltip-content">Discord</span>
            </div>
        </div>
    );
};

export default Social;
