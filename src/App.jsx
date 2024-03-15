import { useContext, useState } from "react"

import Header from "./components/headder/Header"
import Home from "./components/home/Home"
import Service from "./components/services/Service"
import Experiance from "./components/wrok_expriance/experiance"
import WhyHireMe from "./components/whyHireMe/whyHireMe"
import PorjectForm from "./components/form/projectForm"
import Footer from "./components/footer/footer"
import { useImmerReducer } from "use-immer"
import DispachContext from "./DispachContext"
import StateContext from "./StateContext"

function App() {
  const initialStage = {
    current: "home",
  }
  function ourReducer(draft, action) {
    switch (action.type) {
      case "current":
        draft.current = action.data
        return
    }
  }
  const [state, dispatch] = useImmerReducer(ourReducer, initialStage)
  return (
    <>
      <StateContext.Provider value={state}>
        <DispachContext.Provider value={dispatch}>
          <Header current={state.current} />
          <Home />
          <Service />
          <Experiance />
          <WhyHireMe />
          <PorjectForm />
          <Footer />
        </DispachContext.Provider>
      </StateContext.Provider>
    </>
  )
}

export default App
