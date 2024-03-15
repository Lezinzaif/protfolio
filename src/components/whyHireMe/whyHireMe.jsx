import React, { useEffect } from "react"
import styles from "./why.module.css"
import girl from "../../assets/girl.svg"
function WhyHireMe() {
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <div className={styles.image}>
            <img src={girl} alt="girl" />
          </div>
          <div className={styles.content}>
            <h1>
              Why <span>Hire me</span>?
            </h1>
            <p>With years of honed expertise in UI/UX design, I bring a wealth of experience to your project. Expect top-tier solutions that blend innovation, functionality, and user-centric design for unparalleled results.</p>
            <div className={styles.achivemnt}>
              <div>
                <h2>100+</h2>
                <span>Project Completed</span>
              </div>
              <div>
                <h2>50+</h2>
                <span>Satisfied Clients</span>
              </div>
            </div>
            <div className={styles.but}>
              <a href="res">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyHireMe
