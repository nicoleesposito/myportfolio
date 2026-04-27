import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import "./navbar.css";

function Navbar() {
    const { scrollY } = useScroll();
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const scale = useTransform(scrollY, [0, 100], [1, 0.75]);
    const shadow = useTransform(
        scrollY,
        [0, 80],
        ["0 0 0 rgba(0,0,0,0)", "0 2px 8px rgba(0,0,0,0.08)"]
    );

    const scrollToSection = (e, id) => {
        e.preventDefault();
        setMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
            return;
        }
        if (id === 'works') {
            window.scrollTo({ top: window.innerHeight * 0.3, behavior: 'smooth' });
            return;
        }
        if (id === 'about') {
            const el = document.getElementById('about');
            if (el) {
                const top = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.13;
                window.scrollTo({ top, behavior: 'smooth' });
                return;
            }
        }
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.13;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ boxShadow: shadow }}
        >
            <motion.div className="navbar-content">
                <div className="logo">
                    <motion.img
                        src="/img/logo.png"
                        alt="logo"
                        style={{ scale: scale }}
                    />
                </div>

                {/* Hamburger button — mobile only */}
                <button
                    className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
                    onClick={() => setMenuOpen(v => !v)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
                    <li>
                        <a href="/" onClick={(e) => {
                            if (location.pathname === '/') {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                            setMenuOpen(false);
                        }}>Home</a>
                    </li>
                    <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                    <li><a href="/#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                    <li><a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
                    <li className="li__resume">
                        <a href="https://drive.google.com/file/d/1WBl0nNNjdiRYwvfkLg6OgIDWiBN953gr/view?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                            Resume
                        </a>
                    </li>
                </ul>
            </motion.div>

            {/* Mobile dropdown overlay */}
            {menuOpen && (
                <div className="nav-mobile-menu">
                    <ul>
                        <li>
                            <a href="/" onClick={(e) => {
                                if (location.pathname === '/') {
                                    e.preventDefault();
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }
                                setMenuOpen(false);
                            }}>Home</a>
                        </li>
                        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
                        <li><a href="/#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
                        <li><a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
                        <li>
                            <a href="https://drive.google.com/file/d/1WBl0nNNjdiRYwvfkLg6OgIDWiBN953gr/view?usp=sharing" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="nav-mobile-resume">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </motion.nav>
    );
}

export default Navbar;
