import React from 'react'
import "../assets/css/main.css"
import tonton from "../assets/images/tonton.jpg"


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
                <h2>Let's Build Something Amazing</h2>
                <h4> Entry Level full stack Developer</h4>
                <h4> (ReactJS/ExpressJS/NodeJS)</h4>
     
                <a href="contact.html" className="btn hero-btn"><h3>Hire Me</h3></a>
            
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
            <img src={tonton} className="hero-photo" alt="elvis mulo" />
        </article>
        </div>
    </header>
    )
}

export default  HeroSection