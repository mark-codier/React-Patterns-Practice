import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    openItemId: null,
}
const accordionSlice = createSlice({
    name: "accordion",
    initialState,
    reducers:{
        toggleItem(state, action){
            state.openItemId = state.openItemId === action.payload ? null : action.payload;
        }
    },
});
export const { toggleItem } = accordionSlice.actions;
export default accordionSlice.reducer;