import React from 'react'
import "../assets/css/main.css"
import elvis from "../assets/images/elvis.jpg"

<link rel="stylesheet"
          href="./fontawesome-free-5.12.1-web/css/all.min.css"
/>

const HeroSection = () => {
    return (
        <header className="hero">
        <div className="section-center hero-center">
        <article className="hero-info">
            <div className="underline"></div>
                <h1>i'm elvis</h1>
                <h4> Full Stack Developer </h4>
                <a href="contact.html" className="btn hero-btn">Hire Me</a>
            
            <ul className="social-icons hero-icons">
                <li>
                    <a href="https://www.twitter.com" className="social-icon">
                    <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" className="social-icon">
                    <i className="fab fa-linkedin"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" className="social-icon">
                    <i className="fab fa-squarespace"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" className="social-icon">
                    <i className="fab fa-behance"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" className="social-icon">
                    <i className="fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </article>
        <article className="hero-img">
            <img src={elvis} className="hero-photo" alt="elvis mulo" />
        </article>
        </div>
    </header>
    )
}

export default  HeroSection