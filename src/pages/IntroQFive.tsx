import React from 'react'
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const IntroQFive = () => {
    const dispatch= useDispatch();

function helper(){
    dispatch(updatePage("StoryBackground"));

}

function helperTwo(){
    dispatch(updatePage("MeetTheWeaver"));

}


  return (
    <div>
    <p className='outlineText introBigText'>This is a world out of time and place. It is similar to our own.
	However, this country, in this world, is recovering from a war stretching over several years.
	The war ended only six weeks ago.


    Would you like to read more about the history of this world before continuing?</p>
    <p className='introText outlineText Button' onClick={()=>helper()}>Yes</p>
    <p className='introText outlineText Button' onClick={()=>helperTwo()}>No</p>
    </div>
  )
}

export default IntroQFive