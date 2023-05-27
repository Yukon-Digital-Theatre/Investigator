import {  useState } from 'react'

import '../sass/App.scss';
import { scriptMeetTheWeaver } from '../data/textData';
import StoryText from '../components/StoryText';
import styled from 'styled-components';
import { ReactComponent as ArrowButton } from '../images/lni_lni-chevron-right.svg'


const Container = styled.div`
display: flex;
flex-direction: column;
background-color: transparent;
align-items: l;
justify-content:left;
height:100vh;
`;

const MeetTheWeaver = () => {


  let scriptLength:number = scriptMeetTheWeaver.length;
  const [temp, setTemp]= useState ([scriptMeetTheWeaver[0]]);
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
    setTemp((temp)=>[...temp, scriptMeetTheWeaver[currentScriptIndex]]);
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

export default MeetTheWeaver


/* AUDIO STUFF
    (const audio=femaleAudio[0].audio;
    const [audioTime, setAudioTime] = useState(0);
   
    function queryAudioTime() {
        setAudioTime(audio.seek());
    }   
  const intervalref = useRef<number | null>(null);

  
  const startInterval = () => {
    if (intervalref.current !== null) return;
    intervalref.current = window.setInterval(() => {
      queryAudioTime();
    }, 100);
  };

  
  const stopInterval = () => {
    if (intervalref.current) {
      window.clearInterval(intervalref.current);
      intervalref.current = null;
    }
  };

 
  useEffect(() => {
    return () => {
      if (intervalref.current !== null) {
        window.clearInterval(intervalref.current);
      }
    };
  }, []);

useEffect(() => {
    console.log(audioTime);

  return () => {
    
  }
}, [audioTime])




  function helper() {
    if(audio.playing()){
        audio.pause();
        stopInterval();
    }else{
audio.play();
startInterval();

queryAudioTime();


    }
    
  }

  function helper2(){
    
    femaleMeetTheWeaverTextTiming.map((item,index)=>{
      if(item.enterTime<=audioTime && audioTime<=item.exitTime){
        temp.push(item.text)
        
       
        
      }
      
      
  })
  console.log(temp)

 return (
      
         <> 
         
        {helper2()}
    <div onClick={()=>helper()}>play/pause</div>
    <div>----------</div>
    {temp.map((item,index)=>{return<div style={{'animationName':"fade-in",'animationDuration':"2s"}}>{item}</div>})}
    <div>----------</div>
  }
  */