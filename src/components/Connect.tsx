import React from 'react'


const Connect = () =>{
    return (
    <section className="connect">
        <video
          controls
        //   autoplay
          muted
          loop
          className="video-container"
          poster="./images/project-1.jpeg"
        >
         <source src="../assets/videos/video.mp4" type="video/mp4" />
        Sorry, your browser does not support embedded videos
      </video>
      <div className="video-banner">
        {/* <!-- section title --> */}
        <div className="connect-title">
          <h2>Contact Me</h2>
          <div className="underline"></div>
        </div>
        {/* <!--end of section title --> */}
        <p className="video-text">
          Contact me via my phone number
          or email address provided below and on the footer
        </p>
        <a href="contact.html" className="btn">elvismulowayi@gmail.com</a><br/>
        <a href="contact.html" className="btn">0629533613</a>
      </div>
    </section>
    )
}
 
export default Connect
