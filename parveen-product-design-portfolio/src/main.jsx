import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    name: "LifeCue",
    type: "Health · Mobile product concept",
    description:
      "A health-tracking concept exploring how people living with diabetes or hypertension can keep everyday health routines in view.",
    tags: ["Product design", "Health tracking", "Mobile UX"],
    className: "lifecue",
    visual: <LifeCueVisual />,
    href: "#lifecue",
  },
  {
    number: "02",
    name: "Ushauri",
    type: "Wellbeing · Mobile product concept",
    description:
      "A mental-wellness concept shaped around the Kenyan context, with a focus on approachable support and a clear mobile experience.",
    tags: ["UX/UI design", "Wellbeing", "Prototyping"],
    className: "ushauri",
    visual: <UshauriVisual />,
    href: "#ushauri",
  },
  {
    number: "03",
    name: "Rel Beauty",
    type: "Web design · Website in progress",
    description:
      "A website project for a beauty training institute, bringing key information about the institute, courses and admissions into one place.",
    tags: ["Responsive web", "React / Next.js", "UI development"],
    className: "relbeauty",
    visual: <RelBeautyVisual />,
    href: "#relbeauty",
  },
];

function LifeCueVisual() {
  return (
    <div className="device-stage health-stage">
      <div className="device phone health-phone">
        <div className="phone-top">
          <span>9:41</span>
          <span>•••</span>
        </div>
        <div className="app-greeting">
          Good morning <span>✳</span>
        </div>
        <div className="app-title">
          Your health,
          <br />
          at a glance.
        </div>
        <div className="health-score">
          <span className="tiny-label">TODAY'S CHECK-IN</span>
          <strong>
            You're building
            <br />a healthy rhythm.
          </strong>
          <div className="progress">
            <i />
          </div>
        </div>
        <div className="metric-row">
          <div>
            <span className="metric-icon">↗</span>
            <small>Blood pressure</small>
            <strong>Track today</strong>
          </div>
          <div>
            <span className="metric-icon orange">◉</span>
            <small>Blood glucose</small>
            <strong>Log reading</strong>
          </div>
        </div>
        <div className="reminder">
          <span>◷</span>
          <div>
            <small>UP NEXT</small>
            <strong>Daily check-in</strong>
          </div>
          <b>›</b>
        </div>
      </div>
      <div className="floating-note note-one">
        A little progress
        <br />
        adds up. <span>✦</span>
      </div>
      <div className="floating-note note-two">
        <span className="pulse-dot" /> Gentle reminders
      </div>
    </div>
  );
}

function UshauriVisual() {
  return (
    <div className="device-stage ushauri-stage">
      <div className="device phone ushauri-phone">
        <div className="phone-top">
          <span>9:41</span>
          <span>•••</span>
        </div>
        <div className="ushauri-orb">
          <span>✳</span>
        </div>
        <div className="ushauri-kicker">A MOMENT FOR YOU</div>
        <div className="ushauri-heading">
          How are you
          <br />
          feeling today?
        </div>
        <p className="ushauri-copy">
          Take a breath. Check in with yourself, at your own pace.
        </p>
        <div className="mood-row">
          <span>☁</span>
          <span>☻</span>
          <span>☺</span>
          <span>✧</span>
        </div>
        <div className="start-button">
          Start a check-in <b>↗</b>
        </div>
        <div className="ushauri-bottom">Small steps. Your pace.</div>
      </div>
      <div className="flower flower-one">✳</div>
      <div className="flower flower-two">✺</div>
      <div className="floating-note ushauri-note">
        Space to pause
        <br />
        without pressure.
      </div>
    </div>
  );
}

