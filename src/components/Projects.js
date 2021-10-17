import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import sephardicCenterShowCase from "../assets/gifs/sephardicCenterShowcase.gif";
import loginDemo from "../assets/gifs/loginProjectDemo.gif";
import studentDemo from "../assets/gifs/studentProjectDemo.gif";
import portfolioDemo from "../assets/gifs/portfolioDemo.gif";

class Project extends React.Component {
  render() {
    return (
      <section id="two" className="bubble sectionProjects">
        <h1>Projects</h1>
        <ScrollAnimation
          animateIn="animate__fadeIn"
          offset={150}
          animateOnce={true}
          // duration={0.6}
        >
          <div className="combined">
            <div className="small">
              <article className="project">
                <div className="project-box">
                  <img
                    src={sephardicCenterShowCase}
                    width="1500"
                    height="1368"
                    alt=""
                  />
                </div>
                <div className="project-content">
                  <p className="project-tags">
                    <img
                      src={
                        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                      }
                    />
                    <img
                      src={
                        "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                      }
                    />
                    <img
                      src={
                        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                      }
                    />
                    <img
                      src={
                        "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                      }
                    />
                  </p>

                  <h1 className="project-title">
                    <a href="https://natc02.github.io/sephardicCenter/home">
                      Sephardic Center
                    </a>
                  </h1>

                  <p className="project-metadata">
                    <span className="project-rating">
                      ★★★★★<span></span>
                    </span>
                    <span className="project-votes">(Dr. Jack Levi DDS)</span>
                  </p>

                  <p className="project-desc">
                    A responsive, mobile-first, Single-Page Application built
                    with React and Bootstrap. The application is designed to be
                    a resource for the Sephardic Jewish Center of Forest Hills,
                    New Jersey.
                  </p>

                  <button
                    className="project-save project-sourceCode"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <a href="https://natc02.github.io/sephardicCenter/home">
                      See Live
                    </a>
                  </button>
                </div>
              </article>
            </div>

            <div className="small">
              <article className="project">
                <div className="project-box">
                  <img src={loginDemo} width="1500" height="1368" alt="" />
                </div>
                <div className="project-content">
                  <p className="project-tags">
                    <img
                      src={
                        "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                      }
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
                      }
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black"
                      }
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                      }
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                      }
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"
                      }
                    />
                  </p>

                  <h1 className="project-title">
                    <a href="https://github.com/NatC02/loginRegistrationNode/tree/final/Desktop/ImportantDev/MERN/source">
                      Login and Registration with Handlebars, Express, and
                      Passport
                    </a>
                  </h1>

                  <p className="project-desc">
                    A local project that saves usernames and passwords to login.
                    Mongodb to store usernames and passwords. Mongoose was used
                    to create the database schema. API testing with Postman.
                    Used NPM passport for authentication and bcrypt for
                    encryption.
                  </p>

                  <button
                    className="project-save project-sourceCode"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <a href="https://github.com/NatC02/loginRegistrationNode/tree/final/Desktop/ImportantDev/MERN/source">
                      Source Code
                    </a>
                  </button>
                </div>
              </article>
            </div>

            <div className="small">
              <article className="project">
                <div className="project-box">
                  <img src={studentDemo} width="1500" height="1368" alt="" />
                </div>
                <div className="project-content">
                  <p className="project-tags">
                    <img
                      src={`https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white`}
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                      }
                    />
                  </p>

                  <h1 className="project-title">
                    <a href="https://final-presentation.priscilla11.repl.co/">
                      Web Development Assitant Teacher (Student Website)
                    </a>
                  </h1>

                  <p className="project-desc">
                    Tutored Middle School Students created a website about the
                    significance of wearing masks during the COVID-19 pandemic
                    and the effects in our world. Students were virtually
                    tutored in Web Development fundamentals (HTML5 & CSS3) and
                    encouraged to pursue a career in technology.
                  </p>

                  <button
                    className="project-save project-sourceCode"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <a href="https://final-presentation.priscilla11.repl.co/">
                      See Live
                    </a>
                  </button>
                </div>
              </article>
            </div>

            <div className="small">
              <article className="project">
                <div className="project-box">
                  <img src={portfolioDemo} width="1500" height="1368" alt="" />
                </div>
                <div className="project-content">
                  <p className="project-tags">
                    <img
                      src={`https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white`}
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                      }
                    />
                    <img
                      src={
                        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                      }
                    />
                    <img
                      src={
                        "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
                      }
                    />
                  </p>

                  <h1 className="project-title">
                    <a href="https://github.com/NatC02/portfolio/">
                      Portfolio Website
                    </a>
                  </h1>

                  <p className="project-desc">
                    Built with:
                    <ul>
                      <li>
                        Gatsby
                      </li>
                      &thinsp;
                      <li>
                      Animate CSS animation library
                      </li>
                      &thinsp;
                      <li>
                      CSS Grid & CSS Flexbox
                      </li>
                      &thinsp;
                      <li>
                      Netlify
                      </li>
                    </ul>
                  </p>

                  <button
                    className="project-save project-sourceCode"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <a href="https://github.com/NatC02/">
                      Source Code
                    </a>
                  </button>
                </div>
              </article>
            </div>
          </div>
        </ScrollAnimation>
      </section>
    );
  }
}

export default Project;
