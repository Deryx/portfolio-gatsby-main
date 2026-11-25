import React from "react";
import profile from "../images/deryx-scott-profile.webp";
import spanishTutor from "../images/spanishTutor.webp";
import simon from "../images/simon.webp";
import blackjack from "../images/blackjack.webp";
import workRequest from "../images/work-request-3.webp";
import netPriceCalculator from "../images/net-price-calculator.webp";
import employeeDashboard from "../images/employee-dashboard.webp";
import "./styles.scss";

const projects = [
  {
    name: "Spanish Tutor",
    category: "Language learning · Personal project",
    description:
      "An interactive Spanish-learning application with vocabulary and verb-conjugation practice, flashcards, and games designed to make learning active and engaging.",
    image: spanishTutor,
    imageAlt: "Spanish Tutor Spanish learning application preview",
    technologies: ["React", "TypeScript", "Next.js", "SQLite", "Tailwind CSS", "ASP.NET Core"],
    demo: "https://spanish-tutor-next-c19u-eight.vercel.app/",
    demoLabel: "Live application",
  },
  {
    name: "Employee Dashboard",
    category: "Programming learning · Personal project",
    description:
      "A programming assignment to implement a high performance employee table using Tan Stack Query, Table, and Virtualization.",
    image: employeeDashboard,
    imageAlt: "Employee Dashboard application preview",
    technologies: ["React", "TypeScript", "Next.js", "SQLite", "Tailwind CSS", "ASP.NET Core"],
    demo: "https://employee-dashboard-virid-alpha.vercel.app/",
    demoLabel: "Live application",
  },
  {
    name: "Simon",
    category: "Interactive game · Personal project",
    description:
      "A browser-based take on the classic pattern-memory game, built with a growing sequence of lights and sounds that challenges players to remember and repeat each round.",
    image: simon,
    imageAlt: "Simon memory game preview",
    technologies: ["Gatsby", "React", "TypeScript", "Sass"],
    demo: "https://simon-gatsby.vercel.app/",
    demoLabel: "Play the game",
  },
  {
    name: "Blackjack",
    category: "Interactive game · Personal project",
    description:
      "A web implementation of blackjack that recreates the core player-versus-dealer experience and familiar goal of reaching 21 without going over.",
    image: blackjack,
    imageAlt: "Blackjack card game preview",
    technologies: ["Gatsby", "React", "TypeScript", "Sass"],
    demo: "https://blackjack-gatsby.vercel.app/",
    demoLabel: "Play the game",
  },
  {
    name: "Facilities Work Request",
    category: "Enterprise application · Higher education",
    description:
      "A financial aid workflow application that let campus users submit maintenance requests and helped staff assign work, update status, and produce work tickets.",
    image: workRequest,
    imageAlt: "Facilities work request application preview",
    technologies: ["ASP.NET", "C#", "SQL", "JavaScript"],
  },
  {
    name: "Net Price Calculator",
    category: "Enterprise application · Higher education",
    description:
      "A financial aid application that let prospective and current students used to calculate their expected contribution to college costs.",
    image: netPriceCalculator,
    imageAlt: "Net Price Calculator application preview",
    technologies: ["HTML5", "AngularJS", "CSS"],
  },
];

const skillGroups = [
  { title: "Frontend engineering", items: ["React", "TypeScript", "JavaScript", "Next.js", "Gatsby", "Angular", "HTML5", "CSS3", "Sass", "Less"] },
  { title: "Backend & APIs", items: ["C#", "ASP.NET Core", "Node.js", "Python", "Java", "REST APIs", "GraphQL"] },
  { title: "Data & persistence", items: ["SQL Server", "PostgreSQL", "MySQL", "SQLite", "MongoDB", "DB2"] },
  { title: "Quality & delivery", items: ["Storybook", "Jest", "Cypress", "Mocha", "Karma", "Jenkins", "Git", "D3.js"] },
];

const experiences = [
  {
    role: "Software Engineer III",
    organization: "JPMorgan Chase & Co.",
    dates: "December 2017 – May 2025",
    details: [
      "Built and enhanced reusable frontend components used by more than 100 web teams across the organization.",
      "Helped modernize legacy JavaScript Web Components by moving functionality into composable React components.",
      "Developed shared data-visualization components with D3.js and supported component documentation through Storybook.",
      "Worked across enterprise user interfaces for payments and collections, with an emphasis on maintainability and developer experience.",
    ],
    stack: "React · TypeScript · JavaScript · D3.js · Storybook · Sass · Jest · Cypress · Jenkins",
  },
  {
    role: "Software Engineering Mentor",
    organization: "Springboard",
    dates: "June 2022 – December 2023",
    details: [
      "Mentored students through project-based software engineering work in HTML, CSS, JavaScript, React, Python, SQL, and data structures.",
      "Reviewed code, helped troubleshoot technical challenges, and coached students on practical development habits.",
    ],
    stack: "JavaScript · React · Python · SQL · HTML · CSS",
  },
  {
    role: "Front-End Web Development Mentor",
    organization: "Thinkful",
    dates: "2013 – 2017",
    details: [
      "Provided one-on-one guidance to aspiring developers working through front-end projects and core web technologies.",
      "Helped students debug applications and strengthen their understanding of HTML, CSS, and JavaScript.",
    ],
    stack: "HTML · CSS · JavaScript",
  },
  {
    role: "Web Developer & Database Administrator",
    organization: "The College of New Rochelle",
    dates: "2000 – 2016",
    details: [
      "Created and maintained the college's early web presence and developed internal applications for facilities requests, student services, and academic workflows.",
      "Built reporting and data processes supporting institutional advancement, operations, and campus administration.",
    ],
    stack: "JavaScript · jQuery · ASP.NET · C# · SQL · DB2 · Raiser's Edge",
  },
];

