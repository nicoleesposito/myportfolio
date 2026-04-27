import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import "../components/navbar.css";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";

function Home() {
    const wrapperRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const target = location.state?.scrollTo;
        if (!target) return;
        const timeout = setTimeout(() => {
            if (target === 'works') {
                window.scrollTo({ top: window.innerHeight * 0.3, behavior: 'smooth' });
            } else {
                const el = document.getElementById(target);
                if (el) {
                    const top = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.13;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }
        }, 100);
        return () => clearTimeout(timeout);
    }, [location.state]);
    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end end"]
    });

    // Section 1 fades out and drifts up
    const s1Opacity = useTransform(scrollYProgress, [0.05, 0.4], [1, 0]);
    const s1Y = useTransform(scrollYProgress, [0.05, 0.4], [0, -60]);
    const s1Pointer = useTransform(s1Opacity, (v) => v < 0.1 ? 'none' : 'auto');

    // Section 2 fades in and rises up
    const s2Opacity = useTransform(scrollYProgress, [0.05, 0.4], [0, 1]);
    const hintOpacity = useTransform(scrollYProgress, [0.05, 0.35, 0.55, 0.75], [0, 1, 1, 0]);
    const s2Y = useTransform(scrollYProgress, [0.05, 0.4], [60, 0]);
    const s2Pointer = useTransform(s2Opacity, (v) => v < 0.1 ? 'none' : 'auto');

    const [s2State, setS2State] = useState('hidden');
    useMotionValueEvent(s2Opacity, 'change', (v) => {
        setS2State(v > 0.2 ? 'visible' : 'hidden');
    });

    const s2Container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };
    const s2Item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
    };



    const stackIcons = [
        { name: 'Figma', icon: 'img/figma.svg' },
        { name: 'HTML5', icon: 'img/html5.svg' },
        { name: 'CSS3', icon: 'img/css3.svg' },
        { name: 'Javascript', icon: 'img/javascript.svg' },
        { name: 'React', icon: 'img/react.svg' },
        { name: 'Sass', icon: 'img/sass.svg' },
        { name: 'Photoshop', icon: 'img/photoshop.svg' },
        { name: 'IBM SPSS', icon: 'img/spss.svg' },
        { name: 'PHP', icon: 'img/php.svg' },
        { name: 'MySQL', icon: 'img/mysql.svg' },
        { name: 'Git', icon: 'img/git.svg' },
        { name: 'GitHub', icon: 'img/github.svg' },
        { name: 'MongoDB', icon: 'img/mongodb.svg' },
        { name: 'Express', icon: 'img/express.svg' },
        { name: 'Node', icon: 'img/nodejs.svg' },
    ];

    const works = [
        {
            shortTitle: 'Tix',
            title: 'Tix — Ticketing Platform',
            role: 'UX Designer',
            description: 'A streamlined event ticketing experience built around reducing friction for both organizers and attendees. Focused on accessibility and clarity at every step.',
            hyperlink: '/tix',
            image: 'img/tix-cover.png'
        },
        {
            shortTitle: 'SVGogh',
            title: 'SVGogh — Vector Animation Tool',
            role: 'Front-End Developer & UI Designer',
            description: 'A browser-based animation tool that lets users create and download animated SVGs. Built with a brush, color wheel, color picker, and a live responsive code editor synced to the canvas.',
            hyperlink: '/svgogh',
            image: 'img/SVGogh_logo.png'
        },
        {
            shortTitle: 'Game Review',
            title: 'Game Review — CMS',
            role: 'Front-End & Back-End Developer',
            description: 'A full-stack content management system for game reviews. Built with PHP and MySQL, featuring dynamic content rendering and an admin interface for managing entries.',
            hyperlink: 'https://students.gaim.ucf.edu/~ni880937/dig3134c/assignment05/reviews.php',
            image: 'img/gamereview-cover.png'
        },
        {
            shortTitle: 'CloseKnit',
            title: 'CloseKnit — Social Platform',
            role: 'UX Designer & Developer',
            description: 'A community-driven social platform focused on meaningful connection. Designed end-to-end from user research through high-fidelity prototypes and front-end development.',
            hyperlink: '/closeknit',
            image: 'img/closeknit-cover3.png'
        },
    ];

    const [activeTab, setActiveTab] = useState(0);

    // Auto-advance every 11 seconds, loops
    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveTab((prev) => (prev + 1) % works.length);
        }, 11000);
        return () => clearTimeout(timer);
    }, [activeTab]);

    const active = works[activeTab];
    const buttonLink = active.hyperlink.startsWith('http') ? (
        <a href={active.hyperlink} target="_blank" rel="noopener noreferrer">
            <button className='project-btn'>View Project</button>
        </a>
    ) : (
        <Link to={active.hyperlink}>
            <button className='project-btn'>View Project</button>
        </Link>
    );

    return (
        <>
            <div ref={wrapperRef} className="home">

                {/* Section 1: Hero */}
                <motion.section className="hero-section" style={{ opacity: s1Opacity, y: s1Y, pointerEvents: s1Pointer }}>
                    <motion.div
                        className="home__content-area-1"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div className="home__introduction">
                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className='home__text-1'
                            >
                                Hello there! I'm Nicole!
                            </motion.p>

                            <motion.h1
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                className='hero-title'
                            >
                                I'm an aspiring <span className='home__highlight-1'>UI/UX Designer</span>
                                <span className='home__highlight-2'> with web development experience</span>
                            </motion.h1>

                            <motion.p
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                            >
                                Orlando, FL — Currently studying at the University of Central Florida and freelancing as a web designer for Simple.
                            </motion.p>

                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                            >
                                <button className="home__btn-work" onClick={() => window.scrollTo({ top: window.innerHeight * 0.3, behavior: 'smooth' })}>My work!</button>
                                <button className="home__btn-about" onClick={() => { const el = document.getElementById('about'); if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.13, behavior: 'smooth' }); }}>About me!</button>
                            </motion.div>
                        </div>

                        <motion.div
                            className="home__personal-photo"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
                        >
                            <img src="/img/portrait_1.jpeg" alt="Nicole" />
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Section 2: Featured Work */}
                <motion.section
                    id="works"
                    className="home__works"
                    style={{ opacity: s2Opacity, y: s2Y, pointerEvents: s2Pointer }}
                >
                    <motion.div
                        className="works-inner"
                        variants={s2Container}
                        animate={s2State}
                        initial="hidden"
                    >
                        <motion.p variants={s2Item} className='home__text-featured'>Featured Work</motion.p>

                        {/* Tab nav */}
                        <motion.div variants={s2Item} className="works-tabs">
                            {works.map((work, i) => (
                                <div key={work.shortTitle} className="works-tab-item">
                                    <button
                                        className={`works-tab${activeTab === i ? ' works-tab--active' : ''}`}
                                        onClick={() => setActiveTab(i)}
                                    >
                                        {work.shortTitle}
                                    </button>
                                    {activeTab === i && (
                                        <span className="works-tab__progress" key={activeTab} />
                                    )}
                                </div>
                            ))}
                        </motion.div>

                        <motion.hr variants={s2Item} className='works-separator' />

                        {/* Tab content */}
                        <motion.div variants={s2Item} className="works-content">

                            <div className="works-content__info">
                                <h2 className="works-content__title">{active.title}</h2>
                                <p className="works-content__role">{active.role}</p>
                                <p className="works-content__desc">{active.description}</p>
                                {buttonLink}
                            </div>
                            <div className="works-content__preview">
                                <img src={active.image} alt={active.title} className={active.shortTitle === 'SVGogh' ? 'preview-fit' : ''} />
                            </div>
                        </motion.div>

                        <motion.div variants={s2Item} className="works-all-link">
                            <Link to="/projects">
                                <button className="works-view-all-btn">View all projects</button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="scroll-hint"
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        style={{ opacity: hintOpacity, x: '-50%' }}
                    >
                        <span className="scroll-hint__pill">
                            Scroll to continue
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </motion.div>
                </motion.section>

            </div>

            {/* Section 3: About */}
            <section id="about" className="home__about-preview">
                <div className="about">
                    {/* Bio */}
                    <section className='about__content-area-1'>
                        <motion.div
                            className='about__personal-photo'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
                            viewport={{ once: true }}
                        >
                            <img src="/img/portrait_2.jpeg" alt="Nicole" />
                        </motion.div>
                        <div className='about__aboutme'>
                            <p className="home__text-featured about__eyebrow">About Me</p>
                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                Hello again! I'm Nicole Esposito
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                I'm a senior at the University of Central Florida, double majoring in Digital Media & Psychology with a focus on web and mobile design and development. My academic background in psychology and research methods, combined with hands-on experience designing and developing 10+ websites has shaped how I build digital products. I always prioritize accessibility, engagement, and user behavior in everything I create.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Currently, I freelance at a web design agency called Simple, collaborating with real clients to deliver solutions aligned with both user needs and business goals. This experience has strengthened my ability to think strategically, incorporate feedback, and thrive in fast-paced environments while creating meaningful digital experiences.
                            </motion.p>
                        </div>
                    </section>

                    {/* Stack pills */}
                    <section className='stack-section'>
                        <motion.p
                            className='marquee-heading'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true }}
                        >
                            Design & Development Stack
                        </motion.p>
                        <div className='stack-pills'>
                            {stackIcons.map((item, i) => (
                                <motion.span
                                    key={item.name}
                                    className='marquee-item'
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.04 }}
                                    viewport={{ once: true }}
                                >
                                    <img src={item.icon} alt={item.name} />
                                    {item.name}
                                </motion.span>
                            ))}
                        </div>
                    </section>
                </div>
            </section>

            {/* Section 4: Contact */}
            <section id="contact" className="home__contact">
                <motion.p
                    className="about__eyebrow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    Contact
                </motion.p>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    Let's work together
                </motion.h3>
                <motion.p
                    className="home__contact-sub"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Feel free to reach out! I'm always open to new opportunities and collaborations.
                </motion.p>
                <motion.div
                    className="home__contact-links"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <a href="mailto:nicoleesposiito@gmail.com" className="contact-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                        nicoleesposiito@gmail.com
                    </a>
                    <a href="https://www.linkedin.com/in/nicolesposito" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8" />
                            <path d="M7 10v7M7 7v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            <path d="M11 17v-4c0-1.5 1-2 2-2s2 .5 2 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            <path d="M11 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                        linkedin.com/in/nicolesposito
                    </a>
                    <a href="https://github.com/nicoleesposito" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <img src="/img/github.svg" alt="GitHub" width="20" height="20" />
                        github.com/nicoleesposito
                    </a>
                </motion.div>
            </section>
        </>
    );
}

export default Home;
