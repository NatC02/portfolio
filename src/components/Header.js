import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

class Header extends React.Component {
  render() {
    return (
      <section className="blue sectionHeader">
        <h1 className="animate__animated animate__fast animate__fadeInLeft">
          Hi, I'm {}
          <span className="animate__animated animate__faster animate__fadeInLeftBig">
            Natan Ceballos.
          </span>
        </h1>
        <h2 className="animate__animated animate__fast  animate__fadeInLeft">
          I'm a full stack developer.
        </h2>

        <ul className="animate__animated animate__delay-less-1 animate__fadeIn">
          <button onClick={() => scrollTo('#one')}>
            <h4>Skills</h4>
          </button>
          <button onClick={() => scrollTo('#two')}>
            <h4>Projects</h4>
          </button>
          {/* <button onClick={() => scrollTo('#three')}>
            <h4>Blog</h4>
          </button> */}
          <button onClick={() => scrollTo('#four')}>
            <h4>About</h4>
          </button>
          <button onClick={() => scrollTo('#five')}>
            <h4>Contact</h4>
          </button>
          {/* <button onClick={() => scrollTo('#six')}>
            <h4>Socials</h4>
          </button> */}
        </ul>

        <div className="curve"></div>
      </section>
    )
  }
}

export default Header
