import { Route, BrowserRouter } from "react-router-dom"
import React from "react"
import { MainPage } from './MainPage'


export const App = (props) => {

  return <>
      <BrowserRouter>

        <MainPage {...props} />
      </BrowserRouter>
  </>
}