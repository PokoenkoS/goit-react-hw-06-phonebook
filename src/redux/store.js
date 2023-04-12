import { configureStore } from '@reduxjs/toolkit';
                                            
import storage from 'redux-persist/lib/storage';
import {phoneSlice} from './phoneSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
     reducer: {
        contacts: phoneSlice.reducer,
        filter: filterSlice.reducer
     }
     
     })

     export const persistor = persistor(store);