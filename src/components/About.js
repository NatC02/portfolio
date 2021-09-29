import React from 'react'

import pdfResume from "../assets/document/DraftNewJerseyCityResume.pdf"

class About extends React.Component {
  render() {
    return (
      <section id="four" className="tan sectionAbout">
        <h1>About</h1>

        <div class="wave">
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

        {/* <section id="section-about" class="about-section"> */}
        <div class="who-am-i">
          <div class="all-who">
            <div class="div-para">
              <p data-aos="zoom-in-down">
                As a Freshman student of New Jersey City University studying
                Computer Science, I'm intrigued by Fullstack Web Development.
                I'm a Junior Front End Software Engineer at
                <a
                  href="https://bhoroshabangladesh.mystrikingly.com/"
                >
                  <span> Bhorosha Nonprofit Organization</span>
                </a>
                , where I'm working on an initiative to help +1000
                underrepresented women in Dhaka, Bangladesh get jobs in the
                informal and formal sectors. This aim is aligned with the United
                Nations' 17 Sustainable Development Goals . 1: No Poverty, 8:
                Decent Work and Economic Growth, and 10: Reduced Inequalities.
              </p>
            </div>
            <button data-aos="zoom-in-down">
              
            <a href={pdfResume}>
              Download CV</a>
              </button>
          </div>
        </div>
        {/* </section> */}
      </section>
    )
  }
}

export default About
