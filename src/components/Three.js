import React from 'react'
import bed from '../assets/images/bed.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const Three = props => (
  <section
    id="three"
    className="spotlight style3 left inactive"
    style={{ backgroundImage: `url(${bed})` }}
  >
    <span className="image fit main bottom">
      <img src={bed} alt="" />
    </span>
    <Fade left big>
      <div className="content">
        <header>
          <h2>Sleep free from pest worries.</h2>
          <p>Accumsan integer ultricies aliquam vel massa sapien phasellus</p>
        </header>
        <p>
          Input later
        </p>
        <ul className="actions">
          <li>
            <a href="/" className="button">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="four"
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

export default Three
