import React, { useState } from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby-link"

import scrollTo from "gatsby-plugin-smoothscroll"
import { useInView } from "react-intersection-observer"

import githubProfilePic from "../assets/githubProfile.png"

import HTML5 from "../assets/icons/HTML5.svg"
import CSS3 from "../assets/icons/CSS3.svg"
// import Bootstrap from '../assets/icons/Bootstrap.svg'
import Handlebars from "../assets/icons/Handlebars.svg"
import Javascript from "../assets/icons/JavaScript.svg"
import Gatsby from "../assets/icons/Gatsby.svg"
import ReactJS from "../assets/icons/React.svg"

import Git from "../assets/icons/Git.svg"
import DigitalOcean from "../assets/icons/DigitalOcean.svg"
import Postman from "../assets/icons/Postman.svg"
import Netlify from "../assets/icons/Netlify.svg"
import Webpack from "../assets/icons/Webpack.svg"
import Jira from "../assets/icons/JiraSoftware.svg"

import NodeJS from "../assets/icons/Node.svg"
import Express from "../assets/icons/Expressjs.svg"
import RESTfulAPI from "../assets/icons/API.svg"
import MongoDB from "../assets/icons/MongoDB.svg"

import sephardicCenterShowCase from "../assets/gifs/sephardicCenterShowcase.gif"
import loginDemo from "../assets/gifs/loginProjectDemo.gif"
import studentDemo from "../assets/gifs/studentProjectDemo.gif"
import portfolioDemo from "../assets/gifs/portfolioDemo.gif"
import bhoroshaTempDemo from "../assets/gifs/bhoroshaTempDemo.gif"

import pdfResume from "../assets/document/Resume.pdf"

import LinkedIn from "../assets/icons/LinkedIn.svg"
import GitHub from "../assets/icons/GitHub.svg"

