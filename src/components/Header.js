import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'

class Header extends React.Component {
  render() {
    return (
      <section className="blue">
        <h1>
          Hi, I'm<strong> Natan Ceballos</strong>.
        </h1>
        <p>I'm a full stack developer.</p>

        <ul>
          <button onClick={() => scrollTo('#one')}>Skills</button>
          <button onClick={() => scrollTo('#two')}>Projects</button>
          <button onClick={() => scrollTo('#three')}>Blog</button>
          <button onClick={() => scrollTo('#four')}>About</button>
          <button onClick={() => scrollTo('#five')}>Contact</button>
          <button onClick={() => scrollTo('#six')}>Socials</button>
        </ul>

        <div className="curve"></div>
      </section>
    )
  }
}

export default Header
