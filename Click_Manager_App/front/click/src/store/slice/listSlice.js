import { createSlice } from "@reduxjs/toolkit";
const initialList = {
//כאן נשמור את הרשימה החיצונית שצריך להציג לה את הפנימית 
   //IDלדעתי נשמור פה את השם של הרשימה ואיזהשהו 
    //ועל ידי זה נדע על איזה רשימה אנחנו וכך נוכל לערוך ולמחוק
    ListName: '',
    token: ''
}
export const listSlice = createSlice({
    name: 'list',
    initialState: initialList,
    reducers: {
        setCurrentListId: (state, action) => {
            state.token = action.payload;
        },
        setCurrentlistName: (state, action) => {
            state.listNamre = action.payload;
        }
    }
})

export const { setCurrentListId ,setCurrentListName} = listSlice.actions;