const IndexPage = () => (
  <>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Deryx Scott home">Deryx <span>Scott</span></a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href="mailto:deryxescott@gmail.com">Let’s connect <span aria-hidden="true">↗</span></a>
    </header>

    <main id="home">
      <section className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">Frontend software engineer</p>
          <h1>Deryx E. Scott</h1>
          <p className="hero-lede">Building thoughtful, scalable web experiences with React, TypeScript, and JavaScript.</p>
          <p className="hero-description">
            I’m a software engineer with more than 20 years of experience creating web applications, modernizing frontend platforms, and turning complex requirements into clear, usable experiences. I care about clean architecture, accessible interfaces, and software that is built to last.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">→</span></a>
            <a className="button button-secondary" href="mailto:deryxescott@gmail.com">Contact me</a>
          </div>
          <div className="hero-tech" aria-label="Core technologies">
            <span>React</span><span>TypeScript</span><span>JavaScript</span><span>Next.js</span><span>.NET</span>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="portrait-accent" />
          <img className="hero-portrait" src={profile} alt="Professional portrait of Deryx Scott" />
          <div className="portrait-note"><span className="status-dot" /> Open to the right opportunity</div>
        </div>
      </section>

      <section className="expertise-strip section-wrap" aria-label="Technical expertise overview">
        <div className="expertise-heading"><span className="eyebrow">What I do</span><strong>Engineering<br />with purpose.</strong></div>
        <div><span className="expertise-icon">⌘</span><h3>Frontend systems</h3><p>Reusable components, design systems, and responsive interfaces.</p></div>
        <div><span className="expertise-icon">⌁</span><h3>Modernization</h3><p>Improving legacy applications with maintainable modern patterns.</p></div>
        <div><span className="expertise-icon">◫</span><h3>Data-driven UI</h3><p>API-connected experiences and interactive data visualization.</p></div>
        <div><span className="expertise-icon">↗</span><h3>Mentorship</h3><p>Helping developers grow through feedback and practical guidance.</p></div>
      </section>

      <section className="section-wrap about-section" id="about">
        <div className="section-heading"><p className="eyebrow">A little about me</p><h2>Engineering experience.<br /><span>Curiosity that keeps growing.</span></h2></div>
        <div className="about-copy">
          <p>My career in web development began with a curiosity about how websites worked and grew into more than two decades of building applications for real people and organizations. I started with foundational web technologies and gradually expanded into enterprise application development, frontend architecture, APIs, databases, and modern JavaScript frameworks.</p>
          <p>At JPMorgan Chase, I worked on enterprise frontend platforms, building reusable components and helping move legacy Web Component functionality into React. I enjoy the engineering challenges behind that work: understanding an existing system, finding a better path forward, and delivering software that other developers can confidently build on.</p>
          <p>Outside of day-to-day development, I enjoy mentoring aspiring engineers, exploring new tools, strength training, and building personal projects—including MySpanishTutor, a language-learning application.</p>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-wrap">
          <div className="section-title-row"><div><p className="eyebrow">Selected work</p><h2>Projects that bring ideas to life.</h2></div><a className="text-link" href="https://github.com/Deryx" target="_blank" rel="noreferrer">More on GitHub ↗</a></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-image-wrap"><img src={project.image} alt={project.imageAlt} loading="lazy" /></div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  {project.demo && <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">{project.demoLabel} <span aria-hidden="true">↗</span></a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap experience-section" id="experience">
        <div className="section-title-row"><div><p className="eyebrow">Career path</p><h2>Experience built over time.</h2></div><p className="section-intro">A mix of enterprise engineering, application development, and developer mentorship.</p></div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={`${experience.organization}-${experience.role}`}>
              <div className="timeline-date">{experience.dates}</div>
              <div className="timeline-detail"><h3>{experience.role}</h3><p className="organization">{experience.organization}</p><ul>{experience.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><p className="stack-line">{experience.stack}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-wrap">
          <div className="section-heading"><p className="eyebrow">Technical toolkit</p><h2>Tools for building <span>better software.</span></h2></div>
          <div className="skill-grid">
            {skillGroups.map((group) => <article className="skill-card" key={group.title}><h3>{group.title}</h3><div className="tag-list">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div><p className="eyebrow">Have a project or opportunity?</p><h2>Let’s build something<br /><span>meaningful.</span></h2><p>I’m always interested in thoughtful conversations about frontend engineering, software development, and opportunities to make useful things.</p></div>
        <div className="contact-actions"><a className="button button-primary" href="mailto:deryxescott@gmail.com">Email me ↗</a><a className="button button-secondary" href="https://www.linkedin.com/in/deryxescott/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a><a className="text-link" href="https://github.com/Deryx" target="_blank" rel="noreferrer">GitHub profile ↗</a></div>
      </section>
    </main>

    <footer className="site-footer"><div className="section-wrap"><a className="wordmark" href="#home">Deryx <span>Scott</span></a><p>Designed and built with care. © {new Date().getFullYear()} Deryx Scott.</p><a href="#home">Back to top ↑</a></div></footer>
  </>
);

export const Head = () => (
  <>
    <title>Deryx E. Scott | Frontend Software Engineer</title>
    <meta name="description" content="Deryx E. Scott is a frontend software engineer specializing in React, TypeScript, JavaScript, enterprise UI systems, and modernizing web applications." />
    <meta property="og:title" content="Deryx E. Scott | Frontend Software Engineer" />
    <meta property="og:description" content="Building thoughtful, scalable web experiences with React, TypeScript, and JavaScript." />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
  </>
);

export default IndexPage;
