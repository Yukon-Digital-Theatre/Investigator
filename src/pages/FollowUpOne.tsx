import React from 'react'
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const FollowUpOne = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("WrapUp"));
    
    }
    

  return (
    <div>


<p className='Button' onClick={()=>helper()}>Finish</p>
    </div>
  )
}

export default FollowUpOne