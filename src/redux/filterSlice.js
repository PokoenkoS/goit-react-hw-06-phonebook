import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name:'filter',
    initialState:{
        filter: "",
       
    },
    reducers:{
        filterContact(state,action) {
            return action.payload;
        }
    }
})

export const {filterContact} = filterSlice.actions;