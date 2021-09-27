import React from 'react'

import sephardicCenter from '../assets/images/sephardicCenter.png'

class Project extends React.Component {
  render() {
    return (
      <section id="two" className="bubble sectionProjects">
        <h1>Projects</h1>

        <div className="combined">
          <div className="small">
            <article className="project">
              <div className="project-box">
                <img src={sephardicCenter} width="1500" height="1368" alt="" />
              </div>
              <div className="project-content">
                <p className="project-tags">
                  <span className="project-tag">React</span>
                  <span className="project-tag">React-Bootstrap</span>
                  <span className="project-tag">CSS-GRID</span>{' '}
                  <span className="project-tag">sass</span>{' '}
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
                  A responsive, mobile-first, Single-Page Application built with
                  React and Bootstrap. The application is designed to be a
                  resource for the Sephardic Center of Forest Hills, New Jersey.
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
                  <a href="https://github.com/NatC02/sephardicCenter/tree/master">
                    {' '}
                    Source Code{' '}
                  </a>
                </button>
              </div>
            </article>
          </div>

          {/* <div className="small">
            <article className="project">
              <div className="project-box">
                <img
                  src="https://brotokoll.com/wp-content/uploads/2019/12/xPSX_20190928_134709.jpg.pagespeed.ic.qsjw5ilFw5.jpg"
                  width="1500"
                  height="1368"
                  alt=""
                />
              </div>
              <div className="project-content">
                <p className="project-tags">
                  <span className="project-tag">Gluten Free</span>
                  <span className="project-tag">Main dish</span>
                </p>

                <h1 className="project-title">
                  <a href="#">Gluten Free Pan Pizza</a>
                </h1>

                <p className="project-metadata">
                  <span className="project-rating">
                    ★★★★<span>☆</span>
                  </span>
                  <span className="project-votes">(12 votes)</span>
                </p>

                <p className="project-desc">
                  It really is possible to make excellent gluten free pizza at
                  home in your own oven with our projects and techniques.
                </p>

                <button className="project-save" type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#000000"
                  >
                    <path
                      d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
                      fill="currentColor"
                    />
                  </svg>
                  Save
                </button>
              </div>
            </article>
          </div> */}
        </div>
      </section>
    )
  }
}

export default Project
