import React from "react";

import { Button, FormDiv, FormLabel } from "./Main.styled";
import { useDispatch } from "react-redux";
import { addContact } from "redux/phoneSlice";


 const Form =()=>{

  const dispatch = useDispatch();
  
 const handeleSubmite = (e) =>{
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
  dispatch(addContact({name, number}));
 
  console.log(form.elements.number.value);
  }

    return(
        <FormDiv onSubmit={handeleSubmite}
        >
        <FormLabel>Name
       <input
       type="text"
       name="name"
      //  id={id}
      //  value={name}
      //  onChange={handeleChange}
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
       required
     /> 
     </FormLabel>
     <FormLabel> Number
         <input
       type="tel"
       name="number"
      //  id={contacts.number}
      //  value={contacts.number}
      //  onChange={handeleChange}
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
       required
       /></FormLabel>
     <Button type="submit">Add contact</Button>  
      
       </FormDiv>
       
    
)
}


export default Form;