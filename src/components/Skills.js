import React from 'react'

import HTML5 from '../assets/icons/HTML5.svg'
import CSS3 from '../assets/icons/CSS3.svg'
import Bootstrap from '../assets/icons/Bootstrap.svg'
import JS from '../assets/icons/JavaScript.svg'
import ReactJS from '../assets/icons/React.svg'

import VSCode from '../assets/icons/VisualStudio.svg'
import Git from '../assets/icons/Git.svg'
import Webpack from '../assets/icons/Webpack.svg'
import Jira from '../assets/icons/JiraSoftware.svg'

import NodeJS from '../assets/icons/Node.svg'
import Express from '../assets/icons/Expressjs.svg'
import RESTfulAPI from '../assets/icons/API.svg'

class Skills extends React.Component {
  render() {
    return (
      <section id="one" className="sectionSkills ">
        <div class="skillsWave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <h1>
          Skills
        </h1>

        <section class="section skills" id="skills">
          <div class="section-center skills-center">

            <article>
              <h3>Front End</h3>
              <div class="skill-box-2 flexCenter">
                <div>
                  <img
                    class="skill-icn"
                    src={HTML5}
                    loading="lazy"
                    alt="HTML5"
                  />
                  <p class="skill-name">HTML5</p>
                </div>

                <div>
                  <img class="skill-icn" src={CSS3} loading="lazy" alt="CSS3" />
                  <p class="skill-name">CSS3</p>
                </div>

                <div>
                  <img
                    class="skill-icn"
                    src={Bootstrap}
                    loading="lazy"
                    alt="Bootstrap"
                  />
                  <p class="skill-name">Bootsrap</p>
                </div>

                <div>
                  <img
                    class="skill-icn"
                    src={JS}
                    loading="lazy"
                    alt="javascript"
                  />
                  <p class="skill-name">Javascript</p>
                </div>

                <div>
                  <img
                    class="skill-icn"
                    src={ReactJS}
                    loading="lazy"
                    alt="React"
                  />
                  <p class="skill-name">React</p>
                </div>
              </div>
            </article>
            
            <article>
              <h3>Tools</h3>
              <div class="skill-box-2">
                <div>
                  <img
                    class="skill-icn"
                    src={VSCode}
                    loading="lazy"
                    alt="vscode"
                  />
                  <p class="skill-name">VS Code</p>
                </div>

                <div>
                  <img class="skill-icn" src={Git} loading="lazy" alt="Git" />
                  <p class="skill-name">Git</p>
                </div>

                <div>
                  <img
                    class="skill-icn"
                    src={Webpack}
                    loading="lazy"
                    alt="Webpack"
                  />
                  <p class="skill-name">Webpack</p>
                </div>

                <div>
                  <img class="skill-icn" src={Jira} loading="lazy" alt="Jira" />
                  <p class="skill-name">Jira</p>
                </div>
              </div>
            </article>

            <article>
              <h3>Back End</h3>
              <div class="skill-box-1">
                <div>
                  <img
                    class="skill-icn"
                    src={NodeJS}
                    loading="lazy"
                    alt="Node"
                  />
                  <p class="skill-name">Node</p>
                </div>
                <div>
                  <img
                    class="skill-icn"
                    src={Express}
                    loading="lazy"
                    alt="Express"
                  />
                  <p class="skill-name">Express</p>
                </div>
                <div>
                  <img
                    class="skill-icn"
                    src={RESTfulAPI}
                    loading="lazy"
                    alt="RESTfulAPI"
                  />
                  <p class="skill-name">RESTfulAPI</p>
                </div>
              </div>
            </article>






          </div>
        </section>
      </section>
    )
  }
}

export default Skills
