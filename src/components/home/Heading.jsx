import React, { useEffect } from "react"
import styles from "./heading.module.css"
function Headding() {
  return (
    <>
      <div className={styles.headding}>
        <span>hello</span>
        <div>
          I’m <span>Lezin</span>,
        </div>
        <div>UI/UX Designer</div>
      </div>
    </>
  )
}

export default Headding
