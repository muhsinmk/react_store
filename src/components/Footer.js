import React from 'react'
import {useAppContext} from "../hooks/useAppContext"
function Footer() {

  const {state:{siteName}} = useAppContext()
  return (
    <div className="appFooter">
        <p> {siteName} developed with ReactJS  </p>
    </div>
  )
}

export default Footer