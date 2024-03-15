import React, { useContext, useEffect, useState } from "react"
import styles from "./header.module.css"
import { Link } from "react-scroll"
import DispachContext from "../../DispachContext"
import StateContext from "../../StateContext"

function Header(props) {
  const [menuActive, setMenuActive] = useState(false)
  const [current, setCurrent] = useState(props.current)
  const appDispach = useContext(DispachContext)

  return (
    <>
      <div className={styles.header} id={menuActive ? styles.min_mode : ""}>
        <ul className={styles.icon}>
          <li
            onClick={() => {
              setMenuActive(!menuActive)
            }}
          >
            <i className={menuActive ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
          </li>
        </ul>
        <ul className={styles.list} id={menuActive ? styles.menu_active : ""}>
          <li className={props.current == "home" ? styles.active : ""}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => {
                appDispach({ type: "current", data: "home" })
                setMenuActive(false)
              }}
            >
              Home
            </Link>
          </li>
          <li className={props.current == "service" ? styles.active : ""}>
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => {
                appDispach({ type: "current", data: "service" })
                setMenuActive(false)
              }}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="#resume"
              onClick={() => {
                setMenuActive(false)
              }}
            >
              Resume
            </Link>
          </li>
          <li className={props.current == "exp" ? styles.active : ""}>
            <Link
              to="exp"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={() => {
                appDispach({ type: "current", data: "exp" })
                setMenuActive(false)
              }}
            >
              Project
            </Link>
          </li>
          <li className={props.current == "connect" ? styles.active : ""}>
            <Link
              to="connect"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => {
                appDispach({ type: "current", data: "connect" })
                setMenuActive(false)
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
