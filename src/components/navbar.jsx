import React from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import "./navbar.css";

function Navbar() {
    const { scrollY } = useScroll();

    // Shrink factor from 1 → 0.75
    const scale = useTransform(scrollY, [0, 100], [1, 0.75]);

    // Shadow
    const shadow = useTransform(
        scrollY,
        [0, 80],
        ["0 0 0 rgba(0,0,0,0)", "0 2px 8px rgba(0,0,0,0.08)"]
    );

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.6,
                ease: "easeOut"
            }}
            style={{
                boxShadow: shadow,
            }}
        >
            <motion.div className="navbar-content">
                <div className="logo">
                    <motion.img
                        src="/img/logo.png"
                        alt="logo"
                        style={{ scale: scale }}
                    />
                </div>

                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li className="li__resume">
                        <a href="https://drive.google.com/file/d/1WBl0nNNjdiRYwvfkLg6OgIDWiBN953gr/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Resume
                        </a>
                    </li>
                </ul>
            </motion.div>
        </motion.nav>
    );
}

export default Navbar;
