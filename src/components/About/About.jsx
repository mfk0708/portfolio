import React from "react";
import "./About.css";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const { ref: aboutSubRef, inView: isAboutVisible } = useInView({
    triggerOnce:true,
    threshold:0.2,
  });

  const { ref: skillsRef, inView: isSkillsVisible } = useInView({
    triggerOnce:true,
  });
  const { ref: lineRef, inView: isLineVisible } = useInView({
  triggerOnce:true,
  });

  return (
    <div className="about" id="about">
      <h1 className="about-txt">
        ABOUT <span className="color-2">ME</span>
      </h1>
      <div className="about-main">
        <div
          className={`about-sub ${isAboutVisible ? "animate" : ""}`}
          ref={aboutSubRef}
        >
          <img
            src="\assets\my-pic.png"
            alt="img😅"
            className="myImg"
          />
          <p>
            I am a passionate web developer with a strong foundation in frontend development
            and growing expertise in the MERN stack. I specialize in creating interactive,
            user-friendly interfaces using React, Tailwind CSS, and JavaScript. My projects
            include innovative solutions like AquaCheck, which monitors water quality, and
            systems like elephant detection and animal repellers. With an intermediate
            understanding of Node.js, I am expanding my backend development skills to build
            robust and scalable full-stack applications. I am constantly learning and
            adapting to new technologies to deliver high-quality solutions that meet both
            user needs and business goals.
          </p>
        </div>

        <section className="about-skills" ref={skillsRef}>
          <div className="container1">
            <h1 className="heading">TECHNICAL SKILLS</h1>
            <div className="technical-bars"ref={lineRef}>
              <div className='bar'>
                <FontAwesomeIcon icon={faCss3} color="#2965f1" />
                <div className="info">
                  <span>CSS</span>
                </div>
                <div className={`progress-line ${isSkillsVisible ?"animate" : ""}`}>
                  <span className={`css ${isLineVisible ? "animate" : ""} `}></span>
                </div>
              </div>
              <div className='bar'>
                <FontAwesomeIcon icon={faJs} color="#f0db4f" />
                <div className="info">
                  <span>JAVASCRIPT</span>
                </div>
                <div className={`progress-line  ${isSkillsVisible ? "animate" : ""}`}>
                  <span className={`js ${isLineVisible ? "animate" : ""} `}></span>
                </div>
              </div>
              <div className='bar'>
                <FontAwesomeIcon icon={faReact} color="#88dded" />
                <div className="info">
                  <span>REACT</span>
                </div>
                <div className={`progress-line  ${isSkillsVisible ? "animate" : ""}`}>
                  <span className={`css react ${isLineVisible ? "animate" : ""} `}></span>
                </div>
              </div>
              <div className='bar'>
                <FontAwesomeIcon icon={faNodeJs} color="#68a063" />
                <div className="info">
                  <span>NODE + EXPRESS</span>
                </div>
                <div className={`progress-line  ${isSkillsVisible ? "animate" : ""}`}>
                  <span className={`node ${isLineVisible ? "animate" : ""} `}></span>
                </div>
              </div>

               <div className='bar'>
                <FontAwesomeIcon icon={faDatabase} color="#c1bebc"/>  
                <div className="info">
                  <span>MONGO DB</span>
                </div>
                <div className={`progress-line  ${isSkillsVisible ? "animate" : ""}`}>
                  <span className={`mongodb ${isLineVisible ? "animate" : ""} `}></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
