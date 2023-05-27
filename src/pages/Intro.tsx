import React from 'react'
import { useDispatch } from 'react-redux';
import { updatePage } from '../reducers/currentPage/currentPageSlice';

const Intro = () => {

const dispatch= useDispatch();
  


function helper(){
  setTimeout(() => {
    dispatch(updatePage("TitlePage"));
  }, 2000);
}

  return (
    <div>
    <div className='Button introBigText outlineText' onClick={()=>helper()}>Click Here To Begin</div>
    </div>

  )
}

export default Intro