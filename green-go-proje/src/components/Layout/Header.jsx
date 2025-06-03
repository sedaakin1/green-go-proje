import React from 'react'
import { Link } from 'react-router-dom'

import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Green&Go</div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/bookings">My Bookings</Link>
      </nav>

      <div className="auth-buttons">
        <Link to="/login" className="btn">Giriş Yap</Link>
        <Link to="/register" className="btn btn-outline">Kayıt Ol</Link>
      </div>
    </header>
  )
}

export default Header