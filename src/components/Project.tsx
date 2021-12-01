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
                <h2>latest works</h2>
                <div className="underline"></div>
                <p className="projects-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
                    repudiandae cupiditate ea facilis incidunt, non sapiente! Debitis
                    magnam, earum assumenda obcaecati cum quaerat facere ratione molestiae
                    dignissimos aliquid blanditiis architecto voluptates delectus
                    voluptate animi nulla! Autem explicabo perspiciatis officia ea.
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
                            <h4>project title</h4>
                            <p>client name</p>
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
                            <h4>project title</h4>
                            <p>client name</p>
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
                            <h4>project title</h4>
                            <p>client name</p>
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
                            <h4>project title</h4>
                            <p>client name</p>
                        </div>
                    </article>
                </a>
                {/* <!-- end of single project --> */}
            </div>
        </section>
    )
}

export default Project
