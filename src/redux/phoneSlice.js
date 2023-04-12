import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistStore, persistReducer } from 'redux-persist';

export const phoneSlice = createSlice({
    name:'phonebook',
    initialState:{
        contacts:[
             {
        id: nanoid(),        
        name: '',
        number: '',
    }]
        },
        
    
    reducers:{
        addContact(state,action) {
            state.contacts.push(action.payload);
        },
        deleteContact(state,action) {
           
            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(index, 1);
        }
    }
})
const persistConfig = {
    key: 'contact',
    storage,
    whitelist:['contacts']
  }
export const contactsReducer = persistReducer(persistConfig, phoneSlise.reducer)
export const {addContact, deleteContact} = phoneSlice.actions;
export const getContactValue = state => state.contacts.value;