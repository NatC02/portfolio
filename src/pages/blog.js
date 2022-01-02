import React, { useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import githubProfilePic from "../assets/githubProfile.png"

import LinkedIn from "../assets/icons/LinkedIn.svg"
import GitHub from "../assets/icons/GitHub.svg"

import "../style.css"

const BlogIndex = ({ data, location }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <>
      <section id="Nav" className="bg-dark">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-around">
            <div className="justify-around flex ">
              <a
                to="/"
                aria-label="Natan Ceballos"
                title="Natan Ceballos"
                className="inline-flex items-center pr-3.5"
              >
                <img className="w-16 h-16 rounded-lg" src={githubProfilePic} />
              </a>

              <button className="pr-2">
                <a
                  href="https://www.linkedin.com/in/natan-ceballos-66b1a6187/"
                  class="sm-button"
                >
                  <img srcSet={LinkedIn} className="w-10 h-10" />
                </a>
              </button>
              <button>
                <a href="https://github.com/NatC02/" class="sm-button">
                  <img srcSet={GitHub} className="w-10 h-10" />
                </a>
              </button>
            </div>

            <div className="items-center hidden space-x-8 lg:flex">
            <Link
                  to="/"
                  className="py-4 px-8 bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                  aria-label="Github Profile"
                  title="Github Profile"
                >
                  <button>Portfolio</button>
                </Link>
              
                <a
                  href="https://github.com/NatC02"
                  className="py-4 px-8 bg-lime-600 hover:bg-lime-700 focus:ring-lime-500 focus:ring-offset-lime-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                  aria-label="Github Profile"
                  title="Github Profile"
                >
                  <button>GitHub</button>
                </a>
            </div>
            
            <div className="lg:hidden">
              <button
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
              </button>
              {isMenuOpen && (
                <div className="z-10 absolute top-0 left-0 w-full">
                  <div className="p-5 bg-dark rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex justify-around">
                        <a
                          href="https://github.com/NatC02"
                          aria-label="Natan Ceballos"
                          title="Natan Ceballos"
                          className="inline-flex items-center pr-2.5"
                        >
                          <img
                            className="w-16 h-16 rounded-lg"
                            src={githubProfilePic}
                          />
                        </a>
                        <button className="pr-2">
                          <a
                            href="https://www.linkedin.com/in/natan-ceballos-66b1a6187/"
                            class="sm-button"
                          >
                            <img srcSet={LinkedIn} className="w-10 h-10" />
                          </a>
                        </button>
                        <button>
                          <a
                            href="https://github.com/NatC02/"
                            class="sm-button"
                          >
                            <img srcSet={GitHub} className="w-10 h-10" />
                          </a>
                        </button>
                      </div>
                      <div>
                        <button
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
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            to="/"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-lime-400 hover:bg-lime-700 focus:shadow-outline focus:outline-none"
                            aria-label="Blog"
                            title="Blog"
                          >
                            My Portfolio
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://github.com/NatC02"
                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-lime-400 hover:bg-lime-700 focus:shadow-outline focus:outline-none"
                            aria-label="Blog"
                            title="Blog"
                          >
                            My Github
                          </a>
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

      <Layout
        location={location}
        //   title={siteTitle}
      >
        {/* <Seo title="Blog" /> */}
        {/* <Bio /> */}
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </Layout>
    </>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