function RelBeautyVisual() {
  return (
    <div className="web-stage">
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <small>relbeauty.example</small>
      </div>
      <div className="beauty-web">
        <div className="beauty-nav">
          <b>
            REL <i>BEAUTY</i>
          </b>
          <span>ABOUT　 COURSES　 ADMISSIONS</span>
          <button>Enquire ↗</button>
        </div>
        <div className="beauty-hero">
          <div>
            <small>BEAUTY. SKILL. POSSIBILITY.</small>
            <h3>
              Learn a skill.
              <br />
              <em>Build your future.</em>
            </h3>
            <p>
              Explore beauty training and take the next step in your journey.
            </p>
            <span className="beauty-cta">Explore courses ↗</span>
          </div>
          <div className="beauty-photo">
            <div className="photo-sun" />
            <div className="photo-arch" />
            <div className="photo-vase" />
          </div>
        </div>
        <div className="beauty-footer">
          <span>TRAIN WITH PURPOSE</span>
          <span>01 / WELCOME</span>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <a className={`project-card ${project.className}`} href={project.href}>
      <div className="project-art">
        {project.visual}
        <span className="art-number">{project.number}</span>
      </div>
      <div className="project-info">
        <div>
          <p className="eyebrow">{project.type}</p>
          <h3>
            {project.name} <ArrowUpRight size={20} strokeWidth={1.6} />
          </h3>
          <p className="project-desc">{project.description}</p>
        </div>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

/* LIFE CUE CASE STUDY */

function LifeCueCaseStudy() {
  return (
    <section className="lifecue-case" id="lifecue">
      <div className="case-top">
        <span>01 / CASE STUDY</span>
        <span className="status">Concept project</span>
      </div>

      <div className="lifecue-intro">
        <div>
          <p className="eyebrow">HEALTH TRACKING · MOBILE PRODUCT CONCEPT</p>
          <h2>LifeCue</h2>
          <p className="lifecue-tagline">
            Making everyday health routines easier to keep track of.
          </p>
        </div>
        <p className="lifecue-overview">
          LifeCue is a mobile product concept exploring how people living with
          diabetes or hypertension, including remote workers, can manage
          everyday health routines in one place. The concept brings together
          health tracking, medication reminders and habit support.
        </p>
      </div>

      <div className="lifecue-meta">
        <div>
          <span>PROJECT TYPE</span>
          <p>Mobile app concept</p>
        </div>
        <div>
          <span>MY ROLE</span>
          <p>Product / UX/UI design</p>
        </div>
        <div>
          <span>DESIGN TOOL</span>
          <p>Figma</p>
        </div>
        <div>
          <span>PROJECT STATUS</span>
          <p>Concept project</p>
        </div>
      </div>

      <div className="lifecue-content-block">
        <div className="lifecue-section-heading">
          <span>01</span>
          <div>
            <h3>The concept</h3>
            <p>
              Bringing everyday health activities into a more organized mobile
              experience.
            </p>
          </div>
        </div>
        <p>
          Keeping track of health routines can involve several activities, from
          recording vital readings to remembering medication and building
          healthy habits. LifeCue explores a single experience where these
          activities can be accessed and managed.
        </p>
      </div>

      <div className="lifecue-content-block">
        <div className="lifecue-section-heading">
          <span>02</span>
          <div>
            <h3>Key features and screens</h3>
            <p>
              The design explores three areas of everyday health management.
            </p>
          </div>
        </div>

        <div className="lifecue-feature-grid">
          <article>
            <span className="feature-number">01</span>
            <h4>Medication reminders</h4>
            <p>
              An interface for adding medication details, setting dosage
              schedules and managing reminder times.
            </p>
          </article>
          <article>
            <span className="feature-number">02</span>
            <h4>Habit tracking</h4>
            <p>
              A way to choose or add habits, set reminders and keep everyday
              routines organized.
            </p>
          </article>
          <article>
            <span className="feature-number">03</span>
            <h4>Health progress</h4>
            <p>
              A space to record and view health information such as blood
              pressure, heart rate, blood glucose and water intake.
            </p>
          </article>
        </div>
      </div>

      <div className="lifecue-gallery">
        <div className="lifecue-gallery-heading">
          <div>
            <p className="eyebrow">DESIGN EXPLORATION</p>
            <h3>Medication and habit reminders</h3>
          </div>
          <span>SCREEN 01</span>
        </div>
        <img
          className="lifecue-gallery-image"
          src="/parveen-product-design-portfolio/assets/lifecue-reminders.png"
          alt="LifeCue medication and habit reminder interface designs"
        />
        <p className="lifecue-image-caption">
          Screens showing medication setup, reminder scheduling and habit
          management.
        </p>
      </div>

      <div className="lifecue-gallery">
        <div className="lifecue-gallery-heading">
          <div>
            <p className="eyebrow">DESIGN EXPLORATION</p>
            <h3>Health tracking and progress</h3>
          </div>
          <span>SCREEN 02</span>
        </div>
        <img
          className="lifecue-gallery-image"
          src="/parveen-product-design-portfolio/assets/lifecue-tracking.png"
          alt="LifeCue health tracking and progress interface designs"
        />
        <p className="lifecue-image-caption">
          Screens exploring health vitals, weekly progress and everyday
          tracking.
        </p>
      </div>

      <div className="lifecue-content-block lifecue-reflection">
        <div className="lifecue-section-heading">
          <span>03</span>
          <div>
            <h3>Design considerations</h3>
            <p>Areas that shaped the interface direction.</p>
          </div>
        </div>
        <ul>
          <li>
            <strong>Clarity:</strong> Present health information in a way that
            is easy to scan and understand.
          </li>
          <li>
            <strong>Routine support:</strong> Make it straightforward to create
            and manage reminders.
          </li>
          <li>
            <strong>Consistency:</strong> Keep related tracking and reminder
            activities within a coherent experience.
          </li>
        </ul>
      </div>

      <div className="lifecue-next">
        <p className="eyebrow">NEXT STEPS</p>
        <p>
          This case study can be developed further with the original problem
          statement, design process, user flows, wireframes and any feedback or
          testing that was actually carried out.
        </p>
      </div>
    </section>
  );
}

/* USHAURI CASE STUDY */

function UshauriCaseStudy() {
  const screens = [
    {
      title: "Mood Check-in",
      description:
        "An onboarding screen that allows users to reflect on how they are feeling.",
      image:
        "/parveen-product-design-portfolio/assets/ushauri-onboarding-mood.png",
      alt: "Ushauri mood check-in onboarding screen",
    },
    {
      title: "Personal Goals",
      description:
        "Users identify personal wellness goals to help shape their experience.",
      image:
        "/parveen-product-design-portfolio/assets/ushauri-onboarding-goals.png",
      alt: "Ushauri personal goals onboarding screen",
    },
    {
      title: "Home Dashboard",
      description:
        "A central dashboard bringing together mood summaries, wellness tips, motivation and support options.",
      image: "/parveen-product-design-portfolio/assets/ushauri-home.png",
      alt: "Ushauri home dashboard",
    },
    {
      title: "Counsellor Directory",
      description:
        "A directory that helps users explore available counselling support.",
      image: "/parveen-product-design-portfolio/assets/ushauri-counsellors.png",
      alt: "Ushauri counsellor directory",
    },
    {
      title: "Communities",
      description:
        "A space where users can explore communities and connect around shared experiences.",
      image: "/parveen-product-design-portfolio/assets/ushauri-communities.png",
      alt: "Ushauri communities screen",
    },
    {
      title: "Mshauri Virtual Assistant",
      description:
        "A conversational interface designed to make wellness guidance more approachable.",
      image:
        "/parveen-product-design-portfolio/assets/ushauri-mshauri-chat.png",
      alt: "Ushauri Mshauri virtual assistant chat",
    },
    {
      title: "Mood Tracking",
      description:
        "A screen for recording and reflecting on emotional patterns over time.",
      image:
        "/parveen-product-design-portfolio/assets/ushauri-mood-tracking.png",
      alt: "Ushauri mood tracking screen",
    },
    {
      title: "User Profile",
      description:
        "A personal space where users can view and manage their profile information.",
      image: "/parveen-product-design-portfolio/assets/ushauri-profile.png",
      alt: "Ushauri user profile screen",
    },
  ];

  return (
    <section className="ushauri-case-study" id="ushauri">
      <div className="ushauri-intro">
        <div className="case-eyebrow">
          <span>02 / CASE STUDY</span>
          <span>PRODUCT DESIGN</span>
        </div>

        <h2>
          Ushauri<span>.</span>
        </h2>

        <p className="ushauri-subtitle">
          Mental wellness · Mobile product concept
        </p>

        <div className="ushauri-overview">
          <div>
            <span className="small-label">OVERVIEW</span>
            <p>
              Ushauri is a mental wellness mobile app concept designed with the
              Kenyan context in mind. The concept explores how digital
              experiences can make mental wellness resources, emotional
              reflection and support more approachable.
            </p>
          </div>

          <div>
            <span className="small-label">MY ROLE</span>
            <p>Product design, UX/UI design and prototyping.</p>
          </div>

          <div>
            <span className="small-label">TOOLS</span>
            <p>Figma</p>
          </div>

          <div>
            <span className="small-label">PLATFORM</span>
            <p>Mobile application</p>
          </div>
        </div>
      </div>

      <div className="ushauri-story">
        <div>
          <span className="small-label">THE CONCEPT</span>
          <h3>Making mental wellness support more approachable.</h3>
        </div>
        <p>
          Ushauri explores a digital space where users can check in with their
          emotions, track their moods, discover wellness resources and explore
          different forms of support. The concept brings these experiences
          together in one mobile interface.
        </p>
      </div>

      <div className="ushauri-story">
        <div>
          <span className="small-label">DESIGN FOCUS</span>
          <h3>A calm and accessible experience.</h3>
        </div>
        <p>
          The interface focuses on clear navigation, approachable language and a
          consistent visual experience. The design brings together personal
          reflection, community and access to counselling resources.
        </p>
      </div>

      <div className="ushauri-screens-section">
        <div className="ushauri-section-heading">
          <span className="small-label">THE DESIGN</span>
          <h3>Exploring the experience.</h3>
          <p>
            A closer look at the key screens and features of the Ushauri mobile
            concept.
          </p>
        </div>

        <div className="ushauri-screen-grid">
          {screens.map((screen, index) => (
            <div className="ushauri-screen-card" key={screen.title}>
              <div className="ushauri-screen-image">
                <img src={screen.image} alt={screen.alt} loading="lazy" />
              </div>

              <div className="ushauri-screen-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{screen.title}</h4>
                  <p>{screen.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ushauri-reflection">
        <span className="small-label">REFLECTION</span>
        <h3>Designing for a personal experience.</h3>

        <p>
          Working on Ushauri highlighted the importance of thoughtful design
          when creating experiences around mental wellness. Language, visual
          hierarchy and navigation all influence how comfortable users may feel
          when interacting with a product.
        </p>

        <p>
          Further development would explore privacy, accessibility, community
          moderation and how the product can clearly communicate the role and
          limitations of digital wellness support.
        </p>
      </div>
    </section>
  );
}

/* REL BEAUTY CASE STUDY */

function RelBeautyCaseStudy() {
  const screenshots = [
    {
      image: "/parveen-product-design-portfolio/assets/relbeauty-home.png",
      title: "Homepage",
      description:
        "Introducing the institute and guiding visitors to explore or apply.",
    },
    {
      image: "/parveen-product-design-portfolio/assets/relbeauty-courses.png",
      title: "Courses",
      description:
        "Presenting the training programmes in a clear, accessible layout.",
    },
    {
      image:
        "/parveen-product-design-portfolio/assets/relbeauty-admissions.png",
      title: "Admissions",
      description:
        "Helping prospective students understand and begin the application process.",
    },
  ];

  return (
    <section className="relbeauty-section" id="relbeauty">
      <div className="case-topline">
        <span>03 / SELECTED PROJECT</span>
        <span>Website design · Development</span>
      </div>

      <div className="relbeauty-intro">
        <div>
          <p className="eyebrow">WEB DESIGN & DEVELOPMENT</p>
          <h2>
            Rel Beauty <em>Training Institute</em>
          </h2>
        </div>

        <p className="relbeauty-overview">
          A website for a beauty training institute, designed to introduce the
          institution, showcase its courses and make admissions information
          easier to access.
        </p>
      </div>

      <div className="relbeauty-meta">
        <div>
          <span>MY ROLE</span>
          <p>UI design & front-end development</p>
        </div>
        <div>
          <span>FOCUS</span>
          <p>Navigation, content hierarchy & responsive design</p>
        </div>
        <div>
          <span>TOOLS</span>
          <p>Figma, Next.js, React, Tailwind CSS</p>
        </div>
      </div>

      <div className="relbeauty-gallery">
        {screenshots.map((screen) => (
          <div className="relbeauty-screen" key={screen.title}>
            <div className="relbeauty-image">
              <img
                src={screen.image}
                alt={`Rel Beauty ${screen.title} page`}
                loading="lazy"
              />
            </div>
            <h3>{screen.title}</h3>
            <p>{screen.description}</p>
          </div>
        ))}
      </div>

      <div className="relbeauty-reflection">
        <span>PROJECT REFLECTION</span>
        <p>
          This project has given me an opportunity to translate a visual design
          into a working website while considering how prospective students
          navigate information and access admissions details.
        </p>
      </div>
    </section>
  );
}

/* MAIN PORTFOLIO */

function App() {
  return (
    <div className="site-shell">
      <header className="nav wrap">
        <a href="#home" className="wordmark">
          PW<span>®</span>
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability" href="#contact">
          <span /> Open to opportunities
        </a>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={14} /> PRODUCT DESIGNER · UX DESIGNER
            </p>
            <h1>
              Making digital
              <br />
              <em>feel more human.</em>
            </h1>
            <p className="hero-lede">
              I’m Parveen — a product and UX designer interested in making
              useful, thoughtful digital experiences for real people.
            </p>
            <div className="hero-actions">
              <a className="button dark" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="text-link" href="#about">
                A little about me <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="hero-side">
            <div className="hero-shape">
              <div className="shape-ring ring-a" />
              <div className="shape-ring ring-b" />
              <div className="shape-core">
                P<span>✳</span>
              </div>
              <div className="shape-caption">
                Curiosity
                <br />
                into clarity.
              </div>
            </div>
            <p className="side-note">
              Thoughtful interfaces.
              <br />
              Clearer everyday experiences.
            </p>
          </div>
          <div className="hero-bottom">
            <span>BASED IN NAIROBI, KENYA</span>
            <span>
              SCROLL TO EXPLORE <ArrowDownRight size={15} />
            </span>
          </div>
        </section>

        <section className="work-section wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK · 2024—2026</p>
              <h2>
                Ideas into <em>experiences.</em>
              </h2>
            </div>
            <p>
              A selection of product concepts and a website project. Each one is
              an opportunity to explore a problem, make decisions and learn by
              designing.
            </p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.name} />
            ))}
          </div>
        </section>

        <section className="approach-section">
          <div className="wrap approach-inner">
            <div>
              <p className="eyebrow">HOW I THINK</p>
              <h2>
                Design is more than
                <br />
                how it <em>looks.</em>
              </h2>
            </div>
            <div className="approach-copy">
              <p>
                I like connecting the dots between what people need, what a
                product should do and how an interface can make the next step
                feel clear.
              </p>
              <div className="approach-points">
                <div>
                  <span>01</span>
                  <b>Understand the problem</b>
                  <p>
                    Get clear on the context, people and task before jumping to
                    screens.
                  </p>
                </div>
                <div>
                  <span>02</span>
                  <b>Explore the experience</b>
                  <p>
                    Use flows, wireframes and prototypes to make ideas tangible.
                  </p>
                </div>
                <div>
                  <span>03</span>
                  <b>Refine with intention</b>
                  <p>
                    Make thoughtful UI choices and improve the details that
                    support usability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="wrap">
          <LifeCueCaseStudy />
          <UshauriCaseStudy />
          <RelBeautyCaseStudy />
        </div>

        <section className="about-section wrap" id="about">
          <div className="about-label">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <div className="about-monogram">
              P<span>W</span>
              <i>✳</i>
            </div>
          </div>
          <div className="about-content">
            <h2>
              Designer mindset.
              <br />
              <em>Problem-solver heart.</em>
            </h2>
            <p>
              I’m Parveen Wesonga, a Computer Science graduate exploring the
              intersection of product design, technology and everyday problems.
              My experience across digital projects and IT support has helped me
              appreciate the importance of clarity, empathy and reliable
              experiences.
            </p>
            <p>
              I enjoy turning early ideas into structured flows, wireframes and
              prototypes, then refining the details that help a product make
              sense to the people using it.
            </p>
            <div className="skill-list">
              <span>UX research basics</span>
              <span>Wireframing</span>
              <span>Prototyping</span>
              <span>Figma</span>
              <span>UI design</span>
              <span>Front-end fundamentals</span>
            </div>
            <a className="text-link" href="#contact">
              Let’s connect <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="wrap contact-inner">
            <p className="eyebrow">HAVE A PROJECT OR ROLE IN MIND?</p>
            <h2>
              Let’s make something
              <br />
              <em>meaningful.</em>
            </h2>
            <p>
              I’m open to junior product design, UX design and digital product
              opportunities.
            </p>
            <a className="button light" href="mailto:wesongaparveen@gmail.com">
              Get in touch <MoveUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <a href="#home" className="wordmark">
          PW<span>®</span>
        </a>
        <span>Designed with curiosity in Nairobi, Kenya.</span>
        <a href="#home">Back to top ↑</a>
        <span>© {new Date().getFullYear()} Parveen Wesonga</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
