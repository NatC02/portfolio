import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

class Header extends React.Component {
  render() {
    return (
      <section className="blue sectionHeader">
        <h1 >
          Hi, I'm <strong className="animate__bounceIn" > Natan Ceballos.</strong>
        </h1>
        <h2>
          I'm a <strong className="animate__bounceIn">Frontend </strong>
          Software Engineer.
        </h2>

        <ul className="animate__bounceIn">
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
