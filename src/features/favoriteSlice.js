import {createSlice} from '@reduxjs/toolkit';

export const favoriteSlice=createSlice({
    name:'favorites',
    initialState:[],
    reducers:{
      addFavorite:(state,action)=>{
        state.push(action.payload)
        alert('Addes to favorites')
      },
      removeFavorite:(state,action)=>{
        return state.filter((val)=>val.id!==action.payload)
        // alert('Remove from favorites')
      }
   }

})

export const {addFavorite,removeFavorite}=favoriteSlice.actions
export default favoriteSlice.reducer