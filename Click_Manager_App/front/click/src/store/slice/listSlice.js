import { createSlice } from "@reduxjs/toolkit";
const initialList = {
//כאן נשמור את הרשימה החיצונית שצריך להציג לה את הפנימית 
   //IDלדעתי נשמור פה את השם של הרשימה ואיזהשהו 
    //ועל ידי זה נדע על איזה רשימה אנחנו וכך נוכל לערוך ולמחוק
    limitList: '',
    publisherList: ''
}
export const listSlice = createSlice({
    name: 'list',
    initialState: initialList,
    reducers: {
        setCurrentLimitList: (state, action) => {//byName
            state.limitList = action.payload;
        },
        setCurrentPublisherList: (state, action) => {
            state.publisherList = action.payload;
        }
    }
})

export const { setCurrentLimitList ,setCurrentPublisherList} = listSlice.actions;
