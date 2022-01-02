import React from "react"
import profilePic from "../assets/githubProfile.png"
// import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div className="flex mb-18">
        <img
          src={profilePic}
          alt={`Natan Ceballos`}
          className="w-16 h-16 rounded-lg"
        />
        <p className="pl-8 w-[310px]">
          Personal blog by <a className="underline decoration-solid underline-offset-auto text-tan" href="https://www.linkedin.com/in/natan-ceballos-66b1a6187/">Natan Ceballos</a>. I&nbsp;explain with
          words and code.
        </p>
      </div>
    )
  }
}

export default Bio
