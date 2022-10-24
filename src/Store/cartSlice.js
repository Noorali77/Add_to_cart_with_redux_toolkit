import { ListItem } from '@mui/material';
import {createSlice} from '@reduxjs/toolkit';


const initialState = [];

const cartSlice = createSlice({
   name : 'cart',
   initialState,
   reducers : {
    add(state,action){
        state.push(action.payload);
    },
    remove(state,action){
       return state = state.filter(item => item.id !== action.payload)
    },
    quantityAdd(state,action){
        const itemInCart = state.find((item) => item.id === action.payload);
        console.log('itemInCart',itemInCart)
        if (itemInCart) {
         itemInCart.quantity++;
        } 
    },
    quantityRemove(state,action){
        const itemInCart = state.find((item) => item.id === action.payload);
        console.log('itemInCart',itemInCart)
        if (itemInCart) {
          itemInCart.quantity--;
        } 
    },
   },
});

export const {add,remove,quantityAdd,quantityRemove} = cartSlice.actions;

export default cartSlice.reducer;