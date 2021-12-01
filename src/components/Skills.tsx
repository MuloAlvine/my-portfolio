import React from 'react'

const Skills = () => {
    return (
        <section className="section skills">
      {/* <!-- section title --> */}
      <div className="section-title">
        <h2>skills</h2>
        <div className="underline"></div>
      </div>
      {/* <!--end of section title --> */}
      <div className="section-center skills-center">
        <article>
          <h3>front end</h3>
          {/* <!-- single skill --> */}
          <div className="skill">
            <p>HTML/CSS</p>
            <div className="skill-container">
              <div className="skill-value"></div>
              <p className="skill-text">
                50%
              </p>
            </div>
          </div>
          {/* <!--end of  single skill -->
          <!-- single skill --> */}
          <div className="skill">
            <p>Javascript</p>
            <div className="skill-container">
              <div className="skill-value value-70"></div>
              <p className="skill-text skill-text-70">
                60%
              </p>
            </div>
          </div>
          {/* <!--end of  single skill -->
          <!-- single skill --> */}
          <div className="skill">
            <p>React</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">
                50%
              </p>
            </div>
          </div>
          {/* <!--end of  single skill --> */}
        </article>
        <article>
          <h3>back end</h3>
          {/* <!-- single skill --> */}
          <div className="skill">
            <p>Node</p>
            <div className="skill-container">
              <div className="skill-value"></div>
              <p className="skill-text">
                50%
              </p>
            </div>
          </div>
          {/* <!--end of  single skill -->
          <!-- single skill --> */}
          <div className="skill">
            <p>JAVA</p>
            <div className="skill-container">
              <div className="skill-value value-70"></div>
              <p className="skill-text skill-text-70">
                50%
              </p>
            </div>
          </div>
          {/* <!--end of  single skill -->
          <!-- single skill --> */}
          <div className="skill">
            <p>Python</p>
            <div className="skill-container">
              <div className="skill-value value-80"></div>
              <p className="skill-text skill-text-80">
                60%
              </p>
            </div>
          </div>
          {/* <!--end of  single skill --> */}
        </article>
      </div>
    </section>
    // <!-- end of skills -->
   
    )
}

export default Skills
