import React from 'react'
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const WorldBackground = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("WrapUp"));
    
    }
    

  return (
    <div>


<p className='Button' onClick={()=>helper()}>Back to Wrap Up</p>
    </div>
  )
}

export default WorldBackground