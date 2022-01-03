import React from 'react'
import "../assets/css/main.css"
import computer from "../assets/images/computer.jpg"
import program from "../assets/images/program.jpg"
import graphic from "../assets/images/graphic.jpg"
import project from "../assets/images/projects-4.jpg"

const Project = () => {
    return (
        <section className="section project">
            {/* section title */}
            <div className="project-title">
                <h2>My Works</h2>
                <div className="underline"></div>
                <p className="projects-text">
                   I worked for Enable.World, and now I am developing my own projects with React on front end and Nodejs on Back end. I also spend my time learning new technologies
                   with Html, Css, Javascript, React, Nodejs, Express, MongoDB, Postgresql, Mysql, Git and Github , RestApi, Jwt, figma, MaterialUi and so forth
                </p>
            </div>

            {/* end of section title */}
            <div className="section-center projects-center">
            {/* single project */}
                <a href="projects.html" className="project-1">
                    <article className="project">
                        <img
                            src={computer}
                            alt="single project"
                            className="project-img"
                        />
                        <div className="project-info">
                            <h4>Automation With Javascript and Excel</h4>
                            <p>Enable.World</p>
                        </div>
                    </article>
                </a>
                {/* <!-- end of single project -->
                <!-- single project --> */}
                <a href="projects.html" className="project-2">
                    <article className="project">
                        <img
                            src={program}
                            alt="single project"
                            className="project-img"
                        />
                        <div className="project-info">
                            <h4>Online Market</h4>
                            <p>Alvine.Mulo</p>
                        </div>
                    </article>
                </a>
                {/* <!-- end of single project --><!-- single project --> */}
                <a href="projects.html" className="project-3">
                    <article className="project">
                        <img
                            src={graphic}
                            alt="single project"
                            className="project-img"
                            />
                        <div className="project-info">
                            <h4>RestApi</h4>
                            <p>Alvien.Mulo</p> 
                        </div>
                    </article>
                </a>
                {/* <!-- end of single project --><!-- single project --> */}
                <a href="projects.html" className="project-4">
                    <article className="project">
                        <img
                            src={project}
                            alt="single project"
                            className="project-img"
                        />
                        <div className="project-info">
                            <h4>Backend Ecommerce</h4>
                            <p>Alvine.Mulo</p>
                        </div>
                    </article>
                </a>
                <a href="projects.html" className="project-5">
                    <article className="project">
                        <img
                            src={computer}
                            alt="single project"
                            className="project-img"
                        />
                        <div className="project-info">
                            <h4>Automation With Javascript and Excel</h4>
                            <p>Enable.World</p>
                        </div>
                    </article>
                </a>
                {/* <!-- end of single project --> */}
            </div>
        </section>
    )
}

export default Project
