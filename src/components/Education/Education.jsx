import React from "react";
import "./Education.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faCreativeCommonsNd } from "@fortawesome/free-brands-svg-icons";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const Education = () => {
    const { ref: eduRef, inView: isEduVisible } = useInView({
        triggerOnce:true,
        threshold:0.2,
      });
      const { ref: projectRef, inView: isProjectVisible } = useInView({
        triggerOnce:true,
        threshold:0.2,
      });
    return (
        <div id="education">
          
         <h1 className="main-txt">MY <span className="color-2">JOURNEY</span></h1>
                <div className="education">
                    <div>
                        <h1 className="edu-txt">MY <span className="color-2">EDUCATION</span></h1>
                        <motion.div 
                        className='edu'
                        ref={eduRef}
                        intial={{opacity:0,x:-200}}
                        animate={{opacity:isEduVisible?1:0,x:isEduVisible?0:-200}}
                        transition={{duration:.5}}>
                            <div className="dot">
                                <div className="edu-content">
                                    <div className="row">
                                        <FontAwesomeIcon icon={faCalendar} className="icon1" />
                                        <h3>2019-2020</h3>
                                    </div>

                                    <h1>SSLC</h1>
                                    <p>
                                        I completed my SSLC with a 70.8% score from Nabeesa Ammal
                                        School, demonstrating my commitment to academic growth and
                                        laying a strong foundation for my educational journey.
                                    </p>
                                </div>
                            </div>

                            <div className="dot">
                                <div className="edu-content">
                                    <div className="row">
                                        <FontAwesomeIcon icon={faCalendar} className="icon1" />
                                        <h3>2021-2022</h3>
                                    </div>

                                    <h1>HSC</h1>
                                    <p>
                                        I completed my HSC with a 72% score at Syed Ammal School, with a
                                        focus on Computer Science, which strengthened my analytical and
                                        technical skills, providing a strong basis for my career in
                                        technology.
                                    </p>
                                </div>
                            </div>
                            <div className="dot">
                                <div className="edu-content">
                                    <div className="row">
                                        <FontAwesomeIcon icon={faCalendar} className="icon1" />
                                        <h3>2022-2026</h3>
                                    </div>

                                    <h1>B.TECH IT</h1>
                                    <p>
                                        I am currently a third-year B.Tech student in Information
                                        Technology with a CGPA of 8.06, building expertise in IT
                                        principles and technical skills to advance my career in the
                                        field.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div>
                        <div>
                            <h1 className="edu-txt2">MY <span className="color-2">PROJECT</span></h1>
                            <motion.div 
                            className='project'
                            ref={projectRef}
                            intial={{opacity:0,x:200}}
                            animate={{opacity:isProjectVisible?1:0,x:isProjectVisible?0:200}}
                            transition={{duration:.5}}>
                                <div className="dot1">
                                    <div className="project-content">
                                        <div className="row">
                                            <FontAwesomeIcon icon={faCreativeCommonsNd} className="icon1" />
                                            <h3>2023</h3>
                                        </div>

                                        <h1>AQUACHECK</h1>
                                        <p>
                                            I created AquaCheck, an innovative web and mobile app that
                                            monitors drinking water quality, temperature, and conductivity.
                                            This project leverages technology to provide real-time data,
                                            ensuring safe drinking water
                                        </p>
                                    </div>
                                </div>
                                <div className="dot1">
                                    <div className="project-content">
                                        <div className="row">
                                            <FontAwesomeIcon icon={faCreativeCommonsNd} className="icon1" />
                                            <h3>2024</h3>
                                        </div>

                                        <h1>WILDGUARD</h1>
                                        <p>
                                            I also developed an AI-powered animal repeller project,
                                            utilizing artificial intelligence to detect animals and
                                            implement effective deterrent measures, contributing to safety
                                            and wildlife management.
                                        </p>
                                    </div>
                                </div>
                                <div className="dot1">
                                    <div className="project-content">
                                        <div className="row">
                                            <FontAwesomeIcon icon={faCreativeCommonsNd} className="icon1" />
                                            <h3>2024</h3>
                                        </div>

                                        <h1>CAMPUSHUB</h1>
                                        <p>
                                            "I developed CampusHub, an all-in-one platform for students to
                                            conveniently order from the canteen, reserve library books, and
                                            stay updated with the latest college news, streamlining
                                            essential campus services."
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
       
        </div>
    );
};

export default Education;