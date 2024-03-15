import React, { useEffect } from "react"
import styles from "./home.module.css"
import Page from "../page"
import Headding from "./Heading"

import lezin_image from "../../assets/lezin.svg"
function Home() {
  return (
    <>
      <Page >
        <div className={styles.outer } id="home">
          <Headding />
          <div className={styles.continer}>
            <div className={`${styles.quats} + ${styles.child}`}>
              <i className="fa-solid fa-quote-left"></i>
              <p>Lezin’s Exceptional product design ensure our website’s success. Highly Recommended</p>
            </div>
            <span className={`${styles.image} + ${styles.child}`}>
              <img src={lezin_image} alt="lezin" />
            </span>
            <div className={`${styles.exprence} + ${styles.child}`}>
              <div>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <strong>3 Years</strong>
              <div className={styles.right}>Experience</div>
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Home
