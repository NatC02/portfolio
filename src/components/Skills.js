import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import HTML5 from '../assets/icons/HTML5.svg'
import CSS3 from '../assets/icons/CSS3.svg'
// import Bootstrap from '../assets/icons/Bootstrap.svg'
import Handlebars from '../assets/icons/Handlebars.svg'
import Javascript from '../assets/icons/JavaScript.svg'
import Gatsby from '../assets/icons/Gatsby.svg'
import ReactJS from '../assets/icons/React.svg'

import Git from '../assets/icons/Git.svg'
import DigitalOcean from '../assets/icons/DigitalOcean.svg'
import Postman from '../assets/icons/Postman.svg'
import Netlify from '../assets/icons/Netlify.svg'
import Webpack from '../assets/icons/Webpack.svg'
import Jira from '../assets/icons/JiraSoftware.svg'

import NodeJS from '../assets/icons/Node.svg'
import Express from '../assets/icons/Expressjs.svg'
import RESTfulAPI from '../assets/icons/API.svg'
import MongoDB from '../assets/icons/Mongodb.svg'

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
        <h1>Skills</h1>
        <div class="containerTech">
          <ScrollAnimation
            animateIn="animate__fadeInLeft"
            offset={75}
            animateOnce={true}
            duration={0.6}
          >
            {/* animate__animated animate__faster animate__fadeInLeft */}
            <div class="groupOne ">
              <div class="gOneTitle">Frontend</div>
              <div class="oone">
                <img
                  className="skill-icn"
                  src={Javascript}
                  loading="lazy"
                  alt="Frontend"
                />
                <p class="skill-name">Javascript</p>
              </div>
              <div class="otwo">
                <img
                  className="skill-icn"
                  src={ReactJS}
                  loading="lazy"
                  alt="Frontend"
                />
                <p class="skill-name">React</p>
              </div>
              <div class="othree">
                <img
                  className="skill-icn"
                  src={Gatsby}
                  loading="lazy"
                  alt="Frontend"
                />
                <p class="skill-name">Gatsby</p>
              </div>
              <div class="ofour">
                <img
                  className="skill-icn"
                  src={Handlebars}
                  loading="lazy"
                  alt="Frontend"
                />
                <p class="skill-name">Handlebars</p>
              </div>
              <div class="ofive">
                <img
                  className="skill-icn"
                  src={HTML5}
                  loading="lazy"
                  alt="Frontend"
                />
                <p class="skill-name">HTML5</p>
              </div>
              <div class="osix">
                <img
                  className="skill-icn"
                  src={CSS3}
                  loading="lazy"
                  alt="Frontend"
                />
                <p class="skill-name">CSS3</p>
              </div>
            </div>
          </ScrollAnimation>

          {/*
           *
           *
           *
           *
           *
           *
           *
           *
           *
           */}

          <ScrollAnimation
         animateIn="animate__fadeInLeft"
         offset={75}
         animateOnce={true}
         duration={0.6}
          >
            <div class="groupTwo">
              <div class="gTwoTitle">Tools</div>
              <div class="ooone">
                <img
                  className="skill-icn"
                  src={Git}
                  loading="lazy"
                  alt="Tools"
                />
                <p class="skill-name">Git</p>
              </div>
              <div class="ootwo">
                <img
                  className="skill-icn"
                  src={Postman}
                  loading="lazy"
                  alt="Tools"
                />
                <p class="skill-name">Postman</p>
              </div>
              <div class="oothree">
                <img
                  className="skill-icn"
                  src={Jira}
                  loading="lazy"
                  alt="Tools"
                />
                <p class="skill-name">Jira</p>
              </div>
              <div class="oofour">
                <img
                  className="skill-icn"
                  src={Webpack}
                  loading="lazy"
                  alt="Tools"
                />
                <p class="skill-name">Webpack</p>
              </div>
              <div class="oofive">
                <img
                  className="skill-icn"
                  src={Netlify}
                  loading="lazy"
                  alt="Tools"
                />
                <p class="skill-name">Netlify</p>
              </div>
              <div class="oosix">
                <img
                  className="skill-icn"
                  src={DigitalOcean}
                  loading="lazy"
                  alt="Tools"
                />
                <p class="skill-name">Digital Ocean</p>
              </div>
            </div>
          </ScrollAnimation>

          {/*
           *
           *
           *
           *
           *
           *
           *
           *
           *
           */}

          <ScrollAnimation
           animateIn="animate__fadeInLeft"
           offset={75}
           animateOnce={true}
           duration={0.6}
          >
            <div class="groupThree">
              <div class="gThreeTitle">Backend</div>

              <div class="oooOne">
                <img
                  className="skill-icn"
                  src={NodeJS}
                  loading="lazy"
                  alt="Backend"
                />
                <p class="skill-name">Node</p>
              </div>
              <div class="oooTwo">
                <img
                  className="skill-icn"
                  src={RESTfulAPI}
                  loading="lazy"
                  alt="Backend"
                />
                <p class="skill-name">RESTful API</p>
              </div>
              <div class="oooThree">
                <img
                  className="skill-icn"
                  src={MongoDB}
                  loading="lazy"
                  alt="Backend"
                />
                <p class="skill-name">MongoDb</p>
              </div>
              <div class="oooFour">
                <img
                  className="skill-icn"
                  src={Express}
                  loading="lazy"
                  alt="Backend"
                />
                <p class="skill-name">Express</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    )
  }
}

export default Skills
