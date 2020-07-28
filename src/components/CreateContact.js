import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import searlizeForm from 'form-serialize'
import { useAlert } from "react-alert";

const CreateContact = ({createContact}) => {

    const alert = useAlert();

    const [contact, setContact] = useState({
      name: '',
      email: ''
    });

    const { name, email } = contact;

    const updateState = (e) => {
      setContact({
          ...contact,
          [e.target.name]: e.target.value
      });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const val = searlizeForm(e.target, { hash: true });
        createContact(val);
        setContact({
          name: '',
          email: ''
        });
        alert.success("Contact added");
    }


    return ( 
        <div>
        <Link to='/' className='close-create-contact'>Close</Link>
        <form 
            onSubmit={handleSubmit} 
            className='create-contact-form'
        >
          <div className='create-contact-details'>
            <input 
              type='text' 
              placeholder='Name' 
              name='name' 
              onChange={updateState}
              value={name}/>
            <input 
              type='text' 
              placeholder='Email' 
              name='email' 
              onChange={updateState}
              value={email}/>
            <button>Add Contact</button>
          </div>
        </form>
      </div>
     );
}
 
export default CreateContact;