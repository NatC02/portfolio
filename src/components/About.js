import React from 'react'

class About extends React.Component {
  render() {
    return (
      <section id="four" className="green sectionAbout">
        <h1>
          About
        </h1>

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
                Computers to me are like what air is to lungs. Without it, I
                would die. That was no joke. Seriously. Before web development,
                I bricked my computer more times than I could count and fixed
                it. The experience was like playing Doctor Frankenstein, trying
                to figure out what pieces go where and how they connect. I took
                apart computers just as much as I put them together. <br />
              </p>
            </div>
            <button data-aos="zoom-in-down" >
              Download CV
            </button>
          </div>
        </div>
        {/* </section> */}
      </section>
    )
  }
}

export default About
