import React from 'react'
import cnj from '../assets/images/cnj-img.png'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>C&J Pest Management</h2>
        <p>
          Friendly knowledgeable service experts.
      
        </p>
      </header>
      <span className="image">
        <img src={cnj} alt="intro" />
      </span>
    </div>
    <ScrollLink
      to="one"
      className="goto-next"
      activeClass="active"
      smooth={true}
      offset={50}
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
