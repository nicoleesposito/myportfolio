import React from "react";
import { motion } from "motion/react";
import "../components/navbar.css";

const sections = [
    {
        title: 'Inspiration',
        body: 'Designing logos and icons is very fun, but sometimes it is very difficult to scale them for your needs without losing quality. We were inspired by animation software like Procreate and Flipnote Studio — a polished and simple UI but with lower level tools for good fun.',
    },
    {
        title: 'What it does',
        body: 'SVGogh (like Van Gogh) is an animation software that allows users to create and download animated SVGs. We incorporated basic tools like a brush, color wheel, color picker, and more. Furthermore, we have a responsive code editor built into the canvas display that shows users what their frame would look like as an SVG (and they can edit their canvas from it too!).',
    },
    {
        title: 'How we built it',
        body: 'Sticking to simplicity, we used HTML, CSS, and JavaScript.',
    },
    {
        title: 'Challenges we ran into',
        body: 'One of our biggest challenges was responsive design — we struggled to get the layout working well on smaller screens due to time constraints, which reinforced how important it is to design with multiple devices in mind from the start. We also ran into difficulties learning GitHub as a team and applying certain features like the eraser tool. A database was ultimately out of scope given the time pressure and learning curve involved.',
    },
    {
        title: 'Accomplishments that we\'re proud of',
        body: 'We are very proud of the overall flow as it took a long time to bring together. A big part of that was clear communication and consistent commits throughout the hackathon, which kept everyone in sync and minimized conflicts. Another major accomplishment was getting the code editor to reflect its changes on the canvas, enabling users to code or draw as they please.',
    },
    {
        title: 'What we learned',
        body: 'This project taught me that responsive design isn\'t an afterthought — when you don\'t plan for different screen sizes early, it becomes a much harder problem to solve under pressure. I also learned a lot about writing efficient, reusable code across multiple pages. Building the landing page, login pages, and drawing page pushed me to think carefully about how to share styles and structure without duplicating work. On the design side, I realized that under time constraints it\'s easy to jump straight into code, but investing more time in the prototype upfront leads to a better UX outcome. If I were to do this again, I\'d spend more time on the prototype before touching the codebase.',
    },
    {
        title: 'What\'s next for SVGogh',
        body: 'We hope to polish this project even further with a database and more features, such as mimicking 3D objects with animated SVGs and user collaboration on one canvas.',
    },
];

function SVGogh() {
    return (
        <div className="svgogh">

            {/* Hero */}
            <motion.div
                className="svgogh__hero"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <p className="about__eyebrow">Knight Hacks VIII Hackathon Project</p>
                <h1 className="svgogh__title">SVGogh</h1>
                <p className="svgogh__subtitle">A Vector Animation Tool</p>
                <div className="svgogh__meta">
                    <span>Front-End Developer &amp; UI Designer</span>
                    <span className="svgogh__meta-divider">·</span>
                    <span>2024</span>
                </div>
            </motion.div>

            {/* Demo video */}
            <motion.div
                className="svgogh__video-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
                <video
                    src="/vid/svgogh-demo.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="svgogh__video"
                />
            </motion.div>

            {/* My Contributions */}
            <motion.div
                className="svgogh__contributions"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <p className="about__eyebrow">My Contributions</p>
                <div className="svgogh__contrib-grid">
                    {[
                        { title: 'Branding & Logo', body: 'Designed the SVGogh logo and established the visual identity, including color palette and typography.' },
                        { title: 'Front-End Development', body: 'Wrote the front-end layout code, translating designs into structured, styled HTML and CSS across the application.' },
                        { title: 'Sign Up & Login Pages', body: 'Designed and developed the sign up and login flows, focusing on simplicity and a consistent visual style.' },
                        { title: 'UI Design & Layout', body: 'Responsible for the overall design system and page layout across the application, ensuring visual consistency throughout.' },
                    ].map((c, i) => (
                        <motion.div
                            key={c.title}
                            className="svgogh__contrib-card"
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.08 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="svgogh__contrib-title">{c.title}</h3>
                            <p className="svgogh__contrib-body">{c.body}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Prototype / branding */}
            <motion.div
                className="svgogh__prototype-wrap"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <p className="about__eyebrow">Design Prototype &amp; Branding</p>
                <img src="/img/svgogh-prototype.png" alt="SVGogh design prototype and logo branding" className="svgogh__prototype-img" />
            </motion.div>

            {/* Sections */}
            <div className="svgogh__content">
                {sections.map((s, i) => (
                    <motion.div
                        key={s.title}
                        className="svgogh__section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="svgogh__section-title">{s.title}</h2>
                        <p className="svgogh__section-body">{s.body}</p>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}

export default SVGogh;