// import "animate.css"
import "../index.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Home() {
  // Trigger animation when element is in viewport
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: `0px 0px`,
    threshold: 0,
  })

  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <section id="Nav" className="bg-blue">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-around">
            <a
              href="https://github.com/NatC02"
              aria-label="Natan Ceballos"
              title="Natan Ceballos"
              className="inline-flex items-center"
            >
              <img className="w-16 h-16 rounded-lg" src={githubProfilePic} />
              <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                Portfolio
              </span>
            </a>

            <div className="items-center hidden space-x-8 lg:flex">
              <span
                aria-label="Skills Section"
                title="Skills Section"
                className="py-2 px-4  bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer"
                onClick={() => scrollTo("#Skills")}
              >
                Skills
              </span>

              <span
                aria-label="Projects Section"
                title="Projects Section"
                className="py-2 px-4  bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer"
                onClick={() => scrollTo("#Projects")}
              >
                Projects
              </span>

              <span
                aria-label="About Section"
                title="About Section"
                className="py-2 px-4  bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer"
                onClick={() => scrollTo("#About")}
              >
                About
              </span>

              <span
                aria-label="Contact Section"
                title="Contact Section"
                className="py-2 px-4 bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer"
                onClick={() => scrollTo("#Contact")}
              >
                Contact
              </span>

              <Link
                to="/blog"
                className="py-2 px-4 bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer"
                aria-label="My Blog!"
                title="My Blog!"
              >
                <span>Blog</span>
              </Link>
            </div>

            <div className="lg:hidden">
              <span
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </span>
              {isMenuOpen && (
                <div className="z-10 absolute top-0 left-0 w-full">
                  <div className="p-5 bg-blue rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <a
                          href="https://github.com/NatC02"
                          aria-label="Natan Ceballos"
                          title="Natan Ceballos"
                          className="inline-flex items-center"
                        >
                          <img
                            className="w-16 h-16 rounded-lg"
                            src={githubProfilePic}
                          />
                          <span className="ml-2 text-xl font-bold tracking-wide text-white-800 uppercase">
                            Menu
                          </span>
                        </a>
                      </div>
                      <div>
                        <span
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-white-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <span
                            aria-label="Skills"
                            title="Skills"
                            className="font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            onClick={() => scrollTo("#Skills")}
                          >
                            Skills
                          </span>
                        </li>
                        <li>
                          <span
                            aria-label="projects"
                            title="Projects"
                            className="font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            onClick={() => scrollTo("#Projects")}
                          >
                            Projects
                          </span>
                        </li>
                        <li>
                          <span
                            aria-label="About"
                            title="About"
                            className="font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            onClick={() => scrollTo("#About")}
                          >
                            About
                          </span>
                        </li>
                        <li>
                          <span
                            aria-label="Contact"
                            title="Contact"
                            className="font-medium tracking-wide text-white-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            onClick={() => scrollTo("#Contact")}
                          >
                            Contact
                          </span>
                        </li>
                        <li>
                          <Link
                            to="/blog"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-lime-400 hover:bg-lime-700 focus:shadow-outline focus:outline-none"
                            aria-label="Blog"
                            title="Blog"
                          >
                            My Blog
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

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
       * Header Section
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

      <section className="bg-blue sectionHeader body-font">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <span className="sm:text-4xl text-3xl font-bold title-font mb-4">
              My name is, Natan Ceballos
            </span>
            <span className="lg:w-2/3 mx-auto sm:text-3xl text-2xl font-bold title-font leading-relaxed">
              and I'm a fullstack developer.{" "}
            </span>
          </div>
        </div>
      </section>

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
       * Skills Section
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

      <div id="Skills" className="sectionSkills">
        <div className="skillsWave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full">
              <span className="sm:text-4xl text-3xl font-bold title-font mb-12 text-white">
                Skills
              </span>
            </div>

            <div className="flex flex-col text-center w-full mb-10">
              <span className="sm:text-2xl text-xl font-medium title-font mb-4 text-white">
                Backend
              </span>
              <hr />
            </div>

            <div className="flex flex-wrap -m-2">
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={Javascript}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      Javascript
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={ReactJS}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      React
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={Gatsby}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      Gatsby
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={Handlebars}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      Handlebars
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={HTML5}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      HTML5
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={CSS3}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      CSS3
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <span className="sm:text-2xl text-xl font-medium title-font mb-4 text-white">
                Tools
              </span>
              <hr />
            </div>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={Git}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      Git
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={Postman}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      Postman
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={Jira}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      Jira
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={Webpack}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      Webpack
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={Netlify}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      Netlify
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={DigitalOcean}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      Digital Ocean
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <span className="sm:text-2xl text-xl font-medium title-font mb-4 text-white">
                Backend
              </span>
              <hr />
            </div>
            <div className="flex flex-wrap justify-center -m-2">
              <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={NodeJS}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      Node
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={RESTfulAPI}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      RESTful API
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={MongoDB}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      MongoDB
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center border-gray-400 border p-2 rounded-lg">
                  <img
                    alt="team"
                    className="skill-icn"
                    src={Express}
                    loading="lazy"
                  />
                  <div className="flex-grow pb-4">
                    <span className="text-white title-font text-lg font-medium">
                      Express
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="skillsBottomCurve">
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
        </section>
      </div>

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
       * Projects Section
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

      <section id="Projects" className="sectionProjects dark">
        <div className="flex flex-col text-center w-full">
          <span className="sm:text-4xl text-3xl font-bold title-font mt-12 text-white">
            Projects
          </span>
        </div>

        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  src={sephardicCenterShowCase}
                  width="1500"
                  height="1368"
                  alt=""
                />
                <div className="p-6">
                  <span className="flex-wrap flex">
                    <img
                      src={
                        "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                      }
                    />
                    <img
                      src={
                        "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                      }
                    />
                    <img
                      src={
                        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                      }
                    />
                    <img
                      src={
                        "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                      }
                    />
                  </span>

                  <span className="title-font justify-start flex text-2xl text-left font-medium text-white my-3">
                    <a href="https://natc02.github.io/sephardicCenter/home">
                      Sephardic Center
                      <br />
                      ★★★★★
                      <br />
                      (Dr. Jack Levi DDS)
                    </a>
                  </span>

                  <span className="text-base leading-relaxed mb-3">
                    A responsive, mobile-first, Single-Page Application built
                    with React and Bootstrap. The application is designed to be
                    a resource for the Sephardic Jewish Center of Forest Hills,
                    New Jersey.
                  </span>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="https://natc02.github.io/sephardicCenter/home"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      See Live
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img src={loginDemo} width="1500" height="1368" alt="" />
                <div className="p-6">
                  <span className="flex-wrap flex">
                    <img
                      src={
                        "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                      }
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
                      }
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black"
                      }
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                      }
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                      }
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"
                      }
                    />
                  </span>

                  <span className="title-font justify-center flex text-2xl text-left font-medium text-white my-3">
                    <a href="https://github.com/NatC02/loginRegistrationNode/tree/final/Desktop/ImportantDev/MERN/source">
                      Login and Registration with Handlebars, Express, and
                      Passport
                    </a>
                  </span>

                  <span className="text-base leading-relaxed mb-3">
                    A local project that saves usernames and passwords to login.
                    Mongodb to store usernames and passwords. Mongoose was used
                    to create the database schema. API testing with Postman.
                    Used NPM passport for authentication and bcrypt for
                    encryption.
                  </span>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="https://github.com/NatC02/loginRegistrationNode/tree/final/Desktop/ImportantDev/MERN/source"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Source Code
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img src={studentDemo} width="1500" height="1368" alt="" />
                <div className="p-6">
                  <span className="flex-wrap flex">
                    <img
                      src={`https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white`}
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                      }
                    />
                  </span>

                  <span className="title-font justify-center flex text-2xl text-left font-medium text-white my-3">
                    <a href="https://final-presentation.priscilla11.repl.co/">
                      Web Development Assitant Teacher (Student Website)
                    </a>
                  </span>

                  <span className="text-base leading-relaxed mb-3">
                    Tutored Middle School Students created a website about the
                    significance of wearing masks during the COVID-19 pandemic
                    and the effects in our world. Students were virtually
                    tutored in Web Development fundamentals (HTML5 & CSS3) and
                    encouraged to pursue a career in technology.
                  </span>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="https://final-presentation.priscilla11.repl.co/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      See Live
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img src={portfolioDemo} width="1500" height="1368" alt="" />
                <div className="p-6">
                  <span className="flex-wrap flex">
                    <img
                      src={`https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white`}
                    />

                    <img
                      src={
                        "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                      }
                    />
                    <img
                      src={
                        "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                      }
                    />
                    <img
                      src={
                        "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white"
                      }
                    />
                  </span>

                  <span className="title-font justify-start flex text-2xl text-left font-medium text-white my-3">
                    <a href="https://github.com/NatC02/portfolio/">
                      Portfolio Website
                    </a>
                  </span>

                  <span className="text-base leading-relaxed mb-3">
                    Built with:
                    <ul>
                      &thinsp;
                      <li>Gatsby</li>
                      &thinsp;
                      <li>Animate CSS animation library</li>
                      &thinsp;
                      <li>CSS Grid & CSS Flexbox</li>
                      &thinsp;
                      <li>Netlify</li>
                    </ul>
                  </span>
                  <div className="flex items-center flex-wrap ">
                    <a
                      href="https://github.com/NatC02/portfolio/"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Source Code
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
         * Current Project
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

        <div className="flex flex-col text-center w-full">
          <span className="sm:text-4xl text-3xl font-bold title-font mb-8 text-white">
            Current Project
          </span>
        </div>

        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img src={bhoroshaTempDemo} width="1500" height="1368" alt="" />
            <div className="p-6">
              <span className="flex-wrap flex">
                <img
                  src={
                    "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                  }
                />
                <img
                  src={
                    "https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                  }
                />
                <img
                  src={
                    "https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                  }
                />
                <img
                  src={
                    "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"
                  }
                />
                <img
                  src={
                    "https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"
                  }
                />
                <img
                  src={
                    "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                  }
                />
                <img
                  src={
                    "https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"
                  }
                />
              </span>

              <span className="title-font justify-start flex text-2xl text-left font-medium text-white my-3">
                <a href="https://bhoroshabangladesh.mystrikingly.com">
                  Bhorosha Nonprofit Organization
                </a>
              </span>

              <span className="text-base leading-relaxed mb-3">
                Mission & Stats:
                <ul>
                  <li>
                    Bhorosha aims to provide an alternative job sourcing
                    platform to connect female workers to their potential
                    employers, simultaneously boosting economic growth.
                    #desherbhorosha
                  </li>
                  &thinsp;
                  <li>Empower women by securing livelihoods.</li>
                  &thinsp;
                  <li>
                    Female participation in Bangladesh’s labour force has
                    increased to 36.3% in 2017 from 33.2% in 2016 (ILO).
                    However, majority of the female workers in the informal
                    sector are trapped as low-wage workers who barely manage to
                    lift themselves above the poverty line.
                  </li>
                  &thinsp;
                  <li>
                    On top of that, the COVID-19 pandemic has put a severe
                    strain on these already vulnerable group of people, leaving
                    them with little or almost no source of income.
                  </li>
                </ul>
              </span>
              <div className="flex items-center flex-wrap ">
                <a
                  href="https://bhoroshabangladesh.mystrikingly.com"
                  className="text-indigo-500 text-base inline-flex items-center md:mb-2 lg:mb-0"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
       * About Section
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

      <section id="About" className="tan sectionAbout">
        <span
          style={{ color: "#68534D" }}
          className="mb-4  font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none"
        >
          About
        </span>
        <div className="wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div className="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-screen-sm sm:text-center sm:mx-auto">
            <span className="text-base text-center text-gray-700 md:text-lg sm:px-4">
              As a Freshman student of New Jersey City University studying
              Computer Science, I'm intrigued by Fullstack Web Development. I'm
              a Front End Software Engineer at{" "}
              <a
                className="underline"
                href="https://bhoroshabangladesh.mystrikingly.com/"
              >
                <span>Bhorosha Nonprofit Organization</span>
              </a>
              , where I'm volunteering my energy on an initiative to help +1000
              underrepresented women in Dhaka, Bangladesh get jobs in the
              informal and formal sectors. This aim is aligned with the United
              Nations' 17 Sustainable Development Goals. 1: No Poverty, 8:
              Decent Work and Economic Growth, and 10: Reduced Inequalities.
            </span>
            <div className="pt-16 justify-center flex ">
              <a href={pdfResume}>
                <span
                  className="
                  flex-shrink-0 text-white bg-lime-600 border-0 py-2 px-8 focus:outline-none hover:bg-lime-700 rounded text-lg mt-10 sm:mt-0"
                >
                  <span>Resume</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="spacer layer1"></div>

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
       * Contact Section
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

      <section className="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <div className="flex flex-col justify-center">
          <span className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
            Get in touch
          </span>
          <br />
          <span className="mt-3 text-center text-gray-600 dark:text-gray-400">
            Feel free to reach out to me!
          </span>
        </div>

        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="bg-transparent"
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <span hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </span>
          <div className="mt-6 ">
            <div className="items-center -mx-2 md:flex">
              <div className="w-full mx-2">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  Name
                </label>

                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="text"
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full mx-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                  E-mail
                </label>

                <input
                  className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  type="email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Message
              </label>

              <textarea
                className="block w-full h-40 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="message"
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-center mt-6">
              <span className="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Send Message
              </span>
            </div>
          </div>
        </form>
      </section>

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
       * Footer Section
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

      <div className="dark:bg-coolGray-800 dark:text-coolGray-50">
        <div className="container justify-center flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-coolGray-400">
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              <span className="pr-2">
                <a
                  href="https://www.linkedin.com/in/natan-ceballos-66b1a6187/"
                  className="sm-button"
                >
                  <img srcSet={LinkedIn} className="w-8 h-8" />
                </a>
              </span>
              <span>
                <a href="https://github.com/NatC02/" className="sm-button">
                  <img srcSet={GitHub} className="w-8 h-8" />
                </a>
              </span>
            </div>

            <div className="flex flex-col justify-center text-center">
              <a className="py-4" onClick={() => scrollTo("#Nav")}>
                <i className="text-center"> Go to top</i>
              </a>

              <span className="copyright">
                Copyright 2022 |
                <a href="https://github.com/NatC02/"> ❤️ Natan Ceballos </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="spacer layer3"></div>
    </>
  )
}
