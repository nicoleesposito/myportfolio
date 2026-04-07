import React from 'react';
import { Link } from "react-router-dom";
import "../components/navbar.css";
import { motion } from "motion/react";

function Home() {
    const works = [
        {
            title: 'CloseKnit- Social Platform',
            role: 'UX Designer, Developer',
            hyperlink: '/closeknit',
            image: 'img/closeknit-cover3.png'
        },
        {
            title: 'Tix - Ticketing Platform',
            role: 'UX Designer',
            hyperlink: '/tix',
            image: 'img/tix-cover.png'
        },
        {
            title: 'Game Review - Content Management System',
            role: 'Front-End & Back-End Developer',
            hyperlink: 'https://students.gaim.ucf.edu/~ni880937/dig3134c/assignment05/reviews.php',
            image: 'img/gamereview-cover.png'
        },

    ];

    return (
        <div>
            <div className="home">

                {/* Hero Section */}
                <motion.section
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
                            Orlando, FL - Currently studying at the University of Central Florida and freelancing as a web designer for a web design agency.
                        </motion.p>

                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                        >
                            <Link to="#works"><button className="home__btn-work">My work!</button></Link>
                            <Link to="/about"><button className="home__btn-about">About me!</button></Link>
                        </motion.div>
                    </div>

                    <motion.div
                        className="home__personal-photo"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.7 }}
                    >
                        <img src="/img/portrait_1.jpeg" alt="logo" />
                    </motion.div>
                </motion.section>

                <section id="works" className="home__works">
                    <motion.p
                        className='home__text-featured'
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.1, ease: "easeOut", delay: 0.9 }}
                        viewport={{ once: true }}
                    >
                        Featured Work
                    </motion.p>

                    <motion.p
                        className='home__text-featured2'
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.1, ease: "easeOut", delay: 0.9 }}
                        viewport={{ once: true }}
                    >
                        A curated selection of projects that I've worked on that helped improve my skills in design and development!
                    </motion.p>

                    <div className="home__projects-map">
                        {works.map(function (item, index) {

                            var buttonLink;

                            if (item.hyperlink.startsWith("http")) {
                                buttonLink = (
                                    <a
                                        href={item.hyperlink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <button className='project-btn'>View Project</button>
                                    </a>
                                );
                            } else {
                                buttonLink = (
                                    <Link to={item.hyperlink}>
                                        <button className='project-btn'>View Project</button>
                                    </Link>
                                );
                            }

                            return (
                                <motion.div
                                    key={item.title}
                                    className="project-card"
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.2 * index, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                >
                                    <img className="project-card__image" src={item.image} alt={item.title} />
                                    <h3 className='project-title'>{item.title}</h3>
                                    <p className='project-role'>{item.role}</p>
                                    {buttonLink}
                                </motion.div>
                            );
                        })}
                    </div>


                </section>

            </div>
        </div>
    );
}

export default Home;
