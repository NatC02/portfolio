import React from 'react'
import "animate.css"

import '../assets/scss/sections.scss'
import '../assets/scss/skills.scss'
import "../assets/scss/card.scss"
import "../assets/scss/about.scss"
import "../assets/scss/contact.scss"
import "../assets/scss/footer.scss"

import Header from './Header'
import Skills from './Skills'
import Projects from './Projects'
// import Blog from './Blog.js'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 'is-loading',
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  render() {
    // const { children } = this.props

    return (
      <div className={`body ${this.state.loading}`}>
        <Header />
        <Skills />
        <Projects />
        {/* <Blog /> */}
        <About />
        <div class="spacer layer1"></div>
        <Contact />
        <div class="spacer layer3"></div>
        {/* <Footer /> */}
      </div>
    )
  }
}

export default Template
