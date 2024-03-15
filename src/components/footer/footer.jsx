import React, { useContext, useEffect } from "react"
import styles from "./footer.module.css"
import { Link } from "react-scroll"
import DispachContext from "../../DispachContext"
function Footer() {
  const appDispach = useContext(DispachContext)
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.headder}>
            <h1>Lets Connect there</h1>
            <a href="">Hire me</a>
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <p>"Let's bring your vision to life! Connect with me to discuss your project needs and embark on a journey of collaborative design excellence. From initial concept to final delivery, let's work together to create impactful and memorable user experiences that elevate your brand."</p>
              <div>
                <a href="">
                  <i className="fa-brands fa-square-facebook"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-youtube"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className={styles.right}>
              <div>
                <h4>Navigation</h4>
                <ul>
                  <li>
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                      onClick={() => {
                        appDispach({ type: "current", data: "home" })
                      }}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="service"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      onClick={() => {
                        appDispach({ type: "current", data: "service" })
                      }}
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <a href="">Resume</a>
                  </li>
                  <li>
                    <Link
                      to="exp"
                      spy={true}
                      smooth={true}
                      offset={-50}
                      duration={500}
                      onClick={() => {
                        appDispach({ type: "current", data: "exp" })
                      }}
                    >
                      Project
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="connect"
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      onClick={() => {
                        appDispach({ type: "current", data: "connect" })
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4>Contact</h4>
                <ul>
                  <li>+91 9633179406</li>
                  <li>lezinhere@gmail.com</li>
                  <li>lezinhere.com</li>
                </ul>
              </div>
              <form>
                <h4>Get the latest information</h4>
                <div>
                  <input type="text" placeholder="Email Address" />
                  <button>
                    <i className="fa-solid fa-circle-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
