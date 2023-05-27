import { useDispatch } from 'react-redux';
import { updatePage } from '../reducers/currentPage/currentPageSlice';

const WrapUp = () => {

  const dispatch= useDispatch();



  function helper(): void {
    dispatch(updatePage("WrapUp"));
  }
  function helper2(): void {
    dispatch(updatePage("WrapUp"));
  }
  function helper3(): void {
    dispatch(updatePage("WrapUp"));
  }
  function helper4(): void {
    dispatch(updatePage("WrapUp"));
  }
  function helper5(): void {
    dispatch(updatePage("WrapUp"));
  }

  return (
    <>
    <div className='introText outlineText'>How do you feel about your choices?
    As you leave this world, think of the things you are in contact with right now -  clothes, furniture, the device you are using. Do you know who made them? Where the material came from?
    When you go out into the world, please keep the outcome of this experience as confidential as possible so others may experience it fresh for themselves.
    This experience has been provided free of charge, but if you’d like to support the artists and presenters follow this link to donate.
    If you wish to share any thoughts with the artistic team click here.
    Explore the links below to read about the artists involved, go back to the history of the world, discover more projects by the Yukon Digital Theatre Collective, or begin again.
    This project has been created with the support of Canada Council for the Arts, @YAC Residency Program, and Yukon Government Department of Tourism and Culture.
    
      Thank you for participating. 
    </div>
    <p className='Button' onClick={()=>helper()}>Back to Wrap Up</p>
    <p className='Button' onClick={()=>helper2()}>Back to Wrap Up</p>
    <p className='Button' onClick={()=>helper3()}>Back to Wrap Up</p>
    <p className='Button' onClick={()=>helper4()}>Back to Wrap Up</p>
    <p className='Button' onClick={()=>helper5()}>Back to Wrap Up</p>
    </>
  )
}

export default WrapUp