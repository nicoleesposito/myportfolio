import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (e, id) => {
        e.preventDefault();
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
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__left">
                    <img src="/img/logo.png" alt="Nicole Esposito" className="footer__logo" />
                </div>

                <div className="footer__links">
                    <a href="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a>
                    <a href="/#about" onClick={(e) => scrollToSection(e, 'about')}>About</a>
                    <Link to="/projects">Projects</Link>
                    <a href="/#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a>
                </div>

                <div className="footer__social">
                    <a href="mailto:nicoleesposiito@gmail.com" aria-label="Email">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                            <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/nicolesposito" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8"/>
                            <path d="M7 10v7M7 7v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            <path d="M11 17v-4c0-1.5 1-2 2-2s2 .5 2 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            <path d="M11 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        </svg>
                    </a>
                    <a href="https://github.com/nicoleesposito" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <img src="/img/github.svg" alt="GitHub" width="26" height="26" />
                    </a>
                </div>
            </div>
            <p className="footer__copy">© {new Date().getFullYear()} Nicole Esposito. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
