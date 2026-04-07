import React from 'react';
import "../components/navbar.css";
import { motion } from "motion/react";

function About() {
    const stack_icons = [
        {
            name: 'Figma',
            icon: 'img/figma.svg'
        },
        {
            name: 'HTML5',
            icon: 'img/html5.svg'
        },
        {
            name: 'CSS3',
            icon: 'img/css3.svg'
        },
        {
            name: 'Javascript',
            icon: 'img/javascript.svg'
        },
        {
            name: 'React',
            icon: 'img/react.svg'
        },
        {
            name: 'Sass',
            icon: 'img/sass.svg'
        },
        {
            name: 'Photoshop',
            icon: 'img/photoshop.svg'
        },
        {
            name: 'IBM SPSS',
            icon: 'img/spss.svg'
        },
        {
            name: 'PHP',
            icon: 'img/php.svg'
        },
        {
            name: 'MySQL',
            icon: 'img/mysql.svg'
        },
        {
            name: 'Git',
            icon: 'img/git.svg'
        },
        {
            name: 'GitHub',
            icon: 'img/github.svg'
        },
    ]



    return (
        <div>
            <div className='about'>

                {/* About Section */}
                <motion.section
                    className='about__content-area-1'
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <div className='about__aboutme'>

                        <motion.h3
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                        >
                            Hello again! I'm Nicole Esposito
                        </motion.h3>

                        <motion.p
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                        >
                            I am a senior at the University of Central Florida, double majoring in Digital Media and Psychology with a focus on web and mobile application design and development. I'm passionate about transforming creative ideas into functional, user-centered solutions, applying human-centered principles to guide research, design, and development decisions.
                        </motion.p>

                        <motion.p
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
                        >
                            Currently, I work as a web designer at a web design agency, collaborating with real clients to deliver solutions aligned with both user needs and business goals. This experience has strengthened my ability to think strategically, incorporate feedback, and thrive in fast-paced environments while creating meaningful digital experiences.
                        </motion.p>

                    </div>

                    <motion.div
                        className='about__personal-photo'
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
                    >
                        <img src="/img/portrait_2.jpeg" alt="portrait" />
                    </motion.div>

                </motion.section>

                {/* Stack Section */}
                <section className='about__content-area-2'>

                    <motion.div
                        className='about__icons'
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <div className='stack__icons'>

                            <motion.h3
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Design & Development Stack
                            </motion.h3>

                            <div className="stack__icons-grid">
                                {stack_icons.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        className='icon-card'
                                        initial={{ y: -20, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.8,
                                            ease: "easeOut",
                                            delay: 0.3 + index * 0.1
                                        }}
                                        viewport={{ once: true }}
                                    >
                                        <img src={item.icon} alt={item.name} />
                                        <p>{item.name}</p>
                                    </motion.div>
                                ))}
                            </div>

                        </div>
                    </motion.div>

                </section>

            </div>
        </div>
    );
}


export default About;