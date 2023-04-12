// import { useSelector, useDispatch } from "react-redux";

import { MainDiv } from "./Main.styled";
// import { nanoid } from 'nanoid'
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";

export const App = () => {

//   const dispatch = useDispatch();
//   const numberOffContact = useSelector(state=>state.addContact);

//  const formSubmitHendler = (e)=>{
//   e.preventDefault();
//   const form = e.target;
//   console.log(form);
//   dispatch(addContact(form.elements))
//  }

  return (
   <MainDiv>
     <h1>Phonebook</h1>
     <Form />
     <h2>Contacts</h2>
     <Filter/>
     <ContactList/>
     </MainDiv>
  );
};
