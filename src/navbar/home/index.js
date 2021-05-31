import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import Logo from '../../asset/logo.png'

const Header = () => {
    return (
        <div className="home-navbar">
            <div className="logo-fontawsome">
                <img className="logo" src={Logo} />
                <ul className="navbar-list">
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-facebook-square"></i></li>
                    <li><i class="fab fa-linkedin"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                </ul>
            </div>
            <div className="logo-fontawsome">
                <ul className="navbar-list">
                    <li><Link className="navbar-link" to="/incubator">Home</Link></li>
                    <li><Link className="navbar-link" to="/mangoswap">Start Up</Link></li>
                    <li><Link className="navbar-link" to="/learn">Loan</Link></li>
                </ul>
            </div>
            <div class="searchBox">
                <input className="searchInput"type="text" name="" placeholder="Search"/>
                <button className="searchButton" href="#">
                    <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}

export default Header






