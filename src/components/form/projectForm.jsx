import React, { useEffect } from "react"
import Page from "../page"
import styles from "./projectform.module.css"
function PorjectForm() {
  return (
    <>
      <Page>
        <div className={styles.outer} id="connect">
          <h1>
            Have an Awesome Project Idea? <span>Let’s Discuss</span>
          </h1>
          <form>
            <div className={styles.text_area}>
              <textarea type="text" placeholder="Enquery" />
            </div>
            <div className={styles.submit}>
              <i className="fa-solid fa-envelope"></i>
              <input type="text" placeholder="Enter Email Address" />
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </Page>
      <div className={styles.banner}>
        <marquee>
          <i className="fa-solid fa-star"></i>
          UX Design
          <i className="fa-solid fa-star"></i>
          App Design
          <i className="fa-solid fa-star"></i>
          Dashboard
          <i className="fa-solid fa-star"></i>
          Wireframe
          <i className="fa-solid fa-star"></i>
          User Research
        </marquee>
      </div>
    </>
  )
}

export default PorjectForm
