import React from "react"
import "../css/Header.css"
import globeImg from '../images/logo.png'

function Header() {
    return (
        <header className="main-header">
            <img src={globeImg} alt="globe image" className="header-logo"/>
            <h2 className="header-title">My travel journal.</h2>
        </header>
    )
}

export default Header