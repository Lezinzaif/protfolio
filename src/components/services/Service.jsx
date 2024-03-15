import React, { useEffect, useId } from "react"
import styles from "./Service.module.css"

import Card from "./Card"
import ui from "../../assets/ui_ux.svg"
import web_desgne from "../../assets/web_desine.svg"
import landing_page from "../../assets/landing_page.svg"
function Service() {
  return (
    <>
      {/* <Page> */}
      <div className={styles.outer} id="service">
        <div className={styles.content}>
          <h1>
            My <span>Services</span>
          </h1>
          <p>Dive into the world of seamless digital interaction with my UI/UX design expertise. From conceptualization to implementation, I design web interfaces and landing pages that captivate and convert. </p>
        </div>
        <div className={styles.cards}>
          <Card name="UI/ UX Design" img={ui} />
          <Card name="Web Design" img={web_desgne} />
          <Card name="Landing Page" img={landing_page} />
        </div>
      </div>
      {/* </Page> */}
    </>
  )
}

export default Service
