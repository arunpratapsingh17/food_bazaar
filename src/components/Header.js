import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="header">
        <nav>
          <ul className="header_list">
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </div>
            {/* <div>
              <li>
                <CartLink />
              </li>
            </div> */}
          </ul>
        </nav>
      </header>
    )
}

export default Header
