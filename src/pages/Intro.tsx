import { useDispatch } from 'react-redux';
import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useState } from 'react';

const Intro = () => {

const dispatch= useDispatch();
  
const [style, setStyle] = useState(false)

function helper(){
  setTimeout(() => {
    dispatch(updatePage("TitlePage"));

  }, 2000);
}

  return (
    <div>
    <div className='Button introBigText outlineText' style={style?{"animationName":"fade-out"}:{"animationName":"fade-in"}}    onClick={()=>helper()}>Click Here To Begin</div>
    </div>

  )
}

export default Intro