import React, { useEffect } from "react"
import styles from "./Service.module.css"

function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_head}>
          <div>{props.name}</div>
          <a href={props.link}>Click here</a>
        </div>
        <div className={styles.image}>
          <img src={props.img} alt={props.name} />
        </div>
      </div>
    </>
  )
}

export default Card
