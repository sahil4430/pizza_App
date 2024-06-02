import {createSlice} from '@reduxjs/toolkit';
// import Slider from '../components/Slider';
const initialState={
    cart:[],
    // items:Slider,
    totalQuantity:0,
    totalprice:0
};
export const cartSlice = createSlice(
    {
        name:"cart",
        initialState,
        reducers:{addTocart: (state,action) =>{
            state.cart.push(action.payload);
        }
        },
    }
)
export const { addTocart } = cartSlice.actions;
 export default cartSlice.reducer;