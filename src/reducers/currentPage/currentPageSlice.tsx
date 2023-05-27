import { createSlice } from "@reduxjs/toolkit"
import Intro from "../../pages/Intro";

const initialState = {
    page:"Intro"
};

export const currentPageSlice= createSlice({
    name:"currentPage",
    initialState,
    reducers:{
        updatePage:(state, action)=>{
            state.page = action.payload;
        },
        
    },
});


export const {updatePage}= currentPageSlice.actions;

export default currentPageSlice.reducer;
