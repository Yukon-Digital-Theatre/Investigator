import { updatePage } from '../reducers/currentPage/currentPageSlice';
import { useDispatch } from 'react-redux';

const FollowUpTwoB = () => {
    
    
    const dispatch= useDispatch();

    function helper(){
        dispatch(updatePage("IntroQThree"));
    
    }
    

  return (
    <div>


<p className='Button' onClick={()=>helper()}>Yes</p>
    </div>
  )
}

export default FollowUpTwoB