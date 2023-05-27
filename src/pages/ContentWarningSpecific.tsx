import React from 'react'
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const ContentWarningSpecific = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("IntroQFour"));
    
    }
    

  return (
    <div>

<p className='introBigText outlineText'> Specific Content Warning Here</p>
<p className=' introText outlineText Button' onClick={()=>helper()}>Yes</p>
    </div>
  )
}

export default ContentWarningSpecific