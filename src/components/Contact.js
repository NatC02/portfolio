import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import scrollTo from "gatsby-plugin-smoothscroll";

class Contact extends React.Component {
  render() {
    return (
      <section id="five" className="sectionContact">
        <h1>Contact</h1>
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          offset={75}
          animateOnce={true}
          duration={0.7}
        >
          <form
            name="contactform"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contactform" />
            <div hidden>
              <input name="bot-field" />
            </div>
            <div>
              <label>
                Name <br /> <input type="text" name="name" />
              </label>
            </div>
            <div>
              <label htmlFor="email">Email</label> <br />
              <input id="email" type="email" name="email" />
            </div>
            <div>
              <label>
                Message: <br />
                <textarea id="message" name="message"></textarea>
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
          <footer>
            <div class="sm-handle">
              <button>
                <a
                  href="https://www.linkedin.com/in/natan-ceballos-66b1a6187/"
                  class="sm-button"
                >
                  <i class="fab fa-linkedin"> LinkedIn </i>
                </a>
              </button>
              <button>
                <a href="https://github.com/NatC02/" class="sm-button">
                  <i class="fab fa-github"> GitHub</i>
                </a>
              </button>
            </div>

            <button onClick={() => scrollTo("#head")}>
              <a class="sm-button">
                <i class="fab fa-github"> Go to top</i>
              </a>
            </button>

            <p class="copyright">
              Copyright 2021 |
              <a href="https://github.com/NatC02/"> ❤️ Natan Ceballos </a>
            </p>
          </footer>
        </ScrollAnimation>
      </section>
    );
  }
}
export default Contact;
