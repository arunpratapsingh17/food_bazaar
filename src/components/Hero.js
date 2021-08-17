import React from 'react'

const Hero = ({children}) => {
    return (
        <div className="hero">
      <div className="banner">
        <h1 className="hero-title">We provide the best quality</h1>
        <p className="hero-subtitle">at the best rate</p>
        {children}
      </div>
    </div>
    )
}

export default Hero
