import React from 'react'
import "../assets/css/main.css"
import projects from "../assets/images/projects-4.jpg"

const SectionOne = () => {
    return (
        <section className="section-about">
          <div className="section-center about-center">
            <article className="about-img">
              <img
                src={projects}
                className="about-photo"
                alt="about img"
              />
            </article>
          
            <article className="about-info">
            
              <div className="section-title about-title">
                <h2>about </h2>
                <div className="underline"></div>
              </div>
              <div className="about-paragraph">
                  <p>
                      I am an entry level software developer with a strong understanding of backend and frontend technologies. 
                      I have a major in Computer Science and Information System from the University of South Africa 
                      (BSc Science in Computing). I have a good understanding of computer and its related technologies, and I am 
                      especially interested in learning and taking new challenges. I have a positive attitude and I enjoy 
                      working with people and always strive to achieve a goal of excellence in whatever task given to me. 
                      I am a more hands on individual when it comes to tackling a problem while putting in application all 
                      computing knowledges gained. Furthermore, my competences in different languages speak to my 
                      strong feeling and desire for gathering and working with individuals from all sorts of backgrounds. 
                      I am convinced that any king of ambiguous experience, teaches something. Apart from having 
                      attachment for computers, I love spending time reading and learning new things.
                  </p>

              </div>
              
              
              {/* <a href="about.html" class="btn">about me</a> */}
            </article>
          </div>
      </section>
    )
}

export default SectionOne
