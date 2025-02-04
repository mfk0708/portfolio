import React from 'react'
import './Contact.css'
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import confetti from 'canvas-confetti';


const Contact = () => {
 

  const{ref:inpRef,inView:fadeOut}=useInView({
    triggerOnce:true,
    threshold:0.3,
  })

  function handleKey(key){
    if(key.key==='Enter'){
      handleSend();
    }

  }
  function handleSend(){
    let input=document.querySelectorAll('input, textarea')
    let hasValue =Array.from(input).some((element)=>element.value.trim()!=='');

    if(hasValue){
      confetti()
    }
    
    input.forEach((element) => {
      element.value = '';
    });
  }
  
    

  return (
    <motion.div 
    id='contact'
    ref={inpRef}
    initial={{opacity:0,y:100}}
    animate={{opacity:fadeOut?1:0,y:fadeOut?0:100}}
    transition={{duration:1}}>
      <h1 className='contact'>CONTACT <span className='color-2'>ME</span></h1>
        <div className='input'>
          <div className='column1'>
            <input type='text' placeholder='Name' className='item1'onKeyDown={handleKey}/>
            <input type='email' placeholder='Email' className='item1'onKeyDown={handleKey}/>
            <input type='number' placeholder='Number' className='item1'onKeyDown={handleKey}/>
            <input type='text' placeholder='Subject' className='item1'onKeyDown={handleKey}/>
            </div>
            <div className="column2">
            <textarea  placeholder='Message'className='item2' onKeyDown={handleKey}/>
            <div className='canvas'>
            <button className='c-btn'   onClick={handleSend} >SEND</button>
            </div>
            </div>   
    </div>
    </motion.div>
  )
}

export default Contact