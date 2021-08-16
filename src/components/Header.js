import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
          <nav>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
            </ul>
          </nav>
      </header>
    )
}

export default Header
