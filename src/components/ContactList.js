import React from "react";
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/phoneSlice";

const ContactList =()=> {
  const dispatch = useDispatch();
  const contacts = useSelector(state=>state.contacts);
 
  console.log(contacts);

       return(
    <div>
    
    <ul>
    {contacts.contacts.map((contact) =>{return (
    <li key={contact.id}>
    {contact.name}:{contact.number}
    <button type="submit" onClick={()=>dispatch(deleteContact(contacts))}> Delete</button>
    </li>
    )
    })}
    </ul>
  </div> 
)
};
ContactList.propTypes = {
  contacts: PropTypes.array,
}

export default ContactList;
  