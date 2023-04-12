import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
    name:'filter',
    initialState:{
        filter: "",
       
    },
    reducers:{
        filter(state,action) {
            state.filter.push(action.payload);
        }
    }
})

export const {filter} = filterSlice.actions;