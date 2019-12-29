import React from 'react'
import mice from '../assets/images/mice.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const One = props => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${mice})` }}
  >
    <span className="image fit main">
      <img src={mice} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2>Mice</h2>
                <p>
                  Nascetur eu nibh vestibulum amet gravida nascetur praesent
                </p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                Feugiat accumsan lorem eu ac lorem amet sed accumsan donec.
                Blandit orci porttitor semper. Arcu phasellus tortor enim mi
                nisi praesent dolor adipiscing. Integer mi sed nascetur cep
                aliquet augue varius tempus lobortis porttitor accumsan
                consequat adipiscing lorem dolor.
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                Morbi enim nascetur et placerat lorem sed iaculis neque ante
                adipiscing adipiscing metus massa. Blandit orci porttitor
                semper. Arcu phasellus tortor enim mi mi nisi praesent
                adipiscing. Integer mi sed nascetur cep aliquet augue varius
                tempus. Feugiat lorem ipsum dolor nullam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
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
export default One
