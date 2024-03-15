import React, { useEffect } from "react"
import Page from "../page"
import styles from "./experiance.module.css"
import line from "../../assets/icon_dot_line.svg"
function Experiance() {
  return (
    <>
      <Page>
        <div className={styles.outer} id="exp">
          <h1>
            My <span>Work Experience</span>
          </h1>
          <div className={styles.content}>
            <div>
              <img src={line} alt="icon" />
            </div>
            <div>
              <h2>Freelancer</h2>
              <h4>Kerala,India</h4>
              <p>Doing freelance projects from various fields which include graphic designing,ui designing,ux designing,Major project areas are Application user interfaces and Web page designing</p>
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export default Experiance
