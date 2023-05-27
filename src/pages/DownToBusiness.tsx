import React, { useState } from 'react'
import { scriptDownToBusiness } from '../data/textData'
import StoryText from '../components/StoryText'
import { backgroundAudio } from '../data/backgroundAudioData';
import { ReactComponent as ArrowButton } from '../images/lni_lni-chevron-right.svg'

const DownToBusiness = () => {
  
  
  
  
  let scriptLength:number = scriptDownToBusiness.length;
  const [temp, setTemp]= useState ([scriptDownToBusiness[0]]);
  const [waiting, setWaiting]= useState (false);
  const [disabled, setDisabled]= useState (false);
  const [currentScriptIndex, setCurrentScriptIndex] = useState(1)
 
 
 
  function helper(): void {
 
      if(scriptLength===currentScriptIndex){
      setDisabled(true);
      }
    if(currentScriptIndex<scriptLength){
      setDisabled(false);
    setCurrentScriptIndex(currentScriptIndex+1);
    setTemp((temp)=>[...temp, scriptDownToBusiness[currentScriptIndex]]);
    if(temp.length>4){
    temp.shift();
    }
    setTimeout(() => {
    }, 1000);
    
   
    }
  }

  
   
  return (
      
    <><div className='story_container'>

      {temp.map((item, index) => { return <StoryText key={item.id} item={item} leaving={temp.length > 4 && index === 0} />; })}
      </div>
      
    <ArrowButton className={disabled?'disabled':'none'} onClick={()=>helper()}/>
    
    
    
    
    
    </>
  


  )
}

export default DownToBusiness