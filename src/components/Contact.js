import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

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
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          id="contactForm"
          onsubmit="return validate()"
          action="contact.php"
          method="post"
        >
          <input
            class="formInput"
            type="text"
            id="name"
            name="name"
            autocorrect="off"
            placeholder="*Name"
          />
          <input
            class="formInput"
            type="email"
            name="email"
            id="email"
            autocapitalize="off"
            autocorrect="off"
            placeholder="*Email"
          />
          <textarea
            class="formInput"
            name="message"
            id="message"
            placeholder="*Message"
          ></textarea>

          <br />
          <input class="submitForm" type="reset" value="Clear your message" />
          <input class="submitForm" type="submit" value="Send" />
        </form>

        <footer>
          <div class="sm-handle">
            <button>
              <a
                href="https://www.linkedin.com/in/natan-ceballos-66b1a6187"
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

          <p class="copyright">
            Copyright 2021 |
            <a href="https://github.com/NatC02/"> ❤️ Natan Ceballos </a>
            <br />
            *Form Not Working*
          </p>
        </footer>
        </ScrollAnimation>

      </section>
    )
  }
}

export default Contact
