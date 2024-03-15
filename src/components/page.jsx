import React, { useEffect } from "react"
import styles from "./page.module.css"
function Page(props) {
  return <div className={styles.page}>{props.children}</div>
}

export default Page
