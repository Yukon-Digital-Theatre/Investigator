import { useDispatch } from 'react-redux';
import { updatePage } from '../reducers/currentPage/currentPageSlice';

const WrapUp = () => {

  const dispatch= useDispatch();



  function helper(): void {
    dispatch(updatePage("WrapUp"));
  }
  function helper2(): void {
    dispatch(updatePage("Credits"));
  }
  
  function helper3(): void {
    dispatch(updatePage("WorldBackground"));
  }
  function helper4(): void {

    Howler.stop();
    dispatch(updatePage("Intro"));
  }
  function helper5(): void {

    window.open('');
  }
  function helper6(): void {

    window.open('');
  }
  function helper7(): void {

    dispatch(updatePage("MoreAboutArtists"));
  }

  return (
    <div className='wrapup_container'>
    <div className='wrapupText outlineText'>How do you feel about your choices?
    As you leave this world, think of the things you are in contact with right now -  clothes, furniture, the device you are using. Do you know who made them? Where the material came from?
    </div><div className='wrapupText outlineText'>
    When you go out into the world, please keep the outcome of this experience as confidential as possible so others may experience it fresh for themselves.
    </div> 
    <div className='wrapupText outlineText'>
    This experience has been provided free of charge, but if you’d like to support the artists and presenters follow this link to donate.
    </div> 
    <div className='WrapUpButton introText'  onClick={()=>helper5()}>Donate</div>
    <div className='wrapupText outlineText'>
    If you wish to share any thoughts with the artistic team click here
    </div>
    <p className='WrapUpButton introText' onClick={()=>helper6()}>Share your thoughts</p>
    <div className='wrapupText outlineText'>
    Explore the links below to read about the artists involved, go back to the history of the world, discover more projects by the Yukon Digital Theatre Collective, or begin again. 
    </div> 
    <div className='wrapupText outlineText'>
    This project has been created with the support of Canada Council for the Arts, @YAC Residency Program, and Yukon Government Department of Tourism and Culture.
    </div> 
    <div className='introText outlineText'>
      Thank you for participating.
    </div>
<div className='flexwrapupcontainer'>
   
    <p className='WrapUpButton introText' onClick={()=>helper2()}>Credits</p>
    <p className='WrapUpButton introText' onClick={()=>helper7()}>More About the Artists</p>
    <p className='WrapUpButton introText' onClick={()=>helper3()}>World History</p>
    <p className='WrapUpButton introText' onClick={()=>helper()}>More YDTC Projects</p>
    <p className='WrapUpButton introText' onClick={()=>helper4()}>Back to the Beginning</p>
     
    </div>
    
    </div>
  )
}

export default WrapUp





/*<p className='Button introText' onClick={()=>helper3()}>Donate</p>
    <p className='Button introText disabled' onClick={()=>helper3()}>Contact the Creators</p>*/