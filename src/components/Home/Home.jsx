import React, { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import JSConfetti from 'js-confetti'

const Home = () => {
  const [isShowEmoji,setIsShowEmoji]=useState(true);
  const[isIndex,setIsIndex]=useState(0);
  const handleResume = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume.pdf" ;
    link.target = "_blank";
    link.click();
  };



  const handleCelebrate = () => {
    const jsConfetti= new JSConfetti();

    const emojisets=
    [
      ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
      ['🎉', '🎊', '🪅', '🎈', '🍾', '🥳'], 
      ['🔥', '⭐', '🌟', '🌍', '🌙', '☀️'], 
      ['❤️', '💛', '💚', '💙', '💜', '🖤'], 
      ['😊', '😂', '🥰', '😎', '🤩', '😢'],
    ]
    const confettiColorsSets = [
      ['#FF5733', '#FFBD33', '#33FF57', '#33FFF5', '#9D33FF'],
      ['#FFD1DC', '#D5AAFF', '#A0E7E5', '#FFABAB', '#FFC3A0'],
      ['#FF00FF', '#00FFFF', '#FFFF00', '#FF4500', '#00FF00'],
      ['#2E3192', '#00CFFF', '#FFFFFF', '#FF69B4', '#000000'],
      ['#FFC700', '#FF0000', '#2E3192', '#66FF66', '#00FFFF']
    ];
    const orderedEmoji=emojisets[isIndex];
    const orderedColors=confettiColorsSets[isIndex]
    if(isShowEmoji){
      jsConfetti.addConfetti({
        emojis:orderedEmoji,
        confettiNumber:Math.floor(Math.random()*10)+20,
      })
    }
    else{
      jsConfetti.addConfetti({
        confettiColors: orderedColors,
        confettiNumber:Math.floor(Math.random()*100)+500  
      })
    }
    setIsShowEmoji(!isShowEmoji);
    setIsIndex((isIndex+1)%5);
    
  };

  return (
    <div className="main-content" id="home">
      <div className="sub-content">
        <h1 className="fullname">
          Hi,It's <span>Mohamed Fahad Khan</span>
        </h1>
        <h1 className="skills">
          I'm a <span></span>
        </h1>
        <p>
          I an skilled front-end developer with strong expertise in javascript
          and React,complemented by intermediate understanding of backend
          development. My experience spans multiple projects ,allowing me to
          hone my skills and deliver dynamic, responsive web application
        </p>
        <div className="link-btn">
          <a href="https://www.facebook.com/profile.php?id=100007066690387">
            <FontAwesomeIcon icon={faFacebookF} className="icon-a" />
          </a>
          <a href="https://www.instagram.com/_mohd_fahad_07/">
            <FontAwesomeIcon icon={faInstagram} className="icon-a" />
          </a>
          <a href="https://www.linkedin.com/in/mohamedfahadkhan/">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon-a" />
          </a>
          <a href="https://github.com/mfk0708">
            <FontAwesomeIcon icon={faGithub} className="icon-a" />
          </a>
        </div>
        <div className="main-btn">
          <button className="button1" onClick={handleResume}>
            Resume
          </button>
       
          <button className="button2" onClick={handleCelebrate}>Celebrate</button>
        </div>
      </div>
      <img src="/assets/img1.png" className="my-img" />
    </div>
  );
};

export default Home;
