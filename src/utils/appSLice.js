import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
  name: 'app',
  initialState:{
    inMenuOpen:true
  },
  reducers:{
    toggleMenu:(state, action) =>{
        state.inMenuOpen = !state.inMenuOpen
    }

  }
})
export const {toggleMenu}=appSlice.actions
export default appSlice.reducer;