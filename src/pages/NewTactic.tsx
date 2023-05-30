import  { useState } from 'react'
import { scriptNewTactic } from '../data/textData'
import StoryText from '../components/StoryText'
import { ReactComponent as ArrowButton } from '../images/svgs/lni_lni-chevron-right.svg'

const NewTactic = () => {
  

  
  let scriptLength:number = scriptNewTactic.length;
const [temp, setTemp]= useState ([scriptNewTactic[0]]);
const [disabled, setDisabled]= useState (false);
const [currentScriptIndex, setCurrentScriptIndex] = useState(1)



function helper(): void {

    if(scriptLength===currentScriptIndex){
    setDisabled(true);
    }
  if(currentScriptIndex<scriptLength){
    setDisabled(false);
  setCurrentScriptIndex(currentScriptIndex+1);
  setTemp((temp)=>[...temp, scriptNewTactic[currentScriptIndex]]);
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

export default NewTactic