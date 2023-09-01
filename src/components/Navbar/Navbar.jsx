import React from 'react'

import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
        <div className="logo">
            <a href="/">Clevergenes</a>
        </div>
        <ul className="nav-links">
            <li style={{listStyle:"none"}}><a href="/">Blog Home</a></li>
            <li style={{listStyle:"none"}}><a href="/createblog">Add Blog</a></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar