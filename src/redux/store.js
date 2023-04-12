import { configureStore } from '@reduxjs/toolkit'
// import { rootReducer } from "./reducer";

import {phoneSlice} from './phoneSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
     reducer: {
        contacts: phoneSlice.reducer,
        filter: filterSlice.reducer
     }
     })

     