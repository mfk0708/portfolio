import React from 'react'
import './Service.css'
import { useInView } from "react-intersection-observer";


      const Service = () => {
          const { ref: serviceRef, inView: isServiceVisible } = useInView({
            triggerOnce:true,
        
          });
  return (
 <div id='services'>
  <h3 className='service-text'>MY <span className='color-2'>SERVICES</span></h3>
    <div className={`main-service ${isServiceVisible?'animate':''}`} ref={serviceRef}>
      <div className='service'>
      <i className="fas fa-code"></i>
        <h3>FRONTEND DEVELOPMENT</h3>
        <p>
        I am a skilled frontend developer with expertise in React and Tailwind CSS, creating responsive, user-friendly applications. With certifications in JavaScript and React, I combine creativity with functionality to build impactful web solutions.</p>
      </div>

      <div className='service'>
      <i className="fa-solid fa-video"></i>
        <h3>VIDEO EDITOR</h3>
        <p>
        As a creative video editor, I specialize in crafting engaging social media content that combines storytelling, striking visuals, and seamless transitions. With a passion for innovation and attention to detail, I create videos that captivate, inspire, and leave lasting impressions.
        </p>
      </div>

      <div className='service'>
      <i className="fa-brands fa-figma"></i>
        <h3>UI&UX DESIGN</h3>
        <p>I am a UI/UX designer skilled in Figma, creating intuitive and visually striking interfaces. My work focuses on user-centric designs through detailed wireframes, interactive prototypes, and polished visuals. I deliver engaging, functional solutions that simplify user experiences.</p>
      </div>
    </div>
  </div>
  )
}

export default Service


