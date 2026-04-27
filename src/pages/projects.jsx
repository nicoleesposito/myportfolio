import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import '../components/navbar.css';

const caseStudies = [
    {
        title: 'Tix — Ticketing Platform',
        role: 'UX Designer',
        image: 'img/tix-cover.png',
        href: '/tix',
    },
    {
        title: 'CloseKnit — Social Platform',
        role: 'UX Designer & Developer',
        image: 'img/closeknit-cover3.png',
        href: '/closeknit',
    },
];

const webDev = [
    {
        title: 'SVGogh — Vector Animation Tool',
        role: 'Front-End Developer & UI Designer',
        image: 'img/SVGogh_logo.png',
        href: '/svgogh',
        fit: 'cover',
        ratio: '3/2',
    },
    {
        title: 'Game Review — CMS',
        role: 'Front-End & Back-End Developer',
        image: 'img/gamereview-cover.png',
        href: 'https://students.gaim.ucf.edu/~ni880937/dig3134c/assignment05/reviews.php',
        external: true,
    },
];

function ProjectCard({ project, i }) {
    const img = (
        <img
            src={project.image}
            alt={project.title}
            className="projects__card-img"
            style={project.ratio ? { aspectRatio: project.ratio, objectFit: project.fit || 'cover' } : {}}
        />
    );

    const content = (
        <motion.div
            className="projects__card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.08 }}
            viewport={{ once: true }}
        >
            {img}
            <div className="projects__card-info">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-role">{project.role}</p>
            </div>
        </motion.div>
    );

    if (project.external) {
        return <a href={project.href} target="_blank" rel="noopener noreferrer" className="projects__card-link">{content}</a>;
    }
    return <Link to={project.href} className="projects__card-link">{content}</Link>;
}

function Projects() {
    return (
        <div className="projects">
            <div className="projects__inner">

                <motion.h1
                    className="projects__page-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    Projects
                </motion.h1>

                {/* Case Studies */}
                <section className="projects__section">
                    <motion.h2
                        className="projects__section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Case Studies
                    </motion.h2>
                    <div className="projects__grid">
                        {caseStudies.map((p, i) => <ProjectCard key={p.title} project={p} i={i} />)}
                    </div>
                </section>

                {/* Web Development */}
                <section className="projects__section">
                    <motion.h2
                        className="projects__section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        Web Development
                    </motion.h2>
                    <div className="projects__grid">
                        {webDev.map((p, i) => <ProjectCard key={p.title} project={p} i={i} />)}
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Projects;
